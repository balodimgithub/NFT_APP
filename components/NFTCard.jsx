import { StyleSheet, Text, View, Image } from 'react-native';
import {COLORS, SIZES, SHADOWS, assets} from "../constants/constants";
import { useNavigation } from '@react-navigation/native'
import React from 'react';
import {SubInfo, ETHPrice, People, ImageCmp, EndDate, NFTTitle} from "./SubInfo"
import { CircleButton, RectButton } from './Button';
const NFTCard = ({data}) => {
    const navigation = useNavigation()
  return (
    <View style={{
        backgroundColor : COLORS.white,
        borderRadius : SIZES.font,
        marginBottom : SIZES.extraLarge,
        margin : SIZES.base,
         ...SHADOWS.dark
    }}>
      <View style={{
        width : "100%",
        height : 250
      }}>
   <Image source ={data.image}
   resizeMode ="cover" 
   style={{
    width :"100%",
    height:  220,
    borderTopRightRadius : SIZES.font,
    borderTopLeftRadius : SIZES.font
   
   }}/>
   <CircleButton imageUrl ={assets.heart} right={10} top={10}/>
   <SubInfo    />
  
   </View>
   <View style={{
    width : "100%",
    padding : SIZES.font
   }}>

  <NFTTitle  title ={data.name} 
  subTitle= {data.creator} 
  titleSize = {SIZES.large}
  subTitleSize={SIZES.small}/>

  <View style={{
    margintop : SIZES.font,
    flexDirection : 'row',
    justifyContent : "space-between",
     alignItems : "center"
  }}>
<ETHPrice Price = {data.price}/>
<RectButton minWidth ={120} fontSize = {SIZES.font} 
 handlePress={()=> {
  navigation.navigate("Details", {data})
 }}  />
  </View>
  </View>
    </View>
  )
}

export default NFTCard

const styles = StyleSheet.create({})