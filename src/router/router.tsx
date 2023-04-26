
import MainPage from '../view/pages/main/Main';
import FavoritesPage from '../view/pages/favorites/Favorites';
import SettingsPage from '../view/pages/settings/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { navigationRef } from './navigation.js';
import colors from '../config/colors.js'

export default function Router() {
  const Tab = createBottomTabNavigator();

  // Objeto com os ícones para rotas ativas
  const activeIcons = {
    Home: 'ios-home',
    Favorites: 'heart',
    Settings: 'menu'
  };

  // Objeto com os ícones para rotas inativas
  const inactiveIcons = {
    Home: 'ios-home-outline',
    Favorites: 'heart-outline',
    Settings: 'menu-outline',
  };

  const getTabIcons = (route: string, focused: boolean) => {
    const icons = focused ? activeIcons : inactiveIcons;
    return icons[route] || 'default_icon';
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
   
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: colors.primary100,
          },
          headerTintColor: colors.text100,
          tabBarStyle: { 
            backgroundColor: colors.primary200,
            paddingTop: 8,
            //paddingBottom: 8,
            height: 96
            
          },
          
          
          //headerRight
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = getTabIcons(route.name, focused)

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: colors.text100,
        })}
      >
        <Tab.Screen name="Home" component={MainPage} options={{ title: 'Início' }}/>
        <Tab.Screen name="Favorites" component={FavoritesPage} options={{ title: 'Meus Favoritos' }}/>
        <Tab.Screen name="Settings" component={SettingsPage} options={{ title: 'Opções' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}