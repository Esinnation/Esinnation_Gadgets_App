import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import { urlFor } from '../lib/client'
import { Image } from 'expo-image';
import { useFavoriteContext } from '../context/FavouriteContext';



const Card2 = ({item,navigation}) => {
  const { toggleFavorite, isFavorite  } =useFavoriteContext();
  const {backgroundColor,image,name,price} = item
  // console.log(isFavorite(item._id))
  return (
    <TouchableOpacity style={{...styles.container,backgroundColor:backgroundColor}} onPress={()=>navigation.navigate('Details',item)} >
        <TouchableOpacity onPress={()=>toggleFavorite(item)} style={styles.heart} >
          {isFavorite(item._id) ? <AntDesign name='heart' size={24} color='#FF5500' />:<AntDesign name='hearto' size={24} color='#FF5500' />}
        </TouchableOpacity>
      <Image
        style={{width:122,height:92,marginBottom:5,}}
        source={urlFor(image[0]).url()}
        contentFit="contain"
      />
        <Text style={styles.name} >{name}</Text>
        <Text style={styles.price} >$ {price}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    width:160,
    height:179,
    borderRadius:10,
    paddingTop:10,
    paddingRight:8,
    alignItems:'center',
  },
  heart:{
    backgroundColor:'white',
    width:30,
    height:30,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'flex-end',
  },
  name:{
    color:'white',
    fontSize:10,
    fontWeight:500
  },
  price:{
    color:'white',
    fontSize:12,
    fontWeight:700
  }
})
export default Card2
