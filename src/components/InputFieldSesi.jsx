import { styled } from '../styles'

const InputField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  width: '528px',
  height: '69px'
})

const Label = styled('label', {
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  color: '#FFFFFF',
  lineHeight: '120%'
})

const InputBox = styled('input', {
  padding: '12px 12px 12px 16px',
  width: '100%',
  height: '48px',
  background: '#F3F5F7',
  borderRadius: '4px',
  border: 'none',
  fontSize: '14px',
  color: '#9BA2B0',
  boxSizing: 'border-box'
})

export default function InputFieldSesi({ label, placeholder }) {
  return (
    <InputField>
      <Label>{label}</Label>
      <InputBox placeholder={placeholder} />
    </InputField>
  )
}