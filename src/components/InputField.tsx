import React, { useState } from 'react'
import { Input, XStack, YStack, Text, Button } from 'tamagui'
import { Eye, EyeOff } from '@tamagui/lucide-icons'

type InputFieldProps = {
  placeholder: string
  secureTextEntry?: boolean
}

export default function InputField({ placeholder, secureTextEntry }: InputFieldProps) {
  const [secure, setSecure] = useState(secureTextEntry)

  return (
    <YStack gap={16}>
      <XStack 
        alignItems="center" 
        borderWidth={1} 
        borderRadius={8}
        borderColor="#C5C6CC"
      >
        <Input
          flex={1}
          placeholder={placeholder}
          secureTextEntry={secure}
          fontSize={12}
          backgroundColor="#fff"
          borderColor="#fff"
          color="#8F9098"
        />
        {secureTextEntry && (
          <Button 
            chromeless 
            onPress={() => setSecure(!secure)}
            icon={secure ? EyeOff : Eye} 
            color="#8F9098"
          />
        )}
      </XStack>
    </YStack>
  )
}