import React, { useEffect, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import { YStack, XStack, Text, Image, Spacer, AnimatePresence } from 'tamagui'
import InputField from '../components/InputField'
import PrimaryButton from '../components/PrimaryButton'
import SocialButton from '../components/SocialButton'
import { Apple, Facebook, Mail } from '@tamagui/lucide-icons'

export default function LoginScreen() {
  const [keyboardShift, setKeyboardShift] = useState(0)
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardWillShow', e => {
      if (!isKeyboardVisible) {
        setKeyboardShift(e.endCoordinates.height - 60) // adjust card
        setIsKeyboardVisible(true)
      }
    })

    const hideSub = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardShift(0)
      setIsKeyboardVisible(false)
    })

    return () => {
      showSub.remove()
      hideSub.remove()
    }
  }, [isKeyboardVisible])

  return (
    <YStack flex={1} backgroundColor="$secondary" justifyContent="center">
      {/* Logo Section */}
      <YStack alignItems="center">
        <Image
          source={require('../../assets/cookie.png')}
          width={180}
          height={220}
          marginBottom={36}
          marginTop={96}
        />
      </YStack>

      <Spacer size="$4" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <AnimatePresence>
          {/* Card Section */}
          <YStack
            backgroundColor="white"
            borderTopLeftRadius={24}
            borderTopRightRadius={24}
            padding={24}
            gap={16}
            key="card"
            enterStyle={{ opacity: 0, transform: [{ translateY: 100 }] }}
            exitStyle={{ opacity: 0, transform: [{ translateY: 100 }] }}
            minHeight={600}
            transform={[{ translateY: -keyboardShift }]}
          >
            <Text fontSize={28} fontWeight="800" paddingRight={32}>
              Welcome to your new pantry pal!
            </Text>

            <InputField placeholder="Email Address" secureTextEntry={false} />
            <InputField placeholder="Password" secureTextEntry={true} />

            <Text color="$accentBurntOrange" fontSize="$small" fontWeight={500}>
              Forgot password?
            </Text>

            <PrimaryButton title="Login" />

            <XStack justifyContent="center" gap="$1">
              <Text color="#8F9098">Not a member?</Text>
              <Text color="$accentBurntOrange" fontWeight={500}>Register now</Text>
            </XStack>

            <XStack alignItems="center">
              <YStack
                flex={1}
                height={1}
                backgroundColor="#E0E0E0"
                opacity={0.5}
                borderRadius={999}
              />
            </XStack>

            <XStack gap="$3" flexDirection="column" alignItems="center">
              <Text color="#8F9098" paddingHorizontal={4}>Or continue with</Text>
              <XStack gap={12}>
                <SocialButton bg="#DB4437" icon={<Mail color="white" />} />
                <SocialButton bg="black" icon={<Apple color="white" />} />
                <SocialButton bg="#1877F2" icon={<Facebook color="white" />} />
              </XStack>
            </XStack>
          </YStack>
        </AnimatePresence>
      </KeyboardAvoidingView>
    </YStack>
  )
}