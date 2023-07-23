import { StyleSheet, Text, View } from 'react-native'
import React ,{useState,useEffect}from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'expo-image';
import { urlFor } from '../lib/client'
import { client } from '../lib/client'


const HomeBanner = ({navigation}) => {
  const [product, setProduct] = useState(null)

  useEffect( ()=>{
    async function fetch(){
      const productsQuery = `*[_type=="promo"]{
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
        details,
        discount
      }`
      const product = await client.fetch(productsQuery)
      setProduct(product[0])
    }
    fetch()
  },[])
  
  if(!product) return <Text>Loading....</Text>
  const {image,name,discount} = product
return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Details',product)}>
      <View>
        <Text style={styles.text}>{discount}</Text>
        <Text style={{fontSize:21,fontWeight:600,color:'white'}}>Discount</Text>
        <Text style={{fontSize:16,fontWeight:600,color:'white'}}>{name}</Text>
      </View>
      <Image source={urlFor(image[0]).url()} contentFit="contain" style={{width:100,height:100,}}  />
    </TouchableOpacity>
  )
}

export default HomeBanner

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f50',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    // paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:24,
    elevation:10,
    marginBottom:30,
  },
  text:{
    fontSize:36,
    fontWeight:'900',
    color:'white'
  }
})