import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from '../components/Header';
import { WebView } from '../node_modules/react-native-webview';

const Tabela = ({navigation}: {navigation: any}) => {
  return (
    <>
      <Header navigation={navigation}/>
      <View  style={{height: 100, backgroundColor: "#fff"}}></View>

      <View  style={{flex:0.7, position: "relative", width: 600, height: 400 , left: -180, backgroundColor: "#fff" }}>
      <WebView
            style={{height: 350, }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            source={{html: `<iframe src="https://srbijasport.net/embed/results/5532" frameborder="0" scrolling="no" width=100%" height="606" "></iframe>`
            }}
      />
      </View>
      <View  style={{flex:1}}>
      <WebView
            style={{height: 200, }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            source={{html: `<iframe src="https://srbijasport.net/embed/standings/5532" frameborder="0" scrolling="no" width="100%" height="646" style="height: 646px"></iframe>`
            }}
      />
      </View>
    </>
  );
}

export default Tabela