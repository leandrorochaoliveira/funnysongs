import { StatusBar } from 'expo-status-bar';
import Router from './src/router/router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthController from './src/controllers/auth'

export default function App() {
  
  const AuthClass = new AuthController()
  AuthClass.verifyAuth()

  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}