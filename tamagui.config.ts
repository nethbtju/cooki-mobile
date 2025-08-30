import { createTamagui } from 'tamagui'
import { createTokens } from '@tamagui/core'

const tokens = createTokens({
  color: {
    body: '#E9E9E9',
    bodyDark: '#EEF1FF',
    secondary: '#6F88FC',
    accentBurntOrange: '#E86C4D',
    accentLightOrange: '#FF9671',
    accentDarkPurple: '#4F68D9',
    text: '#171717',
  },
  size: {
    title: 36,
    heading: 24,
    subheading: 20,
    action: 12,
    description: 10,
    notification: 6
  },
})

const config = createTamagui({
  tokens,
})

export type AppConfig = typeof config
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config