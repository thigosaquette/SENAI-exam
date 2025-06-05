import { useEffect, useState } from 'react'
import AnniversaryBanner from '../components/AnniversaryBanner'
import HomeSection1 from '../components/HomeSection1'
import HomeSection2 from '../components/HomeSection2'
import HomeSection3 from '../components/HomeSection3'
import HomeSection4 from '../components/HomeSection4'
import HomeSection5 from '../components/HomeSection5'

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <>
      {!isMobile ? (
        <>
          <HomeSection1 />
          <HomeSection2 />
          <HomeSection3 />
          <HomeSection4 />
          <HomeSection5 />
          <AnniversaryBanner />
        </>
      ) : (
        <>
          {/* <HomeSection1 /> */}
          {/* <HomeSection2 /> */}
          {/* <HomeSection3 /> */}
          {/* <HomeSection4 /> */}
          {/* <HomeSection5 /> */}
          {/* <AnniversaryBanner /> */}
        </>
      )}
    </>
  )
}

export default Home