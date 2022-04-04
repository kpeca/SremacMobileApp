import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './components/Header';
import DrawerNav from './navigations/DrawerNav';

// function Feed({navigation}) {
//   return (
//     <>
//     <Header navigation={navigation} />
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//     </View>
//     </>
//   );
// }

// function Notifications({navigation}) {
//   return (
//     <>
//       <Header navigation={navigation}/>
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//     </>
//   );
// }

// function Profile({navigation}) {
//   return (
//     <>
    
//     <Header navigation={navigation}/>
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile Screen</Text>
//     </View>
//     </>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator  useLegacyImplementation initialRouteName="Feed">
//       <Drawer.Screen
//         name="Feed"
//         component={Feed}
//         options={{ drawerLabel: 'Home' , headerShown: false }}
//       />
//       <Drawer.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{ drawerLabel: 'Updates', headerShown: false }}
//       />
//       <Drawer.Screen
//         name="Profile"
//         component={Profile}
//         options={{ drawerLabel: 'Profile', headerShown: false }}
//       />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <>
    
      <StatusBar/>
      <NavigationContainer >
        <DrawerNav />
      </NavigationContainer>
    </>

  );
}

