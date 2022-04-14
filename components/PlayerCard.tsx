import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PlayerCard = (props: any) => {
  return (
    <View style={styles.card}>
      
      <TouchableOpacity onPress={() => props.navigation.navigate('Detalji' , { broj: props.igrac.broj })}>
          <LinearGradient style={{ width: "100%", height: "100%", borderWidth: 0, borderRadius: 25, flexDirection: 'row' }} colors={['#B83232', '#FFF']} locations={[0.23 , 0.85]}>
          <View style={{marginTop: 10}}>
              {/* <Image source={{uri: 'https://spng.pngfind.com/pngs/s/68-689034_cristiano-ronaldo-png-image-background-ronaldo-png-transparent.png'}} style={{ width: 160, height: 120, }}/> */}
              <Image source={require('../assets/messi.png')} style={{ width: 160, height: 120, }}/>
          </View>
          <View style={{flex: 1}}>
            <View style={{ flex: 1, width: '100%', justifyContent: 'flex-end'}}>
              <Text style={{marginTop: 10, fontSize: 24, color: "#FFF", fontWeight: 'bold'}}>{props.igrac.ime} {props.igrac.prezime}</Text>
            </View>
            <View style={{ flex: 1, marginTop: 20, alignItems: 'flex-end'}}>
              <Text style={{marginRight: 40, fontSize: 30, color: "#FFF"}}>{props.igrac.broj}</Text>
            </View>
          </View>

          </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: "80%", height: 160, borderColor: '#B83232', borderWidth: 1, borderRadius: 25, margin: 15
  }
})

export default PlayerCard