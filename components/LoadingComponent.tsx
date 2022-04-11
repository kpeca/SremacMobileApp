import React, { useEffect, useState } from 'react'
import { Image, Text, View, Animated } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

const LoadingComponent = () => {

  const viewOpacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    fadeIn();
    setTimeout(() => {
      fadeOut();
    },2300)
  },[])

  const fadeIn = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(viewOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(viewOpacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };


  return (
    <Animated.View style={{flex: 1, opacity: viewOpacity}} >
    <LinearGradient style={{flex: 1}} colors={['#B83232', '#FFF']} locations={[0.53 , 0.66]}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text> Loading component </Text> */}
      <Image source={require('../assets/logo9.png')} style={{ width: 250, height: 323.89}}/>
      </View>

  </LinearGradient>
    </Animated.View>
  )
}

export default LoadingComponent