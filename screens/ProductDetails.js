import { SafeAreaView, ScrollView,StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {Feather} from '@expo/vector-icons'
import { globalStyles } from '../global'
import ProductHeader from '../compoents/ProductHeader'
// import { Image } from 'react-native'
import Bottom from '../shared/Bottom'
import { urlFor } from '../lib/client'
import { Image } from 'expo-image';
import { useStateContext } from '../context/StateContext'
import { StatusBar } from 'expo-status-bar'






const ProductDetails = ({route:{params}}) => {
  const {incQty,decQty,quantity,onAdd}= useStateContext()

  const [index, setIndex] = useState(0)
  const {shipping,rating,price,name,details,image} = params
return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar style='dark' />
      <View style={styles.mainImageContainer}>
        <Image source={urlFor(image[index]).url()} style={{width:200,height:200}} contentFit="contain"   />
      </View>
      <View style={styles.smallImageContainer}>
        {image?.map((item,i)=>(
          <TouchableOpacity onPress={()=>setIndex(i)} key={i} style={{backgroundColor:'white',borderRadius:10,elevation:10,padding:8}} > 
            <Image 
              source={urlFor(item).url()}
              alt="samll-images"
              style={{width:55,height:55}}
              contentFit="contain"               
            />
          </TouchableOpacity>
          ))}
      </View>
      <Bottom>
        <View style={{padding:29,flex:1}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'#909090',fontSize:12,textTransform:'uppercase',fontWeight:500}}>{shipping} SHIPPING</Text>
            <View style={{flexDirection:'row',alignItems:'center',gap:2}}>
              <Feather name="star" size={20} color="#E6BB66" />
              <Text style={{color:'#3F4343',fontSize:18,fontWeight:600}}>{rating}</Text>
            </View>
          </View>
          <Text style={{color:'#3F4343',fontSize:22,fontWeight:600}}>{name}</Text>
          <Text style={{color:'#909090',fontSize:12,fontWeight:400,marginTop:5}}>{details}</Text>
          <Text style={{color:'#FF5500',fontSize:20,fontWeight:600,marginTop:10}}>$ {price}</Text>
            <View style={styles.qty}>
              <TouchableOpacity onPress={decQty} >
                <Feather name="minus" size={24} color="#909090"  />
              </TouchableOpacity>
              <Text style={{color:'#909090',fontSize:20,fontWeight:600}}>{quantity}</Text>
              <TouchableOpacity onPress={incQty} >
                <Feather name="plus" size={24} color="#909090" />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',gap:30,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity 
              style={{backgroundColor:'#FF5500',paddingHorizontal:35,paddingVertical:10,borderRadius:55}}
              onPress={()=>onAdd(params,quantity)}
            >
              <Text style={{color:'white',fontSize:16,fontWeight:600}}>Add to cart</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#FF5500',paddingHorizontal:35,paddingVertical:10,borderRadius:55}}>
              <Text style={{color:'white',fontSize:16,fontWeight:600}}>Buy Now</Text>  
            </TouchableOpacity>
            </View>
        </View>
      </Bottom>

    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
  mainImageContainer:{
    width:200,
    height:200,
    backgroundColor:'white',
    borderRadius:55,
    alignItems:'center',
    marginTop:0,
    alignSelf:'center',
    marginBottom:20,
    justifyContent: 'center',
  },
  smallImageContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:20,
    marginBottom:30
  },
  qty:{
    flexDirection:'row',
    alignItems:'center',
    gap:20,
    borderColor:'#C4C4C4',
    borderRadius:36,
    paddingHorizontal:12,
    paddingVertical:8,
    borderWidth:1,
    marginTop:10,
    alignSelf:'center',
    marginBottom:10
  }

})
export default ProductDetails
