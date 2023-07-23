import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useEffect, useState} from 'react'
import Card2 from '../shared/Card2'
import { client } from '../lib/client'

const AllProducts = ({navigation}) => {
  
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
      setProducts(products)
      // console.log(products)
    }
    fetch()
  },[])
  
  return (
    <View>
      <Text style={{color:'#343a40',fontSize:20,fontWeight:600,marginBottom:10}}>All</Text>
      <View style={styles.grid}>
        {!products ? <Text>Loading</Text> : products?.map(item=><Card2 item={item} key={item?._id} navigation={navigation} />)}
      </View>
    </View>
  )
}

export default AllProducts

const styles = StyleSheet.create({
  grid:{
    gap:10,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'center',

  }
})