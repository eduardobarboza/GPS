import React, {usetEffect, useState, useEffect} from 'react';
import {StyleSheet,Text, View} from 'react-native';
import MapView from 'react-native-maps';

export default function Local(){

  let [regiao, SetRegiao] = useState({
    latitude:-23.105490949443237,
    longitude:-47.708599690197524,
    latitudeDelta: 0.014 ,
    longitudeDelta: 0.014

  })

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(posicao =>{
      console.log(posicao.coords);
    })
  },[])


return (
  <View style={StyleSheet.container}>

    <MapView style={{widht:'100%', height:'100%'}} initialRegion={regiao}>
 
    </MapView>

  </View>
  );
}

const styles = StyleSheet.create({

})
