import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	StatusBar,
	Image
} from 'react-native';
import Header from '../components/Header';

const Pocetna = ({ navigation }: { navigation: any }) => {
	return (
		<>
			<Header navigation={navigation} />
			<LinearGradient
				style={{ flex: 1 }}
				colors={['#B83232', '#FFF']}
				locations={[0.22, 0.66]}
			>
				<View style={styles.container}>
					<View style={styles.image}>
						<Image
							source={require('../assets/pocetna.png')}
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
								source={require('../assets/logo9.png')}
								style={{ width: 45, height: 66 }}
							/>
							<Text style={styles.resultText}> - </Text>
							<Image
								source={require('../assets/logo9.png')}
								style={{ width: 45, height: 66 }}
							/>
						</View>
						<View style={styles.cardFooter}>
							<Text style={styles.footerText}>31.03.2022</Text>
							<Text style={styles.footerText}>Deč</Text>
						</View>
					</View>
					<View style={[styles.card, styles.shadowProp]}>
						{/* <Text>card 1</Text> */}
						<View style={styles.cardHeader}>
							<Text style={styles.text}>PRETHODNA UTAKMICA</Text>
						</View>
						<View style={styles.teams}>
							<Image
								source={require('../assets/logo9.png')}
								style={{ width: 45, height: 66 }}
							/>
							<Text style={styles.resultText}>3 - 0</Text>
							<Image
								source={require('../assets/logo9.png')}
								style={{ width: 45, height: 66 }}
							/>
						</View>
						<View style={styles.cardFooter}>
							<Text style={styles.footerText}>31.03.2022</Text>
							<Text style={styles.footerText}>Deč</Text>
						</View>
					</View>
				</View>
			</LinearGradient>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 40
	},
	image: { flexDirection: 'row' },
	card: {
		width: '80%',
		height: '25%',
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
		fontSize: 20
	},
	teams: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 40,
		marginRight: 40
	},
	cardFooter: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10
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
