export const initCanvas = (canvas: HTMLCanvasElement) => {
  const width = canvas.width = window.innerWidth * 0.75
  const height = canvas.height = window.innerHeight * 0.75

  const gl = canvas.getContext('webgl')

  const mouse = { x: 0, y: 0 }

  const numMetaBalls = 30
  const metaBalls = []

  for (let i = 0; i < numMetaBalls; i++) {
    const radius = Math.random() * 60 + 10

    metaBalls.push({
      x: Math.random() * (width - 2 * radius) + radius,
      y: Math.random() * (height - 2 * radius) + radius,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      r: radius * 0.75
    })
  }

  const vertexShaderSrc = `
    attribute vec2 position;

    void main() {
      // position specifies only x and y.
      // We set z to be 0.0, and w to be 1.0
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `

  const fragmentShaderSrc = `
    precision highp float;

    const float WIDTH = ` + (width >> 0) + `.0;
    const float HEIGHT = ` + (height >> 0) + `.0;

    uniform vec3 metaBalls[` + numMetaBalls + `];

    void main(){
      float x = gl_FragCoord.x;
      float y = gl_FragCoord.y;

      float sum = 0.0;
      for (int i = 0; i < ` + numMetaBalls + `; i++) {
        vec3 metaBall = metaBalls[i];
        float dx = metaBall.x - x;
        float dy = metaBall.y - y;
        float radius = metaBall.z;

        sum += (radius * radius) / (dx * dx + dy * dy);
      }

      if (sum >= 0.99) {
        gl_FragColor = vec4(mix(vec3(x / WIDTH, y / HEIGHT, 1.0), vec3(0, 0, 0), max(0.0, 1.0 - (sum - 0.99) * 100.0)), 1.0);
        return;
      }

      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
  `

  function compileShader(shaderSource, shaderType) {
    var shader = gl.createShader(shaderType)
    gl.shaderSource(shader, shaderSource)
    gl.compileShader(shader)

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error('Shader compile failed with: ' + gl.getShaderInfoLog(shader))
    }

    return shader
  }

  function getUniformLocation(program, name) {
    var uniformLocation = gl.getUniformLocation(program, name)
    if (uniformLocation === -1) {
      throw new Error('Can not find uniform ' + name + '.')
    }
    return uniformLocation
  }

  function getAttribLocation(program, name) {
    var attributeLocation = gl.getAttribLocation(program, name)
    if (attributeLocation === -1) {
      throw new Error('Can not find attribute ' + name + '.')
    }
    return attributeLocation
  }

  const vertexShader = compileShader(vertexShaderSrc, gl.VERTEX_SHADER)
  const fragmentShader = compileShader(fragmentShaderSrc, gl.FRAGMENT_SHADER)

  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.useProgram(program)

  const vertexData = new Float32Array([
    -1.0, 1.0, // top left
    -1.0, -1.0, // bottom left
    1.0, 1.0, // top right
    1.0, -1.0, // bottom right
  ])
  const vertexDataBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW)

  const positionHandle = getAttribLocation(program, 'position')
  gl.enableVertexAttribArray(positionHandle)
  gl.vertexAttribPointer(positionHandle,
    2, // position is a vec2
    gl.FLOAT, // each component is a float
    false, // don't normalize values
    2 * 4, // two 4 byte float components per vertex
    0 // offset into each span of vertex data
  )

  const metaBallsHandle = getUniformLocation(program, 'metaBalls')

  function loop() {
    for (let i = 0; i < numMetaBalls; i++) {
      const metaBall = metaBalls[i]

      metaBall.x += metaBall.vx
      metaBall.y += metaBall.vy

      if (metaBall.x < metaBall.r || metaBall.x > width - metaBall.r) metaBall.vx *= -1
      if (metaBall.y < metaBall.r || metaBall.y > height - metaBall.r) metaBall.vy *= -1
    }

    const dataToSendToGPU = new Float32Array(3 * numMetaBalls)

    for (let i = 0; i < numMetaBalls; i++) {
      const baseIndex = 3 * i
      const mb = metaBalls[i]

      dataToSendToGPU[baseIndex + 0] = mb.x
      dataToSendToGPU[baseIndex + 1] = mb.y
      dataToSendToGPU[baseIndex + 2] = mb.r
    }

    gl.uniform3fv(metaBallsHandle, dataToSendToGPU)

    // Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

    requestAnimationFrame(loop)
  }
  loop()

  canvas.onmousemove = function(e) {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }
}
