import { globalCss } from './index'

export const globalStyles = globalCss({
  ':root': {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    lineHeight: 1.5,
    fontWeight: 400,
    colorScheme: 'light dark',
    color: 'rgba(255, 255, 255, 0.87)', 
    backgroundColor: '#ffffff',
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
html: {
  maxWidth: '100%',
  maxHeight: '100%',
  overflowX: 'hidden',
},
body: {
  width: '100%',
  height: '100%',
  margin: 0,
  display: 'flex',
  placeItems: 'center',
  minWidth: '360px',
  minHeight: '100vh',
  overflowX: 'hidden',
},
  h1: {
    margin: 0,
  },
  h2: {
    margin: 0,
  },
  h3: {
    margin: 0,
  },
  h4: {
    margin: 0,
  },
  p: {
    margin: 0,
  },
  '*': {
    boxSizing: 'border-box',
    fontFamily: 'Open Sans, sans-serif',
  },
})
