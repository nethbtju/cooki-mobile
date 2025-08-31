import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TamaguiProvider, Theme } from 'tamagui';
import LoginScreen from './src/screens/LoginScreen';
import config from './tamagui.config';

export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Theme name="light">
        <LoginScreen />
      </Theme>
    </TamaguiProvider>
  );
}