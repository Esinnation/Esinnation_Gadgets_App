import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Feather,AntDesign} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useStateContext } from '../context/StateContext'



const Header = ({navigation}) => {
  const {totalQuantities} = useStateContext()

  return (
      <View style={styles.headerContainer}>
        <View>
          <Text style={{color:'#767575',fontSize:18}}>Hello</Text>
          <Text style={{color:'black',fontSize:24}}>Esinnation</Text>
        </View>
        <View style={styles.headerIconContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
            <Feather style={styles.headerIcon} name='search' size={24} color={'#767575'} />
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
  headerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:15,
    marginTop:10,
    paddingHorizontal:10,
  },
  headerIconContainer:{
    flexDirection:'row',
    gap:10,
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
export default Header
