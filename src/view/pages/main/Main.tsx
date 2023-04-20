import SoundBoard from '../../components/SoundBoard'
import { musics } from '../../../utils/musics'
import { View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';


export default function MainPage () {

  let [filter, setFilter] = useState('')

  const listMusics = musics.filter((music) =>
    music.label.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <View className='flex col h-full'>
      <View className="relative my-4 mx-4">

        <View className="absolute inset-y-0 left-0 top-2 z-[1] flex items-center pl-3 pointer-events-none">
          <Ionicons name="search" size={20} color="#1C4C73" />
        </View>
        
        <TextInput 
          value={filter} 
          onChangeText={(text) => setFilter(text)}
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquisar..." />
      </View>

      <SoundBoard items={listMusics} />
    </View>
  )
}