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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000)
  }, [])
  return (
    <>
      
      {loading &&   
      <LoadingComponent/>
      }
      {!loading &&
      <>
      <StatusBar/>
      <NavigationContainer >
        <DrawerNav />
      </NavigationContainer>
      </>
      }
    </>

  );
}

