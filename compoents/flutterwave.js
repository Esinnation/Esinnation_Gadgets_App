import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PayWithFlutterwave } from 'flutterwave-react-native'
import {FLUTTERWAVE_MERCHENT_ID} from "@env"
import { useStateContext } from '../context/StateContext'

const Flutterwave = ({handleOnRedirect}) => {
  const {totalPrice} = useStateContext()

  const generateRef = (length) => {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];  
    for (var i=0; i<length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
  }
  return (
    <PayWithFlutterwave
      onRedirect={handleOnRedirect}
      options={{
        tx_ref: generateRef(11),
        authorization:FLUTTERWAVE_MERCHENT_ID,
        customer: {
            email: 'abdulrazaqridollah96@gmail.com'
        },
        amount: totalPrice,
        currency: 'NGN',
        payment_options: 'card'
      }}
    />
  )
}

export default Flutterwave

const styles = StyleSheet.create({})