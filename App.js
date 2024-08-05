import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabAction } from '@react-navigation/native';
import Homef from './assets/home.png';
import ListarRotasf from './assets/local.png';
import ExibirCaminhof from './assets/estrada.png';
const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Abas.Navigator>
     <Abas.Screen name="Home" component={ Home }  options = {{
           tabBarIcon: () => (
             <Image style={styles.icon} source={Homef} />
             
           ),
     }}
     />

   <Abas.Screen name="ListarRotas" component={ ListarRotas }  options = {{
           tabBarIcon: () => (
             <Image style={styles.icon} source={ListarRotasf} />
             
           ),
     }}
     />
       <Abas.Screen name="ExibirCaminho" component={ ExibirCaminho }  options = {{
           tabBarIcon: () => (
             <Image style={styles.icon} source={ExibirCaminhof} />
             
           ),
     }}
     />

    
    </Abas.Navigator>
   </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },

 icon: {
   width: 28,
   height: 28,
 }

});
