import { StyleSheet, Text, View,Image,TextInput } from 'react-native';
import {COLORS, SIZES, FONTS, SHADOWS,assets} from "../constants/constants";
import React from 'react';

const Homeheader = ({onSearch}) => {
  return (
  <View style={{
    backgroundColor : COLORS.primary,
    padding : SIZES.font
  }}>
<View style={{
  flexDirection : "row",
  justifyContent: "space-between",
  alignItems : "center"
}}>
<Image source={assets.logo} reSizeMode="contain"  style={{
  width: 90,
  height:25
}}  />

<View style={{
  width : 45,
  height :45
}}>
<Image source={assets.person01} resizeMode="contain" style={{
  width: "100%",
  height: "100%"
}}/>

<Image source={assets.badge} resizeMode="contain" style={{
  position : "absolute",
  width: 15,
  height:15,
  bottom : 0,
  right: 0,
}}/>
</View>
</View>

<View style={{
  marginVertical : SIZES.font,
}}>
<Text style={{
  fontFamily : FONTS.regular,
  color : COLORS.white,
  fontSize : SIZES.font,
  fontWeight: "400"
}}>
  Hello Asake👋,
</Text>
<Text style={{
  fontFamily : FONTS.regular,
  color : COLORS.white,
  fontSize : SIZES.large,
  fontWeight: "700",
  marginTop : SIZES.base/2
}}>
  Let's find a masterpiece
</Text>
</View>
<View style={{
  marginTop : SIZES.font,
}}>
<View style={{
  width :"100%",
  borderRadius : SIZES.font,
  backgroundColor : COLORS.gray,
  flexDirection : "row",
  alignItems: "center",
  paddingHorizontal : SIZES.font,
  paddingVertical : SIZES.small-2
}}>
 < Image source ={assets.search} style={{
   width : 20,
   height : 20,
   marginRight : SIZES.base

 }} resizeMode ="contain"/>
 <TextInput value placeholder='Search for NFts'  style={{
  flex : 1
 }} onChangeText={onSearch}/>
</View>
</View>
  </View>
  )
}

export default Homeheader;

const styles = StyleSheet.create({})