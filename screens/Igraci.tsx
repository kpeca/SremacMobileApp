import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import PlayerCard from '../components/PlayerCard';

const Igraci = ({navigation}: {navigation: any}) => {

  let igraci = [{
    ime : 'Leo',
    prezime: 'Mesi',
    broj: 11,
    pozicija: 'napadac'
  },
  {
    ime : 'Kristijano',
    prezime: 'Ronaldo',
    broj: 7,
    pozicija: 'napadac'
  },
  {
    ime : 'Manuel',
    prezime: 'Nojer',
    broj: 99,
    pozicija: 'golman'
  },
  {
    ime : 'David',
    prezime: 'De Gea',
    broj: 7,
    pozicija: 'golman'
  },
  {
    ime : 'Nemanja',
    prezime: 'Vidic',
    broj: 7,
    pozicija: 'odbrana'
  },
  {
    ime : 'Nemanja',
    prezime: 'Modric',
    broj: 7,
    pozicija: 'sredina'
  },
  {
    ime : 'Edgar',
    prezime: 'Davids',
    broj: 7,
    pozicija: 'sredina'
  },
  {
    ime : 'Karim',
    prezime: 'Benzema',
    broj: 14,
    pozicija: 'napadac'
  }]

  let golmani = igraci.filter(igrac => igrac.pozicija === 'golman')
  let odbrana = igraci.filter(igrac => igrac.pozicija === 'odbrana')
  let sredina = igraci.filter(igrac => igrac.pozicija === 'sredina')
  let napadaci = igraci.filter(igrac => igrac.pozicija === 'napadac')
  return (
    <>
      <Header navigation={navigation}/>
      <PageTitle title='IGRAČI'/>
    <View style={styles.container}>
    <ScrollView  style={{ height: 200 }} contentContainerStyle= {{alignItems: 'center', justifyContent: 'flex-start'}}>
      <View style={styles.golmani}>
        <Text style={styles.golmaniText}>Golmani</Text>
      </View>

      {golmani.map((igrac => (
        <PlayerCard  igrac={igrac} />
      )))}
      <View style={styles.golmani}>
        <Text style={styles.golmaniText}>Odbrana</Text>
      </View>
      {odbrana.map((igrac => (
        <PlayerCard  igrac={igrac} />
      )))}
      <View style={styles.golmani}>
        <Text style={styles.golmaniText}>Sredina</Text>
      </View>
      {sredina.map((igrac => (
        <PlayerCard  igrac={igrac} />
      )))}
      <View style={styles.golmani}>
        <Text style={styles.golmaniText}>Napad</Text>
      </View>
      {napadaci.map((igrac => (
        <PlayerCard  igrac={igrac} />
      )))}
    </ScrollView >
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  golmani: {
     backgroundColor: '#B83232', flexDirection: 'row', width: 148, height: 35, justifyContent: 'center', alignItems: 'center', marginTop: 20,
     marginBottom: 10
  },
  golmaniText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default Igraci