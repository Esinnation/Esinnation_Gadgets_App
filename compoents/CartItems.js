import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../lib/client'
import { Image } from 'expo-image';
import {Feather,MaterialIcons} from '@expo/vector-icons'
import { useStateContext } from '../context/StateContext'


const  CartItems = ({item}) => {
  const {totalPrice,totalQuantities,cartItems,onRemove,setShowCart,toggleCartItemQuantity} = useStateContext()
  const {image,name,price,_id,quantity} = item
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{width:115,height:73,marginBottom:5,}}
          // source={require('../assets/Macbook2.png')}
          source={urlFor(image?.[0]).url()}
          contentFit="contain"
        />
      </View>
      <View style={{flex:1}} >
        <View style={styles.right}>
          <Text style={{fontWeight:'bold',fontSize:20,color:'#324d67'}}>{name}</Text>
          <Text style={{fontWeight:'500',fontSize:16,color:'#324d67'}}>${price}</Text>

        </View>
        <View style={styles.right}>
          <View style={styles.qty}>
            <TouchableOpacity onPress={()=>toggleCartItemQuantity(_id,'dec')} >
              <Feather name="minus" size={24} color="#909090"  />
            </TouchableOpacity>
            <Text style={{color:'#909090',fontSize:20,fontWeight:600}}>{quantity}</Text>
            <TouchableOpacity >
              <Feather name="plus" size={24} color="#909090" onPress={()=>toggleCartItemQuantity(_id,'inc')} />
            </TouchableOpacity>
          </View>
          <MaterialIcons onPress={()=>onRemove(item)} name='highlight-remove' color='#f02d34' size={24} />
        </View>

      </View>
    </View>
  )
}

export default CartItems

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    gap:10,
    backgroundColor:'white',
    padding:10,
    paddingLeft:20,
    height:150,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 10
  },
  imageContainer:{
    width:128,
    height:100,
    borderRadius:10,
    backgroundColor:"#ebebeb",
    alignItems:'center',
    paddingVertical:10
  },
  right:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    flex:1
  },
  qty:{
    flexDirection:'row',
    alignItems:'center',
    gap:20,
    borderColor:'#C4C4C4',
    // borderRadius:36,
    paddingHorizontal:8,
    paddingVertical:5,
    borderWidth:1,
    marginTop:10,
    alignSelf:'center',
    marginBottom:10
  }
})