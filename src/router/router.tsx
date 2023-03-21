
import Main from '../pages/main/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/drawer/Drawer';

import { navigationRef } from './navigation.js';
export default function Router() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a3444',
          },
          headerTintColor: '#fff',
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="List"
          component={Main}
          options={{
            title: 'Início',
            /* headerRight: () => <MapButton />, */
          }}
        />
        {/* <Drawer.Screen name="Clients" component={ClientIndex} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}