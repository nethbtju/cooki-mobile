import { color, radius, size, space, themes, zIndex } from '@tamagui/themes'
import { createTamagui, createTokens } from 'tamagui'

const tokens = createTokens({
  size,
  space,
  zIndex,
  color: {
    background: '#E9E9E9',
    cardBackground: '#EEF1FF',
    secondary: '#6F88FC',
    accentBurntOrange: '#E86C4D',
    accentLightOrange: '#FF9671',
    accentDarkPurple: '#4F68D9',
    text: '#171717',
  },
  radius,
})

const config = createTamagui({
  themes,
  tokens,
  // ... see Configuration
})

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config