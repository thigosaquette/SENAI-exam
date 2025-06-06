import React, { useState, useEffect } from 'react'
import { styled } from '../styles'

import menino from '../assets/home-part-2/pessoa-lendo.png'
import icon1 from '../assets/home-part-2/mega-fone-icon.png'
import icon2 from '../assets/home-part-2/robo-icon.png'
import icon3 from '../assets/home-part-2/pessoa-icon.png'
import icon4 from '../assets/home-part-2/mao-icon.png'
import icon5 from '../assets/home-part-2/lampada-icon.png'
import okIcon from '../assets/icons/ok-icon.png'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia('(max-width: 1520px)').matches)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return isMobile
}

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
  '@media (max-width: 1520px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '32px 20px',
    gap: '40px',
    width: '360px',
    height: '663px',
    left: 'calc(50% - 360px/2)',
    top: '1180px',
  },
})

const ImageContainer = styled('div', {
  position: 'relative',
  width: '226px',
  height: '334px',
})

const ImageBackground = styled('div', {
  position: 'absolute',
  width: '190px',
  height: '334px',
  left: 'calc(50% - 190px/2 - 6px)',
  bottom: 0,
  background: 'linear-gradient(180deg, rgba(255, 200, 0, 0) 0%, #FFC800 100%)',
  borderRadius: '8px',
  '@media (max-width: 1520px)': {
    display: 'none',
  },
})

const MeninoImage = styled('img', {
  position: 'absolute',
  width: '225px',
  height: '334px',
  left: 0,
  top: 0,
  objectFit: 'cover',
  '@media (max-width: 1520px)': {
    display: 'none',
  },
})

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '32px',
  width: '750px',
  height: '334px',
  '@media (max-width: 1520px)': {
    marginTop: '-24px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '16px',
    width: '320px',
    height: '599px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const TextButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  width: '398px',
  height: '334px',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '250px',
  },
})

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '20px',
  width: '398px',
  height: '262px',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '250px',
  },
})

const Title = styled('h2', {
  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '120%',
  color: '#192A6B',
  width: '368px',
  paddingRight: '30px',
  height: '114px',
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '87px',
    fontSize: '24px',
    lineHeight: '120%',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
    paddingRight: 0,
  },
})

const Description = styled('p', {
  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '180%',
  color: '$textNeutralMid',
  width: '368px',
  paddingRight: '30px',
  height: '128px',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '70px',
    fontSize: '18px',
    lineHeight: '180%',
    flex: 'none',
    order: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
    paddingRight: 0,
  },
})

const Description2 = styled('p', {
  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '180%',
  color: '$textNeutralMid',
  width: '368px',
  paddingRight: '80px',
  height: '128px',
  marginTop: '-20px',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '80px',
    fontSize: '18px',
    lineHeight: '180%',
    flex: 'none',
    order: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
    paddingRight: 0,
  },
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
  background: '$sesiGreen',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  '@media (max-width: 1520px)': {
    position: 'absolute',
    bottom: '32px',
    padding: '0px 16px',
    width: '320px',
    height: '40px',
    flex: 'none',
    order: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const ButtonText = styled('span', {
  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '100%',
  color: '#192A6B',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  '@media (max-width: 1520px)': {
    height: '14px',
    fontSize: '14px',
    lineHeight: '100%',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
})

const FeaturesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '320px',
  height: '334px',
  '@media (max-width: 1520px)': {
    alignItems: 'flex-start',
    padding: '0px',
    width: '320px',
    height: '240px',
    flex: 'none',
    order: 2,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const FeatureItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px 0px',
  gap: '8px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  width: '320px',
  '@media (max-width: 1520px)': {
    alignItems: 'center',
    height: '48px',
    padding: 0,
  },
})

const FeatureIcon = styled('img', {
  width: '40px',
  height: '40px',
  '@media (max-width: 1520px)': {
    width: '19px',
    height: '19px',
  },
})

const FeatureText = styled('span', {
  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '120%',
  color: '$textNeutralMid',
})

const HomeSection2 = () => {
  const isMobile = useIsMobile()
  const buttonText = isMobile ? 'Vou conhecer' : 'Quero conhecer'

  const features = [
    { icon: icon1, text: 'Protagonismo' },
    { icon: icon2, text: 'Competições de Robótica' },
    { icon: icon3, text: 'Trabalhos em equipe' },
    { icon: icon4, text: 'Parcerias com a indústria' },
    { icon: icon5, text: 'Inovação e tecnologia' },
  ]

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
          <ButtonSesi><ButtonText>{buttonText}</ButtonText></ButtonSesi>
        </TextButtonContainer>
        <FeaturesContainer>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <FeatureIcon src={isMobile ? okIcon : feature.icon} alt={feature.text} />
              <FeatureText>{feature.text}</FeatureText>
            </FeatureItem>
          ))}
        </FeaturesContainer>
      </ContentContainer>
    </Section2>
  )
}

export default HomeSection2