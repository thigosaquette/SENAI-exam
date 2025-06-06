import { styled } from '../styles'
import fiep from '../assets/barra-integradora/Logo-barra-integradora-fiep.png'
import iel from '../assets/barra-integradora/Logo-barra-integradora-iel.png'
import senai from '../assets/barra-integradora/Logo-barra-integradora-senai.png'
import sesi from '../assets/barra-integradora/Logo-barra-integradora-sesi.png'
import sistemaFiep from '../assets/barra-integradora/Logo-barra-integradora-sistema-fiep.png'

const FooterWrapper = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  position: 'absolute',
  width: '1920px',
  height: '112px',
  left: 'calc(50% - 1920px/2)',
  top: '5373px',
  background: '#FFFFFF',
  boxShadow: '0px -2px 7px -1px rgba(0, 0, 0, 0.17)',
  '@media (max-width: 1520px)': {
    padding: '12px 0px 0px',
    width: '360px',
    height: '122px',
    left: 'calc(50% - 360px/2)',
    top: '6143px',
  },
})

const LogoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 1520px)': {
    alignItems: 'center',
    justifyContent: 'center'
  },
})

const LogosRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1216px',
  height: '60px',
  '@media (max-width: 1520px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    width: '360px',
    height: '28px',
  },
})

const LogoBox = styled('div', {
  position: 'relative',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 1520px)': {
    height: '28px'
  },
})

const DividerVertical = styled('div', {
  width: '1px',
  height: '25.13px',
  border: '1px solid #D9DEE3',
  marginLeft: '30px',
  marginRight: '30px',
  '@media (max-width: 1520px)': {
    display: 'none'
  },
})

const LogoImage = styled('img', {
  height: '60px',
  objectFit: 'contain',
  cursor: 'pointer',
})

const DividerLine = styled('div', {
  width: '100%',
  borderTop: '1px solid #D9DEE3',
  '@media (max-width: 1520px)': {
    marginTop: '1rem'
  },
})

const LinkItem = styled('span', {
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '10px',
  lineHeight: '14px',
  color: '#9BA2B0',
  cursor: 'pointer',
  width: 'fit-content',
  height: '14px',
  '@media (max-width: 1520px)': {
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
})

const Divider = styled('div', {
  width: '0px',
  height: '10px',
  borderLeft: '1px solid #9BA2B0',
  '@media (max-width: 1520px)': {
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
})

const Links = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px 0px',
  gap: '8px',
  height: '34px',
  '@media (max-width: 1520px)': {
    width: '360px',
    height: '34px',
  },
})

const Address = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '12px 0px',
  width: '452px',
  height: '52px',
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '120%',
  textAlign: 'center',
  color: '#9BA2B0',
  cursor: 'pointer',
  '@media (max-width: 1520px)': {
    flexDirection: 'row',
    gap: '8px',
    width: '360px',
    height: '48px',
    fontSize: '10px',
    lineHeight: '12px',
  },
})

export default function BarraIntegradoraFooter() {
  return (
    <FooterWrapper>
      <LogosRow>
          <LogoContainer>  
            <LogoBox style={{ width: '5.5rem', height: '1.75rem' }}>
              <LogoImage src={sistemaFiep} style={{ width: '4.3rem', left: '0.5625rem' }} />
            </LogoBox>
            <LogoBox style={{ width: '3.8125rem', height: '1.75rem' }}>
              <LogoImage src={fiep} style={{ width: '2.6875rem', left: '0.6875rem' }} />
            </LogoBox>
            <LogoBox style={{ width: '4.5625rem', height: '1.75rem' }}>
              <LogoImage src={senai} style={{ width: '3.4375rem', left: '0.5625rem' }} />
            </LogoBox>
            <LogoBox style={{ width: '3.8125rem', height: '1.75rem' }}>
              <LogoImage src={sesi} style={{ width: '2.6875rem', left: '0.5625rem' }} />
            </LogoBox>
            <LogoBox style={{ width: '3.0625rem', height: '1.75rem' }}>
              <LogoImage src={iel} style={{ width: '1.9375rem', left: '0.5625rem' }} />
            </LogoBox>
          </LogoContainer>
        <DividerVertical />
        <Links>
          <LinkItem>SAC</LinkItem><Divider />
          <LinkItem>Carreira</LinkItem><Divider />
          <LinkItem>Licitações</LinkItem><Divider />
          <LinkItem>Imprensa</LinkItem><Divider />
          <LinkItem>Ouvidoria</LinkItem>
        </Links>
      </LogosRow>
      <DividerLine />
      <Address>
        Sistema Fiep - Sistema Federação das Indústrias do Estado do Paraná Av. Cândido de Abreu, 200 - Centro Cívico - 80530-902 - Curitiba-PR
      </Address>
    </FooterWrapper>
  )
}
