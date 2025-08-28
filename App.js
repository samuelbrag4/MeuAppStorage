import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native-web';

export default function App() {

  // Estados: o que o usuário digita e o nome salvo.
  const [ name, setNome ] = useState('');
  const [ saveName, setSaveName ] = useState('');

  // Busca o nome d=salvo quando o app abre.
  useEffect(() => {
    async function getName() {
      const savedName = await AsyncStorage.getItem('nameUser');
      if (savedName) {
        setSaveName(savedName);
      }
    }
    getName();
  }, []);

  
}