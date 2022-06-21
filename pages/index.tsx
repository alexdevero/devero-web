import { memo, useCallback, useEffect, useState } from 'react'

import {
  // Canvas,
  // CurrentStats,
  Hero,
  Layout,
  // RoadMap,
  SplitScreen,
} from '@components'

import { useWindowEvent } from '@hooks'

const Beta = memo(() => {
  const [isMobile, setIsMobile] = useState(false)

  const onResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  useWindowEvent('resize', onResize)

  useEffect(() => {
    onResize()
  }, [onResize])

  return (
    <>
      <Layout title="Home | Devero" pageName="homepage" flexContainer>
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
