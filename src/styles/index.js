import { createStitches } from '@stitches/react'

// COMENTAR SOBRE

export const {
  config,
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme
} = createStitches({
  theme: {
  colors: {
    background: '#ffffff',
    textPrimaryBlue: '#111D4A',
    textSecondaryBlue: '#192A6B',
    textNeutralDark: '#333F5B',
    textNeutralMid: '#48536C',
    textNeutralLight: '#9BA2B0',
    highlightPurple: '#8749A7',
    highlightBlue: '#4888A5',
    highlightTeal: '#49A7A4',
    highlightGreen: '#82A235',
    highlightOrange: '#E77222',
    accentYellow: '#FFC800',
    linkBlue: '#1670C0',
    sistemaFiepBlue: '#192A6B',
    fiepBlue: '#248EDF',
    senaiOrange: '#FF8901',
    sesiGreen: '#96D200',
    ielPurple: '#7314FF',
    white: '#FFFFFF',
  },
    fonts: {
      primary: 'Open Sans, sans-serif',
    },
    fontSizes: {
      xxl: '32px',
      xl: '22px',
      lg: '18px',
      md: '16px',
      sm: '14px',
    },
    space: {
      xs: '6px',
      sm: '10px',
      md: '15px',
      lg: '20px',
      xl: '24px',
      xxl: '40px',
      xxxl: '55px',
      ul: '100px',
    },
    radius: {
      md: '8px',
      lg: '24px',
      rounded: '50%',
    },
    shadows: {
      light: '1px 6px 5px 5px rgba(0, 0, 0, 0.1)',
      slim: '1px 1px 1px 1px rgba(0, 0, 0, 0.05)',
    },
  },
  media: {
    md: '(max-width: 768px)', // Mobile
    lg: '(max-width: 1800px)', // Telas menores que Full HD
  },
})
