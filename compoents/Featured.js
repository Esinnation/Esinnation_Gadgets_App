import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import Card1 from '../shared/Card1'
import { client } from '../lib/client'


const Featured = ({navigation}) => {
  const [products, setProducts] = useState(null)
  useEffect( ()=>{
    async function fetch(){
      const productsQuery = `*[_type=="featured"]{
        _id,
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
    }
    fetch()
  },[])
  return (
    <View style={{marginBottom:24}}>
      <Text style={{color:'#343a40',fontSize:20,fontWeight:600,marginBottom:10}}>Hot sales</Text>
        <ScrollView horizontal contentContainerStyle={{gap:20}} showsHorizontalScrollIndicator={false}>
        {!products ? <Text>Loading</Text> : products?.map(item=><Card1 item={item} key={item?._id} navigation={navigation} />)}
        </ScrollView>
    </View>
  )
}

export default Featured
