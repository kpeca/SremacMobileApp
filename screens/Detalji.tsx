import React from 'react'
import { Text, View } from 'react-native'
import Header from '../components/Header'
import { usePlayerContext } from '../context/PlayerContext';

const Detalji = ({route, navigation} : {route: any,navigation: any}) => {
  const { broj } = route.params;
  const { igraci } = usePlayerContext();

  let igrac = igraci.find((i:any) => i.broj === broj);

  console.log("IGRAC" ,igrac)
  return (
    <>
    
    <Header navigation={navigation}/>
    <View>
      <Text>{igrac.ime} {igrac.prezime}</Text>
    </View>
    </>
  )
}

export default Detalji