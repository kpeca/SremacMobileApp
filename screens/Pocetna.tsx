import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from '../components/Header';

const Pocetna = ({navigation}: {navigation: any}) => {
  return (
    <>
    <Header navigation={navigation} />
    <View style={styles.container}>
      <Text>Početna Stranica</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})

export default Pocetna