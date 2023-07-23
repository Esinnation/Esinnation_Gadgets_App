import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Feather,AntDesign} from '@expo/vector-icons'
import { globalStyles } from '../global'
import Header from '../compoents/Header'
import HomeBanner from '../compoents/HomeBanner'
import Featured from '../compoents/Featured'
import AllProducts from '../compoents/AllProducts'



const Home = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyles.container}  >
      <Header navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeBanner navigation={navigation} />
        <Featured navigation={navigation}/>
        <AllProducts navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({

})
export default Home
