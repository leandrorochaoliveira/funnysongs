import { StatusBar } from 'expo-status-bar';
import Router from './src/router/router'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}