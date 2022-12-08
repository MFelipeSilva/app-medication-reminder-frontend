import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';

import pattern from '@theme/pattern';

import { Login } from '@screens/login';
import { Register } from '@screens/register';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={pattern}> 
      <StatusBar style="light" />
      <Register /> 
    </ThemeProvider>
  );
}

