import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Pocetna from '../screens/Pocetna';
import Igraci from '../screens/Igraci';
import Istorijat from '../screens/Istorijat';
import Tabela from '../screens/Tabela';
import CustomDrawer from '../components/CustomDrawer';



const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (

      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}  useLegacyImplementation initialRouteName="Pocetna"
      screenOptions={{
        drawerActiveBackgroundColor: '#9e0001',
        drawerInactiveBackgroundColor: '#B83232',
        drawerItemStyle: {
          // position: "absolute",
          // display: "flex",
          // alignItems: "center",
          // backgroundColor: "#B83232"

          // flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          // zIndex: 55,
        },
        drawerLabelStyle:{
          flex: 1,
          // textAlign: "center",
          color: "#ffffff",
          fontSize: 20,
          fontWeight: "bold",
          width: "100%"
        }
      }}
      >
        <Drawer.Screen
          name="Pocetna"
          component={Pocetna}
          options={{ drawerLabel: 'POČETNA' , headerShown: false }}
        />
        <Drawer.Screen
          name="Igraci"
          component={Igraci}
          options={{ drawerLabel: 'IGRAČI', headerShown: false }}
        />
        <Drawer.Screen
          name="Istorijat"
          component={Istorijat}
          options={{ drawerLabel: 'ISTORIJAT', headerShown: false }}
        />
        <Drawer.Screen
          name="Tabela"
          component={Tabela}
          options={{ drawerLabel: 'TABELA', headerShown: false }}
        />
      </Drawer.Navigator>
    );
  
}

export default DrawerNav