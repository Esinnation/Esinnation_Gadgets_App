import { StyleSheet, Text, TextInput, View,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React,{useEffect, useState} from 'react'
import {Feather} from '@expo/vector-icons'
import { globalStyles } from '../global'
import { client } from '../lib/client'
import Card2 from '../shared/Card2'



const Search = ({navigation}) => {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState(null)
  useEffect( ()=>{
    async function fetch(){
      const productsQuery = `*[_type=="product"]{
        _id,
        backgroundColor,
        image[]{
          asset{
            _ref
          }
        },
        name,
        price,
        shipping,
        rating,
        details
      }`
      const products = await client.fetch(productsQuery)
      const filteredProducts = products.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
      setProducts(filteredProducts)
    }
    fetch()
  },[search])

  const handleSearch = (e) =>{
    setSearch(e)
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View  style={[globalStyles.container,styles.container]}>
        <View style={styles.searchContainer}>
          <Feather name='search' size={24} color={'#CFCFCF'} />
          <TextInput placeholder='Search products' onChangeText={handleSearch} value={search} style={styles.textInput} />
        </View>
        <ScrollView >
          <View style={styles.grid}>
            {!products ? <Text>Loading</Text> : products?.map(item=><Card2 item={item} key={item?._id} navigation={navigation} />)}

          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:10,
  },
  searchContainer:{
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:64,
    paddingHorizontal:12,
    paddingVertical:19,
    gap:12,
    alignItems:'center',
    marginBottom:30
  },
  textInput:{
    flex:1,
    paddingHorizontal:12,

  },
  grid:{
    gap:10,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
    

  }
})
export default Search
