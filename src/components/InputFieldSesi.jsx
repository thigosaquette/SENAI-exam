import { styled } from '../styles'

const InputField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  width: '528px',
  height: '69px',
  '@media (max-width: 1520px)': {
    width: '280px',
    height: '58px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const Label = styled('label', {
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  color: '$background',
  lineHeight: '120%',
  '@media (max-width: 1520px)': {
    fontSize: '12px',
    height: '14px',
  },
})

const InputBox = styled('input', {
  padding: '12px 12px 12px 16px',
  width: '100%',
  height: '48px',
  background: '#F3F5F7',
  borderRadius: '4px',
  border: 'none',
  fontSize: '14px',
  color: '$textNeutralLight',
  boxSizing: 'border-box',
  '@media (max-width: 1520px)': {
    padding: '8px 12px',
    width: '280px',
    height: '40px',
    flex: 'none',
    order: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

export default function InputFieldSesi({ label, placeholder }) {
  return (
    <InputField>
      <Label>{label}</Label>
      <InputBox placeholder={placeholder} />
    </InputField>
  )
}