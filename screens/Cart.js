import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { globalStyles } from '../global'
import CartItems from '../compoents/CartItems'
import { useStateContext } from '../context/StateContext'
import {MaterialIcons} from '@expo/vector-icons'
import Flutterwave from '../compoents/flutterwave'
import Toast from 'react-native-root-toast';


const Cart = ({navigation}) => {
  const {setCartItems,setTotalPrice, setTotalQuantities,setquantity,totalPrice,totalQuantities,cartItems,onRemove,toggleCartItemQuantity} = useStateContext()
  const handleOnRedirect = (data) => {
    const {status}=data
    if(status=='successful'){
      navigation.navigate('Home')
      Toast.show(`Hoooray, Your Payment was successfull `, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        backgroundColor:'green',
      });
      setCartItems([])
      setTotalPrice(0)
      setTotalQuantities(0)
      setquantity(1)
    }else{
      Toast.show(`Error processing payement. Please Try again `, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        backgroundColor:'red',
      });
    }
    // console.log(data)
  }
  return (
    <View style={globalStyles.container}>
      <Text style={{color: '#909090',marginBottom:10}}>CART SUMMARY</Text>
      {cartItems.length < 1 &&(
        <View style={{flex:1,gap:10,justifyContent:'center',alignItems:'center'}}>
          <MaterialIcons name='shopping-bag' size={150} color='black' />
          <Text>Your Shopping bag is empty</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
            <Text style={{color:'white',backgroundColor:'#f02d34',paddingHorizontal:10,paddingVertical:12 }}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      )}
      {cartItems.length >=1 && (
        <View style={{flex:1}}>
          <View style={styles.priceContainer}>
            <Text >Subtotal</Text>
            <Text >${totalPrice}</Text>
          </View>
            <Text style={{marginBottom:20}}>CART ({totalQuantities})</Text>
            <ScrollView  >
              {cartItems?.map((item)=>(
                  <CartItems key={item?._id}  item={item} />
                  ))}
                </ScrollView>
            <View style={styles.checkoutContainer}>
              <TouchableOpacity>
                <Flutterwave handleOnRedirect={handleOnRedirect} />
              </TouchableOpacity>
            </View>
        </View>

      )}
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  priceContainer:{
    flexDirection:'row',
    paddingHorizontal:10,
    paddingVertical:15,
    backgroundColor:'white',
    justifyContent:'space-between',
    marginBottom:15
  },
  checkoutContainer:{
    elevation:10,
    backgroundColor:'white',
    marginHorizontal:-10,
    height:60,
    alignItems:'center',
    justifyContent:'center',
  },
  checkout:{
    backgroundColor:'#F50',
    paddingVertical:10,
    color:'white',
    borderRadius:5,
    paddingHorizontal:40

  }
})