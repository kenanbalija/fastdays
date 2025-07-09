import React from 'react';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const colorScheme = useColorScheme();
  const baseTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  const theme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: '#06b6d4',
    },
    roundness: 8,
  };

  return (
    <PaperProvider theme={theme}>
      <HomeScreen />
    </PaperProvider>
  );
}
