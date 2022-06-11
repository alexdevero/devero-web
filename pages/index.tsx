import { memo } from 'react'

// import { CurrentStats } from '../components/current-stats'
import { Hero } from '../components/hero'
import { Layout } from '../components/layout'
// import { Canvas } from '../components/canvas'
// import { RoadMap } from '../components/roadmap'

const Beta = memo(() => (
  <>
    <Layout title="Home | Devero" pageName="homepage">
      <Hero />


      {/* <CurrentStats /> */}

      {/* <RoadMap /> */}
    </Layout>

    {/* <Canvas /> */}
  </>
))

export default Beta
