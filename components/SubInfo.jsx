import { StyleSheet, Text, View, Image } from 'react-native';
import {COLORS, SIZES,FONTS,SHADOWS, assets} from "../constants/constants"
import React from 'react'

 export const NFTTitle= ({title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View style={{
      marginBottom : SIZES.base
    }}>
      <Text style={{
        fontFamily : "serif",
        fontSize : titleSize,
         fontWeight : "700",
        color: COLORS.primary
    }}>{title}</Text>
    <Text style={{
    fontFmaily : "serif",
        fontSize : subTitleSize,
        fontWeight : "light",
        color: COLORS.primary
    }}>{subTitle}</Text>
    </View>
  )
}
  export const ETHPrice = ({Price})=> {
    return (
     <View style={{
        flexDirection : "row",
        alignItems: "center",
     }}>
       <Image source={assets.eth} resizeMode ="contain" style={{
        width: 20,
        height:20,
      marginRight : 2
       }}/>
       <Text style={{
        fontFamily : "serif",
        fontWeight : "700",
    fontSize : SIZES.font,
    color : COLORS.primary
       }}>
       {Price}
       </Text>
     </View>
    )
  }

  export const ImageCmp= ({imageUrl, index}) => {
    return (
      <View>
      <Image source={imageUrl} 
      resizeMode = "contain"
      style={{
        width : 48,
        height : 48,
        marginLeft : index === 0 ? 0 : -SIZES.font
      }} />
      </View>
    )
  }

  export const SubInfo= () => {
    return (
      <View style={{
        width : "100%",
        paddingHorizontal : SIZES.font,
        marginTop : -SIZES.extraLarge,
        flexDirection : "row",
        justifyContent : "space-between"
      }}>
     <People/>
     <EndDate/>
      </View>
    )
  }

  export const People= () => {
    return (
      <View style={{
        flexDirection : "row"
      }}>
    {[assets.person02, assets.person03, assets.person04].map((imageUrl, index)=> (
        <ImageCmp imageUrl ={imageUrl} index = {index}  key={index}   />
    ))}
      </View>
    )
  }
  export const EndDate= () => {
    return (
      <View style={{
        paddingHorizontal: SIZES.font,
        paddingVertical : SIZES.base,
        backgroundColor : COLORS.white,
        justifycontent : "center",
        elevation : 1,
        alignItems : "center",
        maxWidth : "50%",
        ...SHADOWS.light
      }}>
       <Text style={{
        fontFamily : "Serif",
        fontsize : SIZES.small,
        fontWeight: "light",
        color : COLORS.primary
       }}>
       Ending in
       </Text>
       <Text style={{
        fontFamily : "Sans",
        fontWeight: "700",
        fontsize : SIZES.medium,
        color : COLORS.primary
       }}>
       12h:30m




       </Text>
      </View>
    )
  }

const styles = StyleSheet.create({})