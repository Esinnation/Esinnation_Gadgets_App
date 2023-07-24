import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../global'
import { useFavoriteContext } from '../context/FavouriteContext'
import Card2 from '../shared/Card2'
import {Feather} from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'


const Favourite = ({navigation}) => {
  const { favorites } = useFavoriteContext();
  return (
    <View style={globalStyles.container}>
<StatusBar style='dark' />
      {favorites.length < 1 && (
        <View style={{flex:1,gap:10,justifyContent:'center',alignItems:'center'}}>
        <Feather name='heart' size={150} color='black' />
        <Text>You don't have a favourite item.</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
          <Text style={{color:'white',backgroundColor:'#f02d34',paddingHorizontal:10,paddingVertical:12 }}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
      )}
      <View style={styles.grid}>
        {favorites.length >= 1 && favorites.map(item=><Card2 key={item._id} item={item} navigation={navigation} />) }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  grid:{
    gap:10,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    // justifyContent:'center',
    marginTop:30

  }
})
export default Favourite
