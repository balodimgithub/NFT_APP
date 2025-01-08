import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {COLORS,FONTS,SIZES,SHADOWS} from "../constants/constants";
import {assets} from "../constants/constants";
import { FocusedStatusBar,CircleButton, RectButton,SubInfo,
   DetailsDesc, DetailsBid } from '../components';
import React from 'react';
import { StatusBar } from 'react-native';

const DetailsHeader =({data, navigation})=> (
  <View style={{
    width :"100%",
     height : 373
  }}>
  <Image style={{
    width : "100%",
    height : "100%"
  }}
  source={data.image} resizeMode ="cover"/>
  <CircleButton imageUrl={assets.left} left={15} top={StatusBar.currentHeight + 10}  handlePress={()=> navigation.goBack("Home")}/>
  <CircleButton imageUrl={assets.heart} right={15} top={StatusBar.currentHeight + 10} />

  </View>
)




const Details = ({route, navigation}) => {
const {data} = route.params
  return (
   <SafeAreaView style={{
    flex : 1,
   }}>
  <FocusedStatusBar 
  barStyle="dark-content"
  backgroundColor ="transparent"
    translucent = {true}/>

  <View style={{
    width:"100%",
    position : "absolute",
    bottom : 0,
    paddingVertical : SIZES.font,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "rgba(255, 255, 255,0.5)",
    zIndex : 1
  }}>
    <RectButton minWidth={170}  fontSize ={SIZES.large} {...SHADOWS.dark}/>
  </View>
   <FlatList data={data.bids}  renderItem ={({item})=> <DetailsBid bid ={item}/>}
      keyExtractor={(item)=> item.id} 
      showVerticalScrollIndicator={false} 
      contentContainerStyle={{paddingBottom : SIZES.extraLarge * 3}}
      ListHeaderComponent={()=> (
        <React.Fragment>
            <DetailsHeader data= {data} navigation ={navigation}/>
            <SubInfo/>
            <View style={{
              padding : SIZES.font }}>
        <DetailsDesc  data ={data}/>
        {data.bids.length > 0 ? <Text style={{
          fontSize : SIZES.font,
       fontFamily : FONTS.semiBold,
        color : COLORS.primary
        }}>
          Current Bid

          </Text>  : <Text style={{
          fontSize : SIZES.font,
       fontFamily : FONTS.semiBold,
        color : COLORS.primary
        }}>
            No Bids 
            </Text>}
            </View>
        </React.Fragment>
    )}/>
   </SafeAreaView>
  )
}

export default Details;

const styles = StyleSheet.create({})