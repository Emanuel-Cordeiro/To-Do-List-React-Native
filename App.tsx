import React from 'react';
import Home from './src/screens/Home';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';

const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaView>
  );
};
export default App;
