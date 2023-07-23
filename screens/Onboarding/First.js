import { StyleSheet, Text,Image, View,SafeAreaView,StatusBar,ImageBackground } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const First = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={  require('../../assets/bg.png')} style={styles.bgImage} >
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>ESINNATION GADGETS</Text>
          <Text style={styles.bodyPara}>WELCOME</Text>
          <Image source={  require('../../assets/gadgets.png')} style={styles.gadgets} />

        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:width
  },
  bgImage:{
    flex:1,
    paddingTop: StatusBar.currentHeight || 0,
    width:'100%'
  },
  bodyContainer:{
    alignItems:'center',
    textAlign:'center'
  },
  bodyText:{
    color:'white',
    fontSize:28,
    fontWeight:700,
    marginBottom:30
  },
  bodyPara:{
    color:'#ECC14d',
    fontSize:20,
    fontWeight:500,
    marginBottom:20
  },
  gadgets:{
    marginBottom:30
  },
  button:{
    color:'#F50',
    fontSize:14,
    fontWeight:600,
    paddingVertical:15,
    backgroundColor:'white',
    width:292,
    textAlign:'center',
    borderRadius:68,
    marginBottom:30
  },
  skip:{
    color:'white',
    fontSize:14,
    alignSelf:'flex-end',
    paddingRight:24
  }
})
export default First
