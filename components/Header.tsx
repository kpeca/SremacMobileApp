import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 


const Header = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
      <Image source={require('../assets/logo9.png')} style={{ width: 45, height: 66.26, marginRight: 5, marginLeft: 10 }}/>
      <Text style={styles.text}>FK Sremac</Text>
      </View>
      <Ionicons style={styles.menu} name="menu" size={52} color="white" onPress={ () => navigation.openDrawer()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height:73,
    width: "100%",
    backgroundColor: '#B83232',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
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