import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from '../login/Login'
import MenuPage from '../menu/Menu'

const Stack = createNativeStackNavigator();
export default function Settings() {

  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="menu">
          <Stack.Screen name="menu" component={MenuPage} />
          <Stack.Screen name="login" component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
    
  )
}