import { StyleSheet, Text,Image, View } from 'react-native';
import {COLORS, SIZES, SHADOWS, assets, FONTS} from "../constants/constants";
import React from 'react'
import { TouchableOpacity } from 'react-native'
export const CircleButton = ({handlePress, imageUrl,...props}) => {
  return (
    <TouchableOpacity style={
        {width : 40, 
        height : 40,
        backgroundColor : COLORS.white,
        position : "absolute",
        borderRadius :SIZES.extraLarge,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        ...SHADOWS.light,
         ...props
        }} onPress={handlePress}>
     <Image source ={imageUrl} resizeMode="contain" style={{
        width :24,
        height :24
     }}/>
        </TouchableOpacity>
  )
}
export const RectButton =({minWidth, fontSize, handlePress, ...props})=> {
    return (
   <TouchableOpacity style={
        {
        backgroundColor : COLORS.primary,
        borderRadius :SIZES.extraLarge,
        padding : SIZES.small,
        minWidth : minWidth,
         ...props
        }} onPress={handlePress}>
  
 <Text style={{
    fontFamily : FONTS.semiBold,
    fontSize : fontSize,
    color : COLORS.white,
    textAlign: "center",
  }}>
    Place a bid
  </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({})