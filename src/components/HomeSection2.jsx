import { styled } from '../styles'

import menino from '../assets/home-part-2/pessoa-lendo.png'
import icon1 from '../assets/home-part-2/mega-fone-icon.png'
import icon2 from '../assets/home-part-2/robo-icon.png'
import icon3 from '../assets/home-part-2/pessoa-icon.png'
import icon4 from '../assets/home-part-2/mao-icon.png'
import icon5 from '../assets/home-part-2/lampada-icon.png'

const Section2 = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0 456px 0 456px',
  gap: '32px',
  position: 'absolute',
  width: '1920px',
  height: '462px',
  left: 'calc(50% - 1920px/2)',
  top: '1756px',
})

const ImageContainer = styled('div', {
  position: 'relative',
  width: '226px',
  height: '334px'
})

const ImageBackground = styled('div', {
  position: 'absolute',
  width: '190px',
  height: '334px',
  left: 'calc(50% - 190px/2 - 6px)',
  bottom: 0,
  background: 'linear-gradient(180deg, rgba(255, 200, 0, 0) 0%, #FFC800 100%)',
  borderRadius: '8px'
})

const MeninoImage = styled('img', {
  position: 'absolute',
  width: '225px',
  height: '334px',
  left: 0,
  top: 0,
  objectFit: 'cover'
})

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '32px',
  width: '750px',
  height: '334px'
})

const TextButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  width: '398px',
  height: '334px'
})

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '20px',
  width: '398px',
  height: '262px'
})

const Title = styled('h2', {
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '120%',
  color: '#192A6B',
  width: '368px',
  paddingRight: '30px',
  height: '114px',
  display: 'flex',
  alignItems: 'center'
})

const Description = styled('p', {
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '180%',
  color: '#48536C',
  width: '368px',
  paddingRight: '30px',
  height: '128px'
})

const Description2 = styled('p', {
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '180%',
  color: '#48536C',
  width: '368px',
  paddingRight: '80px',
  height: '128px',
  marginTop: '-18px'
})

const ButtonSesi = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 20px',
  gap: '4px',
  width: '398px',
  height: '48px',
  background: '#96D200',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer'
})

const ButtonText = styled('span', {
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '100%',
  color: '#192A6B',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center'
})

const FeaturesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '320px',
  height: '334px'
})

const FeatureItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px 0px',
  gap: '8px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  width: '320px'
})

const FeatureIcon = styled('img', {
  width: '40px',
  height: '40px'
})

const FeatureText = styled('span', {
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '120%',
  color: '#48536C'
})

const HomeSection2 = () => {
  return (
    <Section2>
      <ImageContainer>
        <ImageBackground />
        <MeninoImage src={menino} alt="Pessoa lendo" />
      </ImageContainer>
      <ContentContainer>
        <TextButtonContainer>
          <TextContainer>
            <Title>Diferenciais que desenvolvem alunos para fazer a diferença</Title>
            <Description>
              Quer entender como essa metodologia transforma o aprendizado? <br />
            </Description>
            <Description2>
              Conheça mais sobre nosso modelo de ensino inovador. <br />
            </Description2>
          </TextContainer>
          <ButtonSesi><ButtonText>Quero conhecer</ButtonText></ButtonSesi>
        </TextButtonContainer>
        <FeaturesContainer>
          <FeatureItem><FeatureIcon src={icon1} alt="Protagonismo" /><FeatureText>Protagonismo</FeatureText></FeatureItem>
          <FeatureItem><FeatureIcon src={icon2} alt="Competições de Robótica" /><FeatureText>Competições de Robótica</FeatureText></FeatureItem>
          <FeatureItem><FeatureIcon src={icon3} alt="Trabalhos em equipe" /><FeatureText>Trabalhos em equipe</FeatureText></FeatureItem>
          <FeatureItem><FeatureIcon src={icon4} alt="Parcerias com a indústria" /><FeatureText>Parcerias com a indústria</FeatureText></FeatureItem>
          <FeatureItem><FeatureIcon src={icon5} alt="Inovação e tecnologia" /><FeatureText>Inovação e tecnologia</FeatureText></FeatureItem>
        </FeaturesContainer>
      </ContentContainer>
    </Section2>
  )
}

export default HomeSection2
