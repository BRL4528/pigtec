import { StatusBar, AppRegistry, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { AppProvider } from '@realm/react';
import { Routes } from './src/routes';
import { api } from './src/services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { AuthContextProvider } from '@contexts/AuthContext';
import { ProducerContextProvider } from '@contexts/ProducersContext';
import { RealmProvider } from './src/libs/realm';

interface Config {
  rout: string;
}

AppRegistry.registerComponent('X', () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('X');
    AppRegistry.runApplication('X', { rootTag });
}
export default function App() {

  useEffect(() => {
    async function getItemFunction() {
      const data = await AsyncStorage.getItem('@DataConfig');
      if (data !== null) {
        const dataJson: Config = JSON.parse(data);
        api.defaults.baseURL = `http://${dataJson.rout}/`
      }
    }
    getItemFunction()
  }, [])

  // async function getItemFunction() {
  //   const data = await AsyncStorage.getItem('@DataConfig');
  //   if (data !== null) {
  //     const dataJson: Config = JSON.parse(data);
  //     console.log('ver isso', dataJson);
  //   }
  // }


  return (
    <AppProvider id="application-0-woeon">
      <ThemeProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <AuthContextProvider>
            <ProducerContextProvider>
            <RealmProvider>
              <Routes />
            </RealmProvider>
            </ProducerContextProvider>
          </AuthContextProvider>
      </ThemeProvider>
    </AppProvider>
  );
}
