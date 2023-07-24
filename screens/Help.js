import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../global'
import { StatusBar } from 'expo-status-bar'



const Help = () => {
  return (
    <View style={globalStyles.container}>
      <StatusBar style='dark' />
      <Text>Help</Text>
    </View>
  )
}

export default Help

const styles = StyleSheet.create({})