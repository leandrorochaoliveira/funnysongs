import { routeNavigate } from '../../../router/navigation.js';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomDrawer(props: any) {
  const insets = useSafeAreaInsets();

  const items = [
    {
      key: 'home',
      label: 'Home',
      icon: 'home',
      onPress: () => routeNavigate('Home'),
      testID: 'home-item',
    },
    {
      key: 'bookmarks',
      label: 'Favoritos',
      icon: 'settings',
      onPress: () => routeNavigate('bookmarks'),
      testID: 'settings-item',
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: 'settings',
      onPress: () => routeNavigate('Settings'),
      testID: 'settings-item',
    },
    {
      key: 'about',
      label: 'About',
      icon: 'info',
      onPress: () => routeNavigate('About'),
      testID: 'about-item',
    },
  ];

  return (
    <View
      className="flex-1"
      style={{
        paddingBottom: insets.bottom,
      }}>
      <View
        className="flex flex-1 max-h-[22vh] items-center justify-center bg-primary200"
        style={{
          paddingTop: insets.top,
        }}>
      </View>
      <View>
        <Text>Usuario</Text>
        <Text>Matricula</Text>
      </View>
      <View className="flex-1">
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} items={items} />
        </DrawerContentScrollView>
      </View>
    </View>
  );
}