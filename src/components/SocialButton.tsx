import React from 'react'
import { Button } from 'tamagui'

type SocialButtonProps = {
  bg: string
  icon: React.ReactNode
  onPress?: () => void
}

export default function SocialButton({ bg, icon, onPress }: SocialButtonProps) {
  return (
    <Button
      onPress={onPress}
      circular
      size={40}
      backgroundColor={bg}
    >
      {icon}
    </Button>
  )
}