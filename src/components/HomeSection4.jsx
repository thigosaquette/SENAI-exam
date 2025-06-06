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
  '@media (max-width: 1520px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '32px 20px',
    gap: '37px',
    width: '360px',
    height: '703px',
    left: 'calc(50% - 360px/2)',
    top: '4463px',
  },
})

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '8px',
  margin: '0 auto',
  width: '379px',
  height: '180px',
  '@media (max-width: 1520px)': {
    gap: '16px',
    width: '320px',
    height: '190px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
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
  color: '$background',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '87px',
    fontSize: '24px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const Subtitle = styled('p', {
  width: '379px',
  height: '58px',
  fontFamily: 'Open Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '180%',
  color: '$background',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '87px',
    flex: 'none',
    order: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
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
  borderRadius: '12px',
  '@media (max-width: 1520px)': {
    padding: '32px 20px',
    width: '320px',
    height: '412px',
    borderRadius: '8px',
    flex: 'none',
    order: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
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
  color: '$background',
  '@media (max-width: 1520px)': {
    width: '280px',
    height: '58px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const FormFields = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: '16px',
  width: '528px',
  height: '319px',
  '@media (max-width: 1520px)': {
    gap: '12px',
    width: '280px',
    height: '198px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
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
  background: '$sesiGreen',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  boxSizing: 'border-box',
  flexShrink: 0,
  marginTop: '16px',
  '@media (max-width: 1520px)': {
    padding: '0px 16px',
    width: '100%',
    height: '40px',
    flex: 'none',
    order: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
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
  textAlign: 'center',
  '@media (max-width: 1520px)': {
    width: '113px',
    height: '14px',
    fontSize: '14px',
  },
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