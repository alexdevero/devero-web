import { memo } from 'react'

// import { CurrentStats } from '../components/current-stats'
import { Hero } from '../components/hero'
import { Layout } from '../components/layout'
import { SplitScreen } from '../components/split-screen'
// import { Canvas } from '../components/canvas'
// import { RoadMap } from '../components/roadmap'

const Beta = memo(() => {
  return (
    <>
      <Layout title="Home | Devero" pageName="homepage" flexContainer isFluid>
        {/* <Hero /> */}

        <SplitScreen
          theme="dark"
        >
          <Hero />
        </SplitScreen>

        {/* <CurrentStats /> */}

        {/* <RoadMap /> */}
      </Layout>

      {/* <Canvas /> */}
    </>
  )
})

export default Beta
