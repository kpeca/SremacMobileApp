import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const Header = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.header}>
      <Ionicons style={styles.menu} name="menu" size={46} color="white" onPress={ () => navigation.openDrawer()}/>
      <Text style={styles.text}>FK SREMAC</Text>
      <Image source={require('../assets/logo.jpg')} style={{ width: 40, height: 50, marginRight: 10 }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height:60,
    width: "100%",
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white"
  },
  menu: {
    color: 'white'
  }
})

export default Header