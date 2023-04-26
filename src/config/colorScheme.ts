import { useColorScheme } from "nativewind";
import React, { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ColorSchemeValue = 'light' | 'dark' | 'system';

function useColorSchemeStorage() {
  const [colorScheme, setColorScheme] = useColorScheme();

  useEffect(() => {
    async function getColorSchemeFromStorage() {
      const localColorScheme = await AsyncStorage.getItem('colorScheme');
      if (localColorScheme) {
        setColorScheme(localColorScheme as ColorSchemeValue );
      } else {
        setColorScheme('system');
        AsyncStorage.setItem('colorScheme', 'system');
      }
    }

    getColorSchemeFromStorage();
  }, [colorScheme, setColorScheme]);

  function changeColorScheme(value: ColorSchemeValue) {
    setColorScheme(value);
    AsyncStorage.setItem('colorScheme', value);
  }

  return { colorScheme, changeColorScheme };
}

export default useColorSchemeStorage;

