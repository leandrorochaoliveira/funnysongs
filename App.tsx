import { StatusBar } from 'expo-status-bar';
import Router from './src/router/router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { makeAuthAdapter } from './src/adapter/AuthAdapter'

export default function App() {
  
  makeAuthAdapter().register()

  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}