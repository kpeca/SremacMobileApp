import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';

const Istorijat = ({navigation}: {navigation: any}) => {
  return (
    <>
      <Header navigation={navigation}/>
      <PageTitle title='ISTORIJAT'/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Istorijat</Text>
    </View>
    </>
  );
}

export default Istorijat