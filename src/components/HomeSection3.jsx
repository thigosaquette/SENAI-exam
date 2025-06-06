import { styled } from '../styles'
import seloRoxo from '../assets/home-part-3/selo-roxo.png'
import seloAzul from '../assets/home-part-3/selo-azul.png'
import seloAzulVerde from '../assets/home-part-3/selo-azul-verde.png'
import seloVerde from '../assets/home-part-3/selo-verde.png'
import seloLaranja from '../assets/home-part-3/selo-laranja.png'

const Section3 = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '108px 456px',
  gap: '37px',
  position: 'absolute',
  maxWidth: '1920px',
  height: '1826px',
  left: 'calc(50% - 1920px/2)',
  top: '2218px',
  background: '#FFC800',
  boxSizing: 'border-box',
  '@media (max-width: 1520px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '32px 20px',
    width: '360px',
    height: '2620.03px',
    left: 'calc(50% - 360px/2)',
    top: '1843px',
  },
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  width: '384px',
  height: '341px',
  '@media (max-width: 1520px)': {
    padding: '0px',
    gap: '16px',
    width: '320px',
    height: '293px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
})

const ContainerTitle = styled('div', {
  width: '384px',
  height: '80px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '30px',
  lineHeight: '120%',
  color: '#192A6B',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '74px',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '120%',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const BoldSpan = styled('span', {
  fontWeight: 700,
  fontSize: '32px',
  '@media (max-width: 1520px)': {
    fontSize: '24px',
  },
})

const ContainerDescription = styled('p', {
  width: '384px',
  height: '145px',
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '180%',
  color: '$textNeutralMid',
  flex: 'none',
  order: 1,
  alignSelf: 'stretch',
  flexGrow: 0,
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '203px',
  },
})

const Cards = styled('div', {
  position: 'relative',
  width: '592px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  marginTop: '12px',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '2263.03px',
    flex: 'none',
    order: 1,
    flexGrow: 0,
    marginTop: '-25px',
  },
})

const CardWrapper = styled('div', {
  width: '592px',
  height: '302px',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '447px',
  },
})

const CardContent = styled('div', {
  display: 'flex',
  height: '100%',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '48px 24px',
  gap: '24px',
  background: 'linear-gradient(180deg, #FFFFFF 67.22%, #FFC800 192.05%)',
  borderRadius: '12px',
  '@media (max-width: 1520px)': {
    flexDirection: 'column',
    padding: '36px 24px',
    width: '320px',
    height: '415px',
    background: 'linear-gradient(180deg, #FFFFFF 88.04%, #FFC800 136.46%)',
    borderRadius: '8px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const Selo = styled('img', {
  width: '260px',
  height: '145px',
  flex: 'none',
  order: 0,
  flexGrow: 0,
  '@media (max-width: 1520px)': {
    width: '260px',
    height: '145px',
  },
})

const TextCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '12px',
  width: '260px',
  height: '174px',
  flex: 'none',
  order: 1,
  flexGrow: 1,
  '@media (max-width: 1520px)': {
    width: '272px',
    height: '174px',
    flexGrow: 0,
    alignSelf: 'stretch',
  },
})

const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  padding: '0px',
  gap: '8px',
  width: '260px',
  height: '34px',
  flex: 'none',
  order: 0,
  alignSelf: 'stretch',
  flexGrow: 0,
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '28px',
  lineHeight: '120%',
  variants: {
    color: {
      roxo: { color: '$highlightPurple' },
      azul: { color: '$highlightBlue' },
      azulVerde: { color: '$highlightTeal' },
      verde: { color: '$highlightGreen' },
      laranja: { color: '$highlightOrange' }
    }
  },
  '@media (max-width: 1520px)': {
    width: '272px',
    height: '34px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const DescriptionText = styled('p', {
  width: '260px',
  height: '128px',
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '180%',
  color: '$textNeutralMid',
  flex: 'none',
  order: 1,
  alignSelf: 'stretch',
  flexGrow: 0,
  '@media (max-width: 1520px)': {
    width: '272px',
    height: '128px',
  },
})

function Card({ image, title, description, top, color }) {
  return (
    <CardWrapper style={{ top }}>
      <CardContent>
        <Selo src={image} alt={title} />
        <TextCardContainer>
          <TitleContainer color={color}>{title}</TitleContainer>
          <DescriptionText>{description}</DescriptionText>
        </TextCardContainer>
      </CardContent>
    </CardWrapper>
  )
}

export default function HomeSection3() {
  return (
    <Section3>
      <Container>
        <ContainerTitle>
          <BoldSpan>Metodologia STEAM:</BoldSpan> aprendizado para o futuro
        </ContainerTitle>
        <ContainerDescription>
          Na Educação Básica do Sesi, a metodologia STEAM integra as disciplinas de Ciências, Tecnologia, Engenharia, Artes e Matemática, promovendo um aprendizado dinâmico, unindo criatividade, inovação e resolução de problemas reais.
        </ContainerDescription>
      </Container>
      <Cards>
        <Card image={seloRoxo} title="Ciências" description="Estimula a investigação e o pensamento crítico para compreender fenômenos e desenvolver soluções." top="0px" color="roxo" />
        <Card image={seloAzul} title="Engenharia" description="Foca na aplicação prática do conhecimento para criar, testar e aprimorar projetos e protótipos." top="333px" color="azul" />
        <Card image={seloAzulVerde} title="Tecnologia" description="Prepara os alunos para o mundo digital, incentivando o uso de ferramentas e inovações tecnológicas." top="666px" color="azulVerde" />
        <Card image={seloVerde} title="Artes" description="Desenvolve a expressão criativa e o pensamento inovador, essenciais para a solução de desafios complexos." top="999px" color="verde" />
        <Card image={seloLaranja} title="Matemática" description="Aprimora o raciocínio lógico e a capacidade analítica, fundamentais para a resolução de problemas." top="1332px" color="laranja" />
      </Cards>
    </Section3>
  )
}