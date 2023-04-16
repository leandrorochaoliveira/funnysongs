import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Menu = ({ isLoggedIn }) => {
  const navigation = useNavigation();
  const [routes] = useState([
    { name: "Route 1", key: "route1" },
    { name: "Route 2", key: "route2" },
    { name: "Route 3", key: "route3" },
  ]);

  const handleLogin = () => {
    //navigation.navigate("LoginScreen");
  };

  const handleRoutePress = (key) => {
    //navigation.navigate(key);
  };

  return (
    <View className='flex flex-row justify-between bg-gray-900 p-4'>
      <View className='flex flex-row items-center'>
        <Ionicons name="menu" size={24} color="white" className='mr-2' />
        <Text className='text-white font-bold text-xl'>App Menu</Text>
      </View>
      <View className='flex flex-row items-center'>
        {isLoggedIn ? (
          <Text className='text-white mr-2'>Welcome, User!</Text>
        ) : (
          <TouchableOpacity onPress={handleLogin}>
            <Text className='text-white mr-2'>Login</Text>
          </TouchableOpacity>
        )}
        <View className='relative'>
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="white" />
          </TouchableOpacity>
          <View className='absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500'></View>
        </View>
      </View>
      <View className=' top-full right-0 w-full p-4 bg-gray-900'>
        <Text className='text-white font-bold mb-2'>Routes:</Text>
        {routes.map(({ name, key }) => (
          <TouchableOpacity key={key} onPress={() => handleRoutePress(key)}>
            <Text className='text-white mb-2'>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Menu;
