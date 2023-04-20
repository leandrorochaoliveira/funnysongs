import SoundButton from './SoundButton';
import { FlatList, RefreshControl, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { Sound } from '../../models/Sound'

interface SoundboardProps {
  items: Array<Sound.SoundItem>;
}

export default function SoundBoard({ items }: SoundboardProps) {

  const [sound, setSound] = useState<any>();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false)
    }, 1000);
  }, []);

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : () => {
        console.log('Som náo existe');
      };
  }, [sound]);

  return (
        <FlatList
          className='pt-4 pb-4 grow'
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          data={items}
          numColumns={2}
          horizontal={false}
          renderItem={({ item }) => <SoundButton setSound={setSound} item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />

  )
}