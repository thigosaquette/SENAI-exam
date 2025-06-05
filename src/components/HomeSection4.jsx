import { styled } from '../styles'
import InputFieldSesi from './InputFieldSesi'
  
const Section4 = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '64px 456px',
  gap: '37px',
  position: 'absolute',
  width: '1920px',
  height: '564px',
  left: 'calc(50% - 1920px/2)',
  top: '4044px',
  background: 'linear-gradient(135.33deg, #4751A8 10.54%, #111D4B 84.86%)',
  boxSizing: 'border-box',
})

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '8px',
  margin: '0 auto',
  width: '379px',
  height: '180px'
})

const Title = styled('h2', {
  width: '379px',
  height: '114px',
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '120%',
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF'
})

const Subtitle = styled('p', {
  width: '379px',
  height: '58px',
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '180%',
  color: '#FFFFFF'
})

const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '32px',
  gap: '24px',
  margin: '0 auto',
  width: '592px',
  height: '436px',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '12px'
})

const FormTitle = styled('h3', {
  width: '528px',
  height: '29px',
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '120%',
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF'
})

const FormFields = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: '16px',
  width: '528px',
  height: '319px'
})

const ButtonSesi = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 20px',
  gap: '4px',
  width: '169px',
  height: '48px',
  background: '#96D200',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  boxSizing: 'border-box',
  flexShrink: 0,
  marginTop: '16px',
})

const ButtonText = styled('span', {
  width: '129px',
  height: '16px',
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

export default function HomeSection4() {
  return (
    <Section4>
      <TextContainer>
        <Title>Acesse o material completo sobre a nossa metodologia</Title>
        <Subtitle>Saiba todos os detalhes sobre a metodologia e diferenciais da Educação Básica do Sesi.</Subtitle>
      </TextContainer>
      <FormContainer>
        <FormTitle>Baixe nosso material exclusivo.</FormTitle>
        <FormFields>
          <InputFieldSesi label="Nome" placeholder="Digite seu..." />
          <InputFieldSesi label="E-mail" placeholder="Digite seu..." />
          <InputFieldSesi label="Telefone" placeholder="Digite seu..." />
          <ButtonSesi><ButtonText>Acessar material</ButtonText></ButtonSesi>
        </FormFields>
      </FormContainer>
    </Section4>
  )
}