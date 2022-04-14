import React from 'react'
import { StyleSheet, Text } from 'react-native'

const DetailsCardText = (props : any) => {
  return (
    <Text style={styles.text}>
    {props.children}
  </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  }
})

export default DetailsCardText