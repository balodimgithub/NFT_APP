import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import { ETHPrice } from './SubInfo';
import {COLORS,SIZES, FONTS} from "../constants/constants";

const DetailsBid = ({bid}) => {
  return (
    <View style={{
   width : "100%",
   flexDirection : "row",
   justifyContent : "space-between",
   alignItems : "center",
   marginVertical : SIZES.base,
   paddingHorizontal : SIZES.base * 2
    }}>
     <Image source ={bid.image} resizeMode ="contain"  style={{
      width : 48,
      height : 48
     } } />
     <View>
      <Text style={{
        fontfamily :FONTS.semiBold,
        fontSize : SIZES.small,
        color : COLORS.primary
      }}>
     bid placed by  {bid.name}
      </Text>

      <Text style={{
        fontfamily :FONTS.regular,
        fontSize : SIZES.small -2,
        color : COLORS.secondary,
        marginTop : 3
      }}>
       {bid.date}
      </Text>
     </View>
     <ETHPrice Price ={bid.price}/>
    </View>
  )
}

export default DetailsBid

const styles = StyleSheet.create({})