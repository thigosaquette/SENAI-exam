import { styled } from '../styles'
import fiep from '../assets/barra-integradora/Logo-barra-integradora-fiep.png'
import iel from '../assets/barra-integradora/Logo-barra-integradora-iel.png'
import senai from '../assets/barra-integradora/Logo-barra-integradora-senai.png'
import sesi from '../assets/barra-integradora/Logo-barra-integradora-sesi.png'
import sistemaFiep from '../assets/barra-integradora/Logo-barra-integradora-sistema-fiep.png'

const BarraContainer = styled('header', {
  position: 'absolute',
  zIndex: 999,
  width: '1920px',
  height: '36px',
  left: '50%',
  top: 0,
  transform: 'translateX(-50%)',
  padding: '0 32px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 74.5%, rgba(0, 0, 0, 0.059) 100%), #FFFFFF',
  '@media (max-width: 1520px)': {
    width: '100%',
    height: '50px',
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
  gap: '8px',
  margin: '0 auto',
  width: '1216px',
  maxWidth: '100%',
  height: '36px',
  flex: 'none',
  order: 0,
  flexGrow: 1,
  '@media (max-width: 1520px)': {
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    gap: '0px',
  }
})

const Logos = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 0,
  margin: '0 auto',
  width: '380.94px',
  height: '36px',
  flex: 'none',
  order: 0,
  flexGrow: 0,
  cursor: 'pointer',
  '@media (max-width: 1520px)': {
    width: '100%',
    height: '28px',
    justifyContent: 'center',
    gap: '8px'
  }
})

const LogoWrapper = styled('div', {
  position: 'relative',
  width: 'auto',
  height: '36px',
  '&:hover div[data-base]': {
    display: 'block'
  },
  '@media (max-width: 1520px)': {
    height: '28px'
  }
})

const LogoBase = styled('div', {
  position: 'absolute',
  top: '102.86%',
  bottom: '-8.57%',
  left: 0,
  right: 0,
  height: '4px',
  display: 'none',
  '@media (max-width: 1520px)': {
    height: '2px',
    bottom: '-3px',
    top: 'auto'
  }
})

const LogoShape = styled('img', {
  position: 'absolute',
  top: '0px',
  height: '36px',
  objectFit: 'contain',
  '@media (max-width: 1520px)': {
    height: '28px'
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
  padding: '4px 0',
  gap: '8px',
  margin: '0 auto',
  width: '258px',
  height: '22px',
  flex: 'none',
  order: 1,
  flexGrow: 0,
  cursor: 'pointer',
  '@media (max-width: 1520px)': {
    width: '360px',
    height: '22px'
  }
})

const LinkItem = styled('span', {
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '14px',
  color: '#9BA2B0',
  flex: 'none',
  flexGrow: 0
})

const Divider = styled('div', {
  width: '0px',
  height: '10px',
  borderLeft: '1px solid #9BA2B0',
  flex: 'none',
  flexGrow: 0
})

const BarraIntegradora = () => {
  return (
    <BarraContainer>
      <ConteudoInterno>
        <Logos>
          <LogoWrapper style={{ width: '88px', height: '28px' }}>
            <LogoShape src={sistemaFiep} style={{ width: '69px', left: '9px' }} />
            <LogoBase data-base style={{ background: '#192A6B' }} />
          </LogoWrapper>
          <LogoWrapper style={{ width: '61px', height: '28px' }}>
            <LogoShape src={fiep} style={{ width: '43px', left: '11px' }} />
            <LogoBase data-base style={{ background: '#248EDF' }} />
          </LogoWrapper>
          <LogoWrapper style={{ width: '73px', height: '28px' }}>
            <LogoShape src={senai} style={{ width: '55px', left: '9px' }} />
            <LogoBase data-base style={{ background: '#FF8901' }} />
          </LogoWrapper>
          <LogoWrapper style={{ width: '61px', height: '28px' }}>
            <LogoShape src={sesi} style={{ width: '43px', left: '9px' }} />
            <LogoBase data-base style={{ background: '#96D200' }} />
          </LogoWrapper>
          <LogoWrapper style={{ width: '49px', height: '28px' }}>
            <LogoShape src={iel} style={{ width: '31px', left: '9px' }} />
            <LogoBase data-base style={{ background: '#7314FF' }} />
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
