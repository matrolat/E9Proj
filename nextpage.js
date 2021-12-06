
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const some_data = [1, 2, 3,4,5,6];

export default class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      checked:-1
    };
  }
  componentDidMount(){
 
   
//     fetch('https://dev1.equip9.com/e9/Apis/v1/JWT/GenerateJWTToken', {
//       method: 'POST',
//       body: JSON.stringify({ 
//          "UserCredentialId":7,
//          "BusinessTypeId":1,
//          "DeviceId":1,
//          "IsdCode":91
//  })

//     })

//       .then((response) => response.json())
//       .then((responseJson) => {
//         JSON.stringify(responseJson);
//         console.log(responseJson);
//       })
//       .catch((error) => {
//        JSON.stringify(error);
//         console.error(error);
//       });

    //   const link= 'https://dev1.equip9.com/e9/Android/GetAllServiceBySUBID?SubscriptionTypeId=2' + selected
      
    fetch('https://dev1.equip9.com/e9/Android/GetAllServiceBySUBID?SubscriptionTypeId=2',{
          method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => {
        JSON.stringify(responseJson);
        console.log(responseJson);
      })
      .catch((error) => {
       JSON.stringify(error);
        console.error(error);
      });
  }

  
  render()
  {



    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor={'#FAA300'} />
      <View style={{flex:1,backgroundColor:"#FCFCFC",flexDirection:"row",alignItems:"center",borderBottomColor:"C2C2C2"}}>
        <View style={{ borderColor:"black",height:"100%",justifyContent:'center',alignItems:"center",borderWidth:0.2,flex:4}}><Text>E9 Services</Text></View>
        <View style={{borderColor:"black",height:"100%",justifyContent:'center',alignItems:"center",borderWidth:0.2,flex:2}}><Text>Free Contacts</Text></View>
        <View style={{borderColor:"black",height:"100%",justifyContent:'center',alignItems:"center",borderWidth:0.2,flex:4}}><Text>Buy Offline services</Text></View>
        <View style={{flex:4,borderColor:"black",height:"100%",justifyContent:'center',alignItems:"center",borderWidth:0.2}}><Text>Pricing Details</Text></View>
      </View>
      <View style={{flex:8,backgroundColor:"#2C2C2C0A"}}>
      <ScrollView >
     { some_data.map( (item,index)=>{
       return (<View style={{flex:1,flexDirection:"row",marginVertical:10,marginHorizontal:18,backgroundColor:"white",borderWidth:0.19,borderColor:"black"}}>
    
        <View style={{ borderColor:"black",height:90,justifyContent:'center',alignItems:"center",}}><Text></Text></View>
        <View style={{borderColor:"black",height:"100%",justifyContent:'center',alignItems:"center"}}><Text></Text></View>
        <View style={{borderColor:"black",height:"100%",justifyContent:'center',alignItems:"center"}}><Text></Text></View>
        <View style={{flex:3,borderColor:"black",height:"100%",justifyContent:'center',alignItems:"center"}}><Text></Text></View>
           </View>)
   } )}

      </ScrollView>
      </View>
      <View style={{flex:1,backgroundColor:"#2C2C2C0F",flexDirection:"row-reverse"}}>
 
            <View style={{width:"25%",marginTop:10}}>
                <Text style={{color:"#F79C00"}}>Total Amount</Text>
                <View style={{flex:1,alignItems:"center"}}><Text style={{color:"#F79C00"}}>376</Text></View>
            </View>
            <View style={{width:"25%"}}>
                <Text style={{color:"#F79C00",marginTop:10}}>Total Contacts</Text>
                <View style={{flex:1,alignItems:"center"}}><Text style={{color:"#F79C00"}}>40</Text></View>
            </View>
      </View>
      <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row-reverse',
            alignItems: 'center',
          
          }}>
          <View
            style={{
              width: 125,
              marginHorizontal: 25,
            }}>
            <Button
              title="Next"
              color="red"
              // onPress={() =>
              //   navigation.navigate('nextpage')
            />
          </View>
        </View>
   </SafeAreaView>
    )
  }
 

}


const styles = StyleSheet.create({
    container: {
        flex:1,borderColor:"black",height:"100%",justifyContent:'center',alignItems:"center",borderWidth:0.2,
    },
    box: {
      width: '90%',
      backgroundColor: 'white',
      height: '80%',
      borderRadius: 5,
      borderColor: '#2C2C2C1A',
      borderWidth: 0.3,
      shadowColor: '#2C2C2C1A',
      shadowOpacity: 1,
      elevation: 0,
  
      shadowRadius: 15,
      shadowOffset: {width: 56, height: 13},
    },
  });
