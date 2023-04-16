import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';

import { Sound } from '../../models/Sound'

interface SoundProps {
  setSound: any,
  item: Sound.SoundItem
}

export default function SoundButton({ setSound, item }:SoundProps) {


  async function playSound() {
    
    try {

      const { sound } = await Audio.Sound.createAsync(
        item.file
      );
  

      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

  async function share() {
 
    if (!(await Sharing.isAvailableAsync())) {
      console.log('Sharing is not available')
      return;
    }

    try {
      await Sharing.shareAsync(item.file.uri)
        .then(() => console.log('Arquivo compartilhado com sucesso!'))
        .catch(error => console.log('Erro ao compartilhar arquivo:', error));

    } catch (error) {
      console.error(error);

    }
  }

  return (
    <View style={styles.container} className='px-6 pb-4'>
      <View style={styles.card} className='border-b-2 border-gray-300 w-full flex flex-col justify-center items-center'>
        <Pressable
          style={({ pressed }) => [
            {
              borderBottomWidth: pressed ? 0 : 8,
              shadowOpacity: pressed ? 0 : 0.27,
            },
            styles.button,
          ]}
          onPress={() => playSound()}>
          <Entypo name="controller-play" size={24} color="white" />
        </Pressable>
        <Text className='text-center text-lg'>{ item.label }</Text>
        <View className='flex flex-row items-center justify-center gap-3 w-full py-2'>
          <Pressable
            className="grow-1 rounded-full bg-pink-400 p-2 uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-pink-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-pink-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
            <MaterialIcons name="favorite-outline" size={20} color="white" />
          </Pressable>
          <Pressable
            className="grow-1 rounded-full bg-green-500 p-2 uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
            <FontAwesome name="whatsapp" size={20} color="white" />
          </Pressable>
          <Pressable
            onPress={share}
            className="grow-1 rounded-full bg-blue-500 p-2 uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
            <FontAwesome name="share" size={20} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 8,

  },
  card: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: 'center',
  },
  button: {
    width: 96,
    height: 96,
    marginBottom: 8,
    color: `#fff`,
    borderRadius: 20,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    backgroundColor: `#EA6C6C`,
    borderBottomColor: `#e64e4e`,
    boxShadow: `0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
   
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    
    shadowRadius: 3.05,
    elevation: 8

    }
});