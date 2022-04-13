import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './components/Header';
import DrawerNav from './navigations/DrawerNav';
import LoadingComponent from './components/LoadingComponent';

export default function App() {

  const [loading, setLoading] = useState(true)
  const [matches, setMatches] = useState([])

  useEffect(() => {
    fetchData()
    setTimeout(() => {
      setLoading(false);
    }, 7000)

  }, []);

  const fetchData = async () => {
    let result = await fetch('https://sremac.herokuapp.com/matches');
    let data = await result.json();
    console.log("DATA ", data);


    setMatches(data.matches);
    // console.warn(data);
  }


  // console.log(matches)
  return (
    <>
      
      {loading &&   
      <LoadingComponent/>
      }
      {!loading &&
      <>
      <StatusBar/>
      <NavigationContainer >
        <DrawerNav data={matches} />
      </NavigationContainer>
      </>
      }
    </>

  );
}

