import React from 'react'
import { TamaguiProvider, Theme } from 'tamagui'
import config from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={config}>
    </TamaguiProvider>
  )
}