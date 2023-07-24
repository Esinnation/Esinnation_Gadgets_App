import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../global'
import { StatusBar } from 'expo-status-bar'


const Profile = () => {
  return (
    <View style={globalStyles.container}>
      <StatusBar style='dark' />
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})