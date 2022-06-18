import { memo, useCallback, useState } from 'react'

// import { CurrentStats } from '../components/current-stats'
import { Hero } from '../components/hero'
import { Layout } from '../components/layout'
import { SplitScreen } from '../components/split-screen'
// import { Canvas } from '../components/canvas'
// import { RoadMap } from '../components/roadmap'

import { useWindowEvent } from '../hooks/use-window-event'

const Beta = memo(() => {
  const [isMobile, setIsMobile] = useState(false)

  const onResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  useWindowEvent('resize', onResize)

  return (
    <>
      <Layout title="Home | Devero" pageName="homepage" flexContainer isFluid>
        {/* <Hero /> */}

        {isMobile ? (
          <Hero />
        ) : (
          <SplitScreen
            theme="dark"
          >
            <Hero />
          </SplitScreen>
        )}

        {/* <CurrentStats /> */}

        {/* <RoadMap /> */}
      </Layout>

      {/* <Canvas /> */}
    </>
  )
})

export default Beta
