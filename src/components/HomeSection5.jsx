import { styled, theme } from '../styles'
import linkIcon from '../assets/home-part-5/link-icon.png'
import logo1 from '../assets/home-part-1/sesi-industria.png'
import logo2 from '../assets/home-part-1/sesi-internacional.png'
import logo3 from '../assets/home-part-1/sesi-referencia-industria.png'
import logo4 from '../assets/home-part-1/sesi-referencia-internacional.png'

const Section5 = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '64px 352px',
  gap: '32px',
  position: 'absolute',
  width: '1920px',
  height: '565px',
  left: 'calc(50% - 1920px/2)',
  top: '4608px',
  background: '#FFD333',
  '@media (max-width: 1520px)': {
    padding: '32px 20px',
    gap: '20px',
    width: '360px',
    height: '529px',
    left: 'calc(50% - 360px/2)',
    top: '5166px',
  },
})

const Title = styled('h2', {
  width: '100%',
  maxWidth: '1216px',
  height: '76px',
  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '120%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: '$textPrimaryBlue',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '116px',
    fontSize: '24px',
    color: '#192A6B',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 0,
  gap: '32px',
  width: '1216px',
  height: '329px',
  '@media (max-width: 1520px)': {
    gap: '16px',
    width: '320px',
    height: '329px',
    overflowX: 'scroll',
    flex: 'none',
    order: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  width: '280px',
  height: '325.06px',
  background: '$background',
  boxShadow: '0px 5px 14px -1px rgba(0, 0, 0, 0.12)',
  borderRadius: '8px',
  '@media (max-width: 1520px)': {
    width: '280px',
    height: '325.06px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
})

const HeaderCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px 75px',
  gap: '4px',
  width: '280px',
  height: '137.06px',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  '@media (max-width: 1520px)': {
    background: '#8448D1',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const Logo = styled('img', {
  width: '106.7px',
  height: '77.06px',
  filter: 'brightness(0) invert(1)'
})

const CardBodyContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px 20px 24px',
  gap: '8px',
  width: '280px',
  height: '140px',
  '@media (max-width: 1520px)': {
    flex: 'none',
    order: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const CardBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '16px 0px 0px',
  gap: '8px',
  width: '240px',
  height: '116px',
  '@media (max-width: 1520px)': {
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 20px 24px',
  gap: '8px',
  width: '280px',
  height: '48px',
  background: '$background',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  '@media (max-width: 1520px)': {
    flex: 'none',
    order: 2,
    flexGrow: 0,
  },
})

const LinkButton = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 0,
  gap: '4px',
  width: '85px',
  height: '24px',
  borderRadius: '4px',
  cursor: 'pointer',
  '@media (max-width: 1520px)': {
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
})

const ButtonText = styled('span', {
  width: '57px',
  height: '14px',
  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '100%',
  color: '$linkBlue',
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 1520px)': {
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
})

const Icon = styled('img', {
  width: '24px',
  height: '24px',
  padding: '5.5px',
})

function CardItem({ bgColor, logo, logoWidth = '107px', logoHeight = '77px', description }) {
  return (
    <Card>
      <HeaderCard style={{ background: bgColor }}>
        <Logo src={logo} style={{ width: logoWidth, height: logoHeight }} />
      </HeaderCard>
      <CardBodyContainer>
        <CardBody>
          <p style={{ fontFamily: `${theme.fonts.primary}`, fontSize: '14px', color: `${theme.colors.textNeutralMid}`, lineHeight: '150%' }}>{description}</p>
        </CardBody>
      </CardBodyContainer>
      <ButtonContainer>
        <LinkButton>
          <ButtonText>Conheça</ButtonText>
          <Icon src={linkIcon} />
        </LinkButton>
      </ButtonContainer>
    </Card>
  )
}

export default function HomeSection5() {
  return (
    <Section5>
      <Title>Conheça todas as instituições de ensino<br/> da Educação Básica do Sesi</Title>
      <Container>
        <CardItem bgColor="#8448D1" logo={logo1} logoWidth='107px' logoHeight='77px' description="Metodologia de ensino inovadora, que ajuda a desenvolver o conhecimento e competências importantes para todos os desafios da vida." />
        <CardItem bgColor="#2C7BD8" logo={logo2} logoWidth='108px' logoHeight='88px' description="Educação que trabalha o desenvolvimento do conhecimento e de competências com imersão Bilíngue, Trílingue e cultura estrangeiras." />
        <CardItem bgColor="#2FAFA6" logo={logo3} logoWidth='230px' logoHeight='37px' description="A Unidade em São José dos Pinhais foi selecionada para ser a primeira escola a oferecer as novidades tecnológicas e pedagógicas da rede Sesi no Brasil." />
        <CardItem bgColor="#003A59" logo={logo4} logoWidth='220px' logoHeight='37px' description="Com uma proposta pedagógica inovadora, unimos a tecnologia da Escola Sesi de Referência da Indústria com o ensino bilíngue do Colégio Sesi Internacional." />
      </Container>
    </Section5>
  )
}
