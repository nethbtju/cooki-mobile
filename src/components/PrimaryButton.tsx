import React from 'react'
import { Button, Text } from 'tamagui'

type PrimaryButtonProps = {
  title: string
  onPress?: () => void
}

export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <Button 
      onPress={onPress}
      backgroundColor="$accentBurntOrange"
      borderRadius={12}
      height={48}
    >
    <Text color="$background" fontWeight={600}>{title}</Text>
    </Button>
  )
}