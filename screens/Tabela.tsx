import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from '../components/Header';

const Tabela = ({navigation}: {navigation: any}) => {
  return (
    <>
      <Header navigation={navigation}/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tabela</Text>
    </View>
    </>
  );
}

export default Tabela