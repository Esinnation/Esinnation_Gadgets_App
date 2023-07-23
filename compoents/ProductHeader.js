import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Ionicons,AntDesign} from '@expo/vector-icons'
import { useStateContext } from '../context/StateContext'
import { TouchableOpacity } from 'react-native'
import { useFavoriteContext } from '../context/FavouriteContext';


const ProductHeader = ({navigation,route:{params}}) => {
  // console.log(params._id)
  const { toggleFavorite, isFavorite  } =useFavoriteContext();
  const {totalQuantities} = useStateContext()
return (
    <View style={styles.container}>
      <Ionicons onPress={()=>navigation.goBack()} style={styles.icon} name='chevron-back' size={24} color={'#CFCFCF'} />
      <View style={styles.rightIconContainer}>
        <TouchableOpacity onPress={()=>toggleFavorite(params)} >
        {isFavorite(params._id) ?  
          <Ionicons style={styles.icon} name='heart' size={24} color={'#FF5500'} />
          :
          <Ionicons style={styles.icon} name='heart-outline' size={24} color={'#767575'}/>
        }

        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
          <Text style={styles.cartQty}>{totalQuantities}</Text>
          <AntDesign style={styles.headerIcon} name='shoppingcart' size={24} color={'#767575'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  rightIconContainer:{
    flexDirection:'row',
    gap:8,
    alignItems:'center'
  },
  icon:{
    backgroundColor:'white',
    borderRadius:60,
    padding:11
  },
  headerIcon:{
    backgroundColor:'white',
    borderRadius:60,
    padding:10
  },
  cartQty:{
    position:'absolute',
    right:0,
    top:0,
    zIndex:100,
    color:'white',
    backgroundColor:"#F50",
    borderRadius:60,
    width: 20,
    height: 20,
    textAlign:'center',
    fontSize:13  
  }
})
export default ProductHeader
