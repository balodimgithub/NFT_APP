import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react' ;
import {ETHPrice, NFTTitle, People} from './SubInfo'
import {COLORS, SIZES,SHADOWS,FONTS, assets} from "../constants/constants"
const DetailsDesc = ({data}) => {
  const [text, setText] = useState(data.description.slice(0,100));
  const [readMore, setReadMore] = useState(false)
  return (
   <React.Fragment>
    <View style={{
      width: "100%",
     flexDirection : "row",
     justifyContent : "space-between",
     alignItems : 'center'
    }}>
  <NFTTitle title ={data.name} subTitle={data.creator} 
     titleSize ={SIZES.extraLarge} subTitleSize={SIZES.font} />
<ETHPrice Price={data.price}  />
    </View>
    <View style={{
      marginVertical: SIZES.extraLarge * 1.5,
    }}>
 <Text style={{
  fontSize : SIZES.font,
  fontfamily : FONTS.semiBold,
  color : COLORS.primary
 }}>
  Description
 </Text>

 <View style={{
    marginTop : SIZES.base
 }}>
<Text style={{
  fontSize : SIZES.small,
  fontfamily : FONTS.regular,
  color : COLORS.secondary,
  lineHeight: SIZES.large
 }}>
  {readMore ? data.description : `${text.slice(0,100)}...`}
  <Text onPress={()=> {
    if(readMore === false){
   setReadMore(true);
    }else{
      setReadMore(false);
    }
  }}
  style={{
  fontSize : SIZES.small,
  fontfamily : FONTS.regular,
  fontWeight : "700",
  color : COLORS.primary,
  lineHeight: SIZES.large
 }}>
   {readMore ? "Show Less" : "Read More"}
 </Text>
 </Text>
 </View>
    </View>
   </React.Fragment>
  )
}

export default DetailsDesc

const styles = StyleSheet.create({})