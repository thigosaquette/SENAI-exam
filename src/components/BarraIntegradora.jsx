import { styled, theme } from '../styles'
import fiep from '../assets/barra-integradora/Logo-barra-integradora-fiep.png'
import iel from '../assets/barra-integradora/Logo-barra-integradora-iel.png'
import senai from '../assets/barra-integradora/Logo-barra-integradora-senai.png'
import sesi from '../assets/barra-integradora/Logo-barra-integradora-sesi.png'
import sistemaFiep from '../assets/barra-integradora/Logo-barra-integradora-sistema-fiep.png'

const BarraContainer = styled('header', {
  position: 'absolute',
  zIndex: 999,
  width: '100vw',
  height: '2.25rem',
  left: '50%',
  top: 0,
  transform: 'translateX(-50%)',
  padding: '0 2rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '$background',
  backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 74.5%, rgba(0,0,0,0.059) 100%)',

  '@media (max-width: 1520px)': {
    width: '100%',
    height: '3.125rem',
    left: 0,
    transform: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0
  }
})

const ConteudoInterno = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 0,
  gap: '0.5rem',
  margin: '0 auto',
  width: '76rem',
  maxWidth: '100%',
  height: '2.25rem',
  flex: 'none',
  order: 0,
  flexGrow: 1,
  '@media (max-width: 1520px)': {
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    gap: 0
  }
})

const Logos = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 0,
  margin: '0 auto',
  width: '23.8rem',
  height: '2.25rem',
  flex: 'none',
  order: 0,
  flexGrow: 0,
  cursor: 'pointer',
  '@media (max-width: 1520px)': {
    width: '100%',
    height: '1.75rem',
    justifyContent: 'center',
    gap: '0.5rem'
  }
})

const LogoWrapper = styled('div', {
  position: 'relative',
  width: 'auto',
  height: '2.25rem',
  '&:hover div[data-base]': {
    display: 'block'
  },
  '@media (max-width: 1520px)': {
    height: '1.75rem'
  }
})

const LogoBase = styled('div', {
  position: 'absolute',
  top: '102.86%',
  bottom: '-8.57%',
  left: 0,
  right: 0,
  height: '0.25rem',
  display: 'none',
  '@media (max-width: 1520px)': {
    height: '0.125rem',
    bottom: '-0.1875rem',
    top: 'auto'
  }
})

const LogoShape = styled('img', {
  position: 'absolute',
  top: '0px',
  height: '1.8rem',
  objectFit: 'contain',
  '@media (max-width: 1520px)': {
    height: '1.75rem'
  }
})

const DividerLine = styled('div', {
  width: '100%',
  height: '0px',
  borderBottom: '1px solid #D9DEE3',
  display: 'none',
  '@media (max-width: 1520px)': {
    display: 'block'
  }
})

const LinksUteis = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.25rem 0',
  gap: '0.5rem',
  margin: '0 auto',
  width: '16.125rem',
  height: '1.375rem',
  flex: 'none',
  order: 1,
  flexGrow: 0,
  cursor: 'pointer',
  '@media (max-width: 1520px)': {
    width: '22.5rem',
    height: '1.375rem'
  }
})

const LinkItem = styled('span', {
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '0.75rem',
  lineHeight: '1.25',
  color: '$textNeutralLight',
  flex: 'none',
  flexGrow: 0,
  '@media (min-width: 360px)': {
    fontSize: '0.8125rem'
  },
  '@media (min-width: 480px)': {
    fontSize: '0.875rem'
  }
})

const Divider = styled('div', {
  width: '0px',
  height: '0.625rem',
  borderLeft: '1px solid $textNeutralLight',
  flex: 'none',
  flexGrow: 0
})

const BarraIntegradora = () => {
  return (
    <BarraContainer>
      <ConteudoInterno>
        <Logos>
          <LogoWrapper style={{ width: '5.5rem', height: '1.75rem' }}>
            <LogoShape src={sistemaFiep} style={{ width: '4.3rem', left: '0.5625rem' }} />
            <LogoBase data-base style={{ background: theme.colors.sistemaFiepBlue }} />
          </LogoWrapper>
          <LogoWrapper style={{ width: '3.8125rem', height: '1.75rem' }}>
            <LogoShape src={fiep} style={{ width: '2.6875rem', left: '0.6875rem' }} />
            <LogoBase data-base style={{ background: theme.colors.fiepBlue }} />
          </LogoWrapper>
          <LogoWrapper style={{ width: '4.5625rem', height: '1.75rem' }}>
            <LogoShape src={senai} style={{ width: '3.4375rem', left: '0.5625rem' }} />
            <LogoBase data-base style={{ background: theme.colors.senaiOrange }} />
          </LogoWrapper>
          <LogoWrapper style={{ width: '3.8125rem', height: '1.75rem' }}>
            <LogoShape src={sesi} style={{ width: '2.6875rem', left: '0.5625rem' }} />
            <LogoBase data-base style={{ background: theme.colors.sesiGreen }} />
          </LogoWrapper>
          <LogoWrapper style={{ width: '3.0625rem', height: '1.75rem' }}>
            <LogoShape src={iel} style={{ width: '1.9375rem', left: '0.5625rem' }} />
            <LogoBase data-base style={{ background: theme.colors.ielPurple }} />
          </LogoWrapper>

        </Logos>
        <DividerLine />
        <LinksUteis>
          <LinkItem>SAC</LinkItem><Divider />
          <LinkItem>Carreira</LinkItem><Divider />
          <LinkItem>Licitações</LinkItem><Divider />
          <LinkItem>Imprensa</LinkItem><Divider />
          <LinkItem>Ouvidoria</LinkItem>
        </LinksUteis>
      </ConteudoInterno>
    </BarraContainer>
  )
}

export default BarraIntegradora
