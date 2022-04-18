import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	StatusBar,
	Image,
  ScrollView
} from 'react-native';
import Header from '../components/Header';

const Pocetna = ({ navigation, data }: { navigation: any, data:any}) => {


  console.log("DATA :", data)

  // if (!data) return <Text>Loading</Text>
	return (
		<>
			<Header navigation={navigation} />
			<LinearGradient
				style={{ flex: 1 }}
				colors={['#FFF', '#B83232']}
				locations={[0.12, 0.9]}
			>
        <ScrollView scrollIndicatorInsets={{ right: 1 }} >
				<View style={styles.container}>
					<View style={styles.image}>
						<Image
							source={require('../assets/pocetna.png')}
							// source={matches.awayLogo}
							style={{ width: 420, height: 220 }}
						/>
					</View>
					<View style={[styles.card, styles.shadowProp]}>
						{/* <Text>card 1</Text> */}
						<View style={styles.cardHeader}>
							<Text style={styles.text}>SLEDEĆA UTAKMICA</Text>
						</View>
						<View style={styles.teams}>
							<Image
								// source={require('../assets/logo9.png')}
								source={{uri: data[0].homeLogo}}
								style={{ width: 45, height: 66 }}
							/>
							<Text style={styles.resultText}> - </Text>
							<Image
								// source={require('../assets/logo9.png')}
								source={{uri: data[0].awayLogo}}
								style={{ width: 45, height: 66 }}
							/>
						</View>
            <View style={styles.teamNames}>
              <Text style={styles.teamNameLeft}>{data[0].homeName}</Text>
              <Text style={styles.teamNameRight}>{data[0].awayName}</Text>
            </View>
						<View style={styles.cardFooter}>
							<Text style={styles.footerText}>{data[0].date}</Text>
							<Text style={styles.footerText}>{data[0].location}</Text>
						</View>
					</View>
					<View style={[styles.card, styles.shadowProp]}>
						{/* <Text>card 1</Text> */}
						<View style={styles.cardHeader}>
							<Text style={styles.text}>PRETHODNA UTAKMICA</Text>
						</View>
						<View style={styles.teams}>
							<Image
								// source={require('../assets/logo9.png')}
								source={{uri: data[1].homeLogo}}

								style={{ width: 40, height: 60 }}
							/>
							<Text style={styles.resultText}>{data[1].homeScored} - {data[1].awayScored}</Text>
							<Image
								// source={require('../assets/logo9.png')}
								source={{uri: data[1].awayLogo}}

								style={{ width: 40, height: 60 }}
							/>
						</View>
            <View style={styles.teamNames}>
              <Text style={styles.teamNameLeft}>{data[1].homeName}</Text>
              <Text style={styles.teamNameRight}>{data[1].awayName}</Text>
            </View>
						<View style={styles.cardFooter}>
							<Text style={styles.footerText}>{data[1].date}</Text>
							<Text style={styles.footerText}>{data[1].location}</Text>
						</View>
					</View>
          <View style={{ width: '100%', opacity: 0.4, marginTop: 30}}>
          <Image
								source={require('../assets/pocetnafooter2.png')}
								// source={{uri: data[1].awayLogo}}

								style={{ width: '100%' }}
							/>
          </View>
				</View>
          </ScrollView>
			</LinearGradient>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	image: { flexDirection: 'row' },
	card: {
		width: '80%',
    margin: 10,
		height: '20%',
		backgroundColor: '#B83232',
		borderRadius: 5
	},
	shadowProp: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,

		elevation: 11
	},
	cardHeader: {
		flexDirection: 'row',
		height: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 20,
	},
	teams: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 40,
		marginRight: 40,
    marginTop: 10
	},
	cardFooter: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10
	},
  teamNames: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 35
  },
  teamNameLeft: {
    color: "#fff", marginRight: 60 , fontSize: 20, fontWeight: 'bold'
  },
  teamNameRight: {
    color: "#fff" , fontSize: 20, fontWeight: 'bold'
  },
	footerText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18
	},
	resultText: {
		color: '#fff',
		fontSize: 40
	}
});

export default Pocetna;
