import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text, View } from 'react-native'

const CustomDrawer = (props : any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}
      contentContainerStyle={{backgroundColor: '#B83232'}}
      >
        <View style={{height:69}}>
        <Image source={require('../assets/logo9.png')} style={{ width: 160, height: 220, position: 'absolute', right:65, top: -25, zIndex: 5}}/>
        </View>
        <View style={{backgroundColor:"#fff"}}>
        <View style={{padding: 10, marginTop: 120 }}>
          <DrawerItemList  {...props} />

        </View>

        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer