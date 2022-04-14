import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import DetailsCardText from '../components/UI/DetailsCardText';
import { usePlayerContext } from '../context/PlayerContext';

const Detalji = ({route, navigation} : {route: any,navigation: any}) => {
  const { broj } = route.params;
  const { igraci } = usePlayerContext();

  let igrac = igraci.find((i:any) => i.broj === broj);

  console.log("IGRAC" ,igrac)
  return (
    <>
    
    <Header navigation={navigation}/>
    <LinearGradient
				style={{ flex: 1 }}
				colors={['#FFF', '#B83232']}
				locations={[0.12, 0.6]}
			>
      <View style={styles.container}>
        <View style={styles.nameWrapper}>
          <Text style={styles.nameText}>{igrac.ime} {igrac.prezime}</Text>
          <Text style={styles.numberText}>{igrac.broj}</Text>
          <Image source={require('../assets/messi.png')} style={{ width: 360, height: 237, position: 'absolute', top: 80, opacity: 0.7 }}/>
          <View style={styles.infoWrapper}>
            <DetailsCardText> Datum rođenja: 24.06.1987. </DetailsCardText>
            <DetailsCardText> Visina: 169cm </DetailsCardText>
            <DetailsCardText> Pozicija: Napadač </DetailsCardText>
            <DetailsCardText> Član kluba od: Juna 2021. </DetailsCardText>

          </View>
        </View>
        {/* <View style={styles.numberWrapper}>
        </View> */}
      </View>
    </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
  nameWrapper: {
    marginTop: 15,
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    // color: "#561616",
    color: "#ffffff",
    fontSize: 36,
    fontWeight: 'bold',
    textShadowColor: '#B83232',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius: 10,
    // borderWidth: 2
  },
  numberWrapper: {
    // marginTop: 5 
     // backgroundColor: 'red',
  },
  numberText: {
    fontSize: 240,
    color: '#B83232',
    position: 'absolute',
    top: -20,
    fontWeight: 'bold'
  },
  infoWrapper: {
    width: 360,
    height: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    // opacity: 0.3,
    position: 'absolute',
    top: 250,
    justifyContent: 'space-around',
    marginLeft: 5,
    shadowColor: '#000',
		shadowOffset: {
			width: 15,
			height: 0
		},
		shadowOpacity: 0.1,
		shadowRadius: 0.8,

		elevation: 1.5
  }
})
export default Detalji