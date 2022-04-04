import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Pocetna from '../screens/Pocetna';
import Igraci from '../screens/Igraci';
import Istorijat from '../screens/Istorijat';
import Tabela from '../screens/Tabela';



const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (

      <Drawer.Navigator  useLegacyImplementation initialRouteName="Pocetna">
        <Drawer.Screen
          name="Pocetna"
          component={Pocetna}
          options={{ drawerLabel: 'Početna' , headerShown: false }}
        />
        <Drawer.Screen
          name="Igraci"
          component={Igraci}
          options={{ drawerLabel: 'Igrači', headerShown: false }}
        />
        <Drawer.Screen
          name="Istorijat"
          component={Istorijat}
          options={{ drawerLabel: 'Istorijat', headerShown: false }}
        />
        <Drawer.Screen
          name="Tabela"
          component={Tabela}
          options={{ drawerLabel: 'Tabela', headerShown: false }}
        />
      </Drawer.Navigator>
    );
  
}

export default DrawerNav