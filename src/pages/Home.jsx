import AnniversaryBanner from '../components/AnniversaryBanner'
import HomeSection1 from '../components/pages/HomeSection1'
import HomeSection2 from '../components/pages/HomeSection2'
import HomeSection3 from '../components/pages/HomeSection3'
import HomeSection4 from '../components/pages/HomeSection4'
import HomeSection5 from '../components/pages/HomeSection5'
import { styled } from '@stitches/react'

const Container = styled('div', {
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
})

const Teste = styled('div', {
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
