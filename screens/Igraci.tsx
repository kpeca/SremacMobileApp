import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';

const Igraci = ({navigation}: {navigation: any}) => {
  return (
    <>
      <Header navigation={navigation}/>
      <PageTitle title='IGRAČI'/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Stranica za igrace</Text>
    </View>
    </>
  );
}

export default Igraci