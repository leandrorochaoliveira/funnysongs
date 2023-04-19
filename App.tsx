import { StatusBar } from 'expo-status-bar';
import Router from './src/router/router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthController from './src/controllers/AuthController.ts'

export default function App() {
  
  const AuthClass = new AuthController()
  AuthClass.register()

  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}