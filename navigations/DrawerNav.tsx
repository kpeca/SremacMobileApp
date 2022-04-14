import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Pocetna from '../screens/Pocetna';
import Igraci from '../screens/Igraci';
import Istorijat from '../screens/Istorijat';
import Tabela from '../screens/Tabela';
import CustomDrawer from '../components/CustomDrawer';
import Detalji from '../screens/Detalji';



const Drawer = createDrawerNavigator();

const DrawerNav = ({data} : {data:any}) => {
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
        {/* <Drawer.Screen
          name="Pocetna"
          // component={Pocetna }
          // component={() => <Pocetna navigation data={data}/>}
          options={{ drawerLabel: 'POČETNA' , headerShown: false }}
        /> */}
        <Drawer.Screen name="Hello" options={{ drawerLabel: 'POČETNA', headerShown: false}}>
          {props => <Pocetna {...props} data={data} />}
        </Drawer.Screen>
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
        <Drawer.Screen
          name="Detalji"
          component={Detalji}
          options={{ drawerLabel: 'Detalji', headerShown: false, drawerItemStyle: { display: 'none' } }}
        />
      </Drawer.Navigator>
    );
  
}

export default DrawerNav