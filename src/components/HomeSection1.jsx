import { styled } from '../styles'

import assista from '../assets/home-part-1/assista.png'
import formando from '../assets/home-part-1/formando.png'
import menina from '../assets/home-part-1/menina.png'
import selo from '../assets/home-part-1/selo.png'
import sectionBackground from '../assets/home-part-1/section_1_background.jpg'
import sesiIndustria from '../assets/home-part-1/sesi-industria.png'
import sesiInternacional from '../assets/home-part-1/sesi-internacional.png'
import sesiReferenciaIndustria from '../assets/home-part-1/sesi-referencia-industria.png'
import sesiReferenciaInternacional from '../assets/home-part-1/sesi-referencia-internacional.png'

const Section1 = styled('section', {
  position: 'absolute',
  width: '1920px',
  height: '1608px',
  left: '50%',
  transform: 'translateX(-50%)',
  top: '36px',
  background: `linear-gradient(180deg, rgba(255, 200, 0, 0) 20.73%, #FFC800 59.1%), url(${sectionBackground}), #FFC800`,
  backgroundRepeat: 'no-repeat'
})

const Braco = styled('div', {
  position: 'absolute',
  width: '589px',
  height: '415px',
  left: '972px',
  top: 0,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
})

const Menina = styled('img', {
  position: 'absolute',
  width: '589px',
  height: '604px',
  left: '972px',
  top: '0px',
  objectFit: 'contain'
})

const Robo = styled('div', {
  position: 'absolute',
  width: '90px',
  height: '99px',
  left: '1011px',
  top: '168px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
})

const SeloPrincipal = styled('img', {
  position: 'absolute',
  width: '380px',
  height: '251px',
  left: '460px',
  top: '56px',
  objectFit: 'contain'
})

const Formando = styled('img', {
  position: 'absolute',
  width: '399px',
  height: '76px',
  left: '-11px',
  top: '359px',
  objectFit: 'contain'
})

const Assista = styled('img', {
  position: 'absolute',
  width: '1008px',
  height: '572px',
  left: 'calc(50% - 1008px / 2)',
  top: 'calc(50% - 572px / 2 - 8px)',
  borderRadius: '16px',
  objectFit: 'cover'
})

const BarraLogos = styled('div', {
  position: 'absolute',
  width: '1218px',
  height: '107px',
  left: 'calc(50% - 1218px / 2)',
  top: '1146px',
})

const Logo1 = styled('img', {
  position: 'absolute',
  width: '280px',
  height: '87px',
  left: '1px',
  top: '0px',
  paddingLeft: '87px',
  paddingRight: '87px',
  paddingBottom: '10px',
})

const Logo2 = styled('img', {
  position: 'absolute',
  width: '280px',
  height: '106px',
  left: '313px',
  top: '2px',
  paddingTop: '2px',
  paddingLeft: '78px',
  paddingRight: '78px',
  paddingBottom: '7px',
})

const Logo3 = styled('img', {
  position: 'absolute',
  width: '246.02px',
  height: '37px',
  left: '642px',
  top: '20px'
})

const Logo4 = styled('img', {
  position: 'absolute',
  width: '230.43px',
  height: '37px',
  right: '25px',
  top: '20px'
})

const DescriptionSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  isolation: 'isolate',
  position: 'absolute',
  width: '1008px',
  height: '422px',
  left: 'calc(50% - 1008px/2)',
  top: '1297px',
  background: '#F3F5F7',
  borderRadius: '16px',
  textAlign: 'center'
})

const DescriptionTextContainer = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  padding: '0px 0px 24px',
  width: '800px',
  height: '120px',
  borderBottom: '1px solid #48536C',
  flex: 'none',
  order: 0,
  alignSelf: 'center',
  flexGrow: 0,
  zIndex: 0
})

const DescriptionText = styled('p', {
  width: '800px',
  paddingRight: '40px',
  height: '120px',
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '180%',
  color: '#48536C',
  flex: 'none',
  order: 0,
  flexGrow: 0,
  textAlign: 'justify',
})

const HighlightText = styled('h2', {
  width: '720px',
  height: '38px',
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '120%',
  color: '#192A6B',
  flex: 'none',
  order: 1,
  flexGrow: 0,
  zIndex: 1,
  textAlign: 'center',
  margin: 0
})

const AdditionalInfoContainer = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  padding: '24px 0px 0px',
  width: '800px',
  height: '88px',
  borderTop: '1px solid #48536C',
  flex: 'none',
  order: 2,
  flexGrow: 0,
  zIndex: 2,
})

const AdditionalInfoText = styled('p', {
  width: '760px',
  paddingRight: '40px',
  height: '64px',
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '180%',
  color: '#48536C',
  textAlign: 'justify',
})

const HomeSection1 = () => {
  return (
    <Section1>
      <Braco />
      <Menina src={menina} alt="Menina com óculos no computador" />
      <Robo />
      <SeloPrincipal src={selo} alt="Selo 20 anos" />
      <Formando src={formando} alt="Formando gerações que fazem a diferença" />
      <Assista src={assista} alt="Assista ao vídeo" />
      <BarraLogos>
        <Logo1 src={sesiIndustria} alt="Sesi Indústria" />
        <Logo2 src={sesiInternacional} alt="Sesi Internacional" />
        <Logo3 src={sesiReferenciaIndustria} alt="Sesi Referência Indústria" />
        <Logo4 src={sesiReferenciaInternacional} alt="Sesi Referência Internacional" />
      </BarraLogos>
      <DescriptionSection>
        <DescriptionTextContainer>
          <DescriptionText>
            A Educação Básica do Sesi Paraná há 20 anos revoluciona o ensino, preparando estudantes para os desafios da indústria e do mundo digital. Nossa metodologia inovadora, baseada no conceito maker, estimula a criatividade, o pensamento crítico e o protagonismo dos alunos.
          </DescriptionText>
        </DescriptionTextContainer>
        <HighlightText>AQUI, O APRENDIZADO VAI ALÉM DA TEORIA!</HighlightText>
        <AdditionalInfoContainer>
          <AdditionalInfoText>
            Com um ambiente colaborativo e tecnologias de ponta, os estudantes desenvolvem habilidades essenciais para o futuro, explorando na prática soluções para desafios reais.
          </AdditionalInfoText>
        </AdditionalInfoContainer>
      </DescriptionSection>
    </Section1>
  )
}

export default HomeSection1