import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabAction } from '@react-navigation/native';
import Estrada from './components/Estrada.jsx';
import Home from './components/Home.jsx';
import Local from './components/Local.jsx';
import Homef from './assets/home.png';
import ListarRotasf from './assets/local.png';
import ExibirCaminhof from './assets/estrada.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('kkaqumyH8uEcX7SAvOTfibDioBOASBoSXb9oTWYz', 'Bbo70EMRTPOCfi61a1uHAxfzDXLPLtONuW1Ovj6R');
Parse.serverURL = 'https://parseapi.back4app.com  '
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

   <Abas.Screen name="ListarRotas" component={ Estrada }  options = {{
           tabBarIcon: () => (
             <Image style={styles.icon} source={ListarRotasf} />
             
           ),
     }}
     />
       <Abas.Screen name="ExibirCaminho" component={ Local }  options = {{
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
