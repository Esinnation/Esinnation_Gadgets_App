import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../lib/client'
import { Image } from 'expo-image';

const Card1 = ({item,navigation}) => {
  const {shipping,image,name,price}= item
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Details',item)}>
      <Text style={styles.shipping}>{shipping} shipping</Text>
      <Image style={{width:115,height:73,alignSelf:'center'}} source={urlFor(image[0]).url()} contentFit="contain" />
      <Text style={{color:'#343A40',fontSize:10,fontWeight:500,paddingLeft:11}}>{name}</Text>
      <Text style={{color:'#343A40',fontSize:12,fontWeight:700,paddingLeft:11}}>$ {price} </Text>
    </TouchableOpacity>
  )
}

export default Card1

const styles = StyleSheet.create({
  container:{
    width:128,
    height:148,
    borderRadius:10,
    backgroundColor:"rgba(207, 207, 207, 0.2)",
    alignItems:'flex-start',
    paddingVertical:10
  },
  shipping:{
    backgroundColor:'white',
    borderRadius:66,
    color:'#F50',
    fontSize:8,
    fontWeight:400,
    paddingHorizontal:6,
    paddingVertical:3,
    marginLeft:8,
    marginBottom:10
  }
})