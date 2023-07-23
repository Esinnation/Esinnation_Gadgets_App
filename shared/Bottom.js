import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const Bottom = (props) => {
  return (
      <ScrollView style={styles.cardContent} showsVerticalScrollIndicator={false}>
        {props.children}
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  cardContent:{
    backgroundColor:'white',
    borderTopStartRadius:40,
    borderTopEndRadius:40,
    flex:1,
    marginHorizontal:-16,
    shadowColor: "#d0d0d0",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:  2,
    shadowRadius: 1.51,
    elevation: 4
      }
})
export default Bottom
