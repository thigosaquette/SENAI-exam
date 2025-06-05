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
  boxShadow: '0px -2px 7px -1px rgba(0, 0, 0, 0.17)'
})

const LogosRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1216px',
  height: '60px',
})

const LogoBox = styled('div', {
  position: 'relative',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const DividerVertical = styled('div', {
  width: '1px',
  height: '25.13px',
  border: '1px solid #D9DEE3',
  marginLeft: '30px',
  marginRight: '30px',
})

const LogoImage = styled('img', {
  height: '60px',
  objectFit: 'contain',
  cursor: 'pointer',
})

const DividerLine = styled('div', {
  width: '100%',
  borderTop: '1px solid #D9DEE3'
})

const LinkItem = styled('span', {
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '10px',
  color: '#9BA2B0',
  cursor: 'pointer'
})

const Divider = styled('div', {
  width: '0px',
  height: '10px',
  borderLeft: '1px solid #9BA2B0'
})

const Links = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  height: '22px',
})

const Address = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '12px 0px',
  width: '452px',
  height: '52px',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '12px',
  lineHeight: '120%',
  textAlign: 'center',
  color: '#9BA2B0',
  cursor: 'pointer',
})

export default function BarraIntegradoraFooter() {
  return (
    <FooterWrapper>
      <LogosRow>
        <LogoBox style={{ width: '101.53px' }}>
          <LogoImage src={sistemaFiep} style={{ width: '101.53px', height: '12px', left: '0px' }} />
        </LogoBox>
        <LogoBox style={{ width: '69.84px' }}>
          <LogoImage src={fiep} style={{ width: '51.84px', height: '12px', left: '9.44px' }} />
        </LogoBox>
        <LogoBox style={{ width: '84.24px' }}>
          <LogoImage src={senai} style={{ width: '66.24px', height: '12px', left: '8.59px' }} />
        </LogoBox>
        <LogoBox style={{ width: '69.88px' }}>
          <LogoImage src={sesi} style={{ width: '51.88px', height: '12px',  left: '9.36px' }} />
        </LogoBox>
        <LogoBox style={{ width: '55.44px' }}>
          <LogoImage src={iel} style={{ width: '37px', height: '12px', left: '12px' }} />
        </LogoBox>
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
