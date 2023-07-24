import { SafeAreaView, ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Feather,AntDesign} from '@expo/vector-icons'
import { globalStyles } from '../global'
import Header from '../compoents/Header'
import HomeBanner from '../compoents/HomeBanner'
import Featured from '../compoents/Featured'
import { StatusBar } from 'expo-status-bar'

import AllProducts from '../compoents/AllProducts'



const Home = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyles.container}  >
      <StatusBar style='dark' />
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
