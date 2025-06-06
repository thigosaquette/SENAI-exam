import { globalStyles } from '../src/styles/globalStyles'
import { theme } from '../src/styles'

globalStyles()

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <div style={{ padding: 16, background: theme.colors.background }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
