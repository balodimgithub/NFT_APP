import { StyleSheet, FlatList, Text, View } from 'react-native';
import {useState} from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import {COLORS,SIZES, NFTData, FONTS} from "../constants/constants"
import {NFTCard, FocusedStatusBar, Homeheader} from "../components"
import React from 'react';


const Home = () => {
  const [nftData, setNftData] = useState(NFTData)


  // it checks all the strings passed into the input
  // Positions are set by the programmer as what strings characters would the includes fxn check if 0, it 
  //checks only the first character, if 4, it checks the first five string characters that matches
  //the substring of the actual values needed.
const foundData =[{id : 1, text : " Oops😫, NFT title not Found!!!"}]

const NotFound =({item})=> (
  <View style ={{
    width : "100%",
    height : 500,
    flexDirection : "row",
    alignItems : 'center',
    justifyContent : "center",
    backgroundColor : COLORS.secondary,
    paddingVertical : 6
      }}>
  <Text style={{
    fontSize: SIZES.extraLarge * 3,
    fontFamily : FONTS.semiBold,
    fontweight : "700",
    color : "orange"
  }}>
   {item.text}
  </Text>
  </View>
)


  const handleSearch=(value)=> {
   if(!value.length)return setNftData(NFTData)
   const filteredData = NFTData.filter((item) =>{
      return item.name.toLowerCase().includes(value.toLowerCase());
    })
  if(filteredData.length){
    setNftData(filteredData);
  }else if (filteredData.length < 1 && value){
    setNftData([])
  } else{
    setNftData(NFTData)
  }
  }
  return (
  <SafeAreaView style={{flex : 1}}>
 <FocusedStatusBar backgroundColor={COLORS.secondary}/>
<View style={{flex : 1}}>
 <View style={{zIndex : 0}}>
  {nftData.length != 0 ?  (
<FlatList data= {nftData}
renderItem={({item})=> (
   <NFTCard data ={item}/> 
  )}
 keyExtractor={(item)=> item.id}
 showVerticalScrollIndicator={false}
  ListHeaderComponent = {<Homeheader onSearch ={handleSearch}/>}
  />
) : (
  <FlatList data ={foundData}
renderItem={({item})=> (
  <NotFound item = {item}/>
  )}
 keyExtractor={(item)=> item.id}
 showVerticalScrollIndicator={false}
  ListHeaderComponent = {<Homeheader onSearch ={handleSearch}/>}
  />
)}
  </View>
   <View style ={{
    position : "absolute",
      top : 0,
      bottom : 0,
      right : 0,
      left : 0,
      zIndex: -1,
    }
     }>
 <View style={{height : 300, backgroundColor : COLORS.primary}}/>
 
<View style={{flex : 1,     backgroundColor: COLORS.white}} />
  </View>
 </View>
  </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})