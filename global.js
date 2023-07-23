import React from "react";
import { StatusBar, StyleSheet } from "react-native";

function margin(a, b, c, d) {
  return {
    marginTop: a,
    marginRight: b !== undefined ? b : a,
    marginBottom: c !== undefined ? c : a,
    marginLeft: d !== undefined ? d : (b !== undefined ? b : a)
  }
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    ...margin(0, 10, 0, 10),
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor:'#F7F6F4'
  },
})