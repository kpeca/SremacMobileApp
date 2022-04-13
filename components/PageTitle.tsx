import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PageTitle = ({title} : {title : any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row', backgroundColor: '#B83232', height: 60, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderTopColor: '#fff', borderBottomColor: '#fff'
  },
  title: {
    color: '#fff',
     fontSize: 24,
     fontWeight: 'bold'
  }
})

export default PageTitle