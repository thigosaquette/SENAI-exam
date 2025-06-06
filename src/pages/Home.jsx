import AnniversaryBanner from '../components/AnniversaryBanner'
import HomeSection1 from '../components/HomeSection1'
import HomeSection2 from '../components/HomeSection2'
import HomeSection3 from '../components/HomeSection3'
import HomeSection4 from '../components/HomeSection4'
import HomeSection5 from '../components/HomeSection5'
import { styled } from '@stitches/react'

const Container = styled('div', {
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
})

const Home = () => {
  return (
    <Container>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <AnniversaryBanner />
    </Container>
  )
}

export default Home
