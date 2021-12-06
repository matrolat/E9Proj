import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import nextpage from './nextpage';

const some_data = [1, 2, 3];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Jwttoken:"",
      checked:-1
    };
  }


  componentDidMount(){

  //   fetch('https://dev1.equip9.com/e9/Android/GetAllSubscriptionForCountryForBusiness', {
  //     method: 'GET',
  //     bod
  //   })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       alert(JSON.stringify(responseJson));
  //       console.log(responseJson);
  //     })
  //     .catch((error) => {
  //       alert(JSON.stringify(error));
  //       console.error(error);
  //     });
  // }

  fetch('https://dev1.equip9.com/e9/Apis/v1/JWT/GenerateJWTToken', {
          method: 'POST',
          body: JSON.stringify({ 
             "UserCredentialId":7,
             "BusinessTypeId":1,
             "DeviceId":1,
             "IsdCode":91
     })
    
        })
    
          .then((response) => response.json())
          .then((responseJson) => {
            JSON.stringify(responseJson);
            console.log(responseJson);
            this.state.Jwttoken= responseJson;
          })
          .catch((error) => {
           JSON.stringify(error);
            console.error(error);
          });
        }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor={'#FAA300'} />
        <View
          style={{
            flex: 2,
            color: 'black',
            backgroundColor: '#fcfcfc',
            justifyContent: 'center',
            paddingHorizontal: 20,
            color: 'black',
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 10}}>
            Choose your subscription plan
          </Text>
          <Text>We have 3 categories as listed below</Text>
        </View>
        {/* 3 boxes */}
        <View style={{backgroundColor: '#fcfcfc', flex: 8}}>
          {some_data.map((item, index) => {
            // const border_color =
            //   item == 1 ? 'red' : item == 2 ? 'blue' : 'green';
            function Box() {
              if (item == 1) {
                return (
                  <View>
                    <Text>Plan 1</Text>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                      Contact Based
                    </Text>
                    <Text>Best for a small agency person</Text>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <Text>5 Free Contacts</Text>
                      <Text>Priority Support</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text>Unlimited Downloads</Text>
                      <Text>All Access Zone</Text>
                    </View>
                 
                  </View>
                );
              }

              if (item == 2) {
                return (
                  <View style={{}}>
                    <Text>Plan 2</Text>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                      Offline Based
                    </Text>
                    <Text>Best for a company over 500 employee</Text>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <Text>5 Free Contacts</Text>
                      <Text>Priority Support</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text>Umlimited Downloads</Text>
                      <Text>All Access Zone</Text>
                    </View>
             
                  </View>
                );
              }

              if (item == 3) {
                return (
                  <View>
                    <Text>Plan 3</Text>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                      Commission Based
                    </Text>
                    <Text>Best for a small agency person</Text>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <Text>5 Free Contacts</Text>
                      <Text>Priority Support</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text>Umlimited Downloads</Text>
                      <Text>All Access Zone</Text>
                    </View>
        
                  </View>
                );
              }
            }

       

            return (



              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>

                  {
                      this.state.checked==index?
                      <TouchableOpacity
                      style={{
                        width: '90%',
                        backgroundColor: 'white',
                        height: '80%',
                        borderRadius: 5,
                        borderColor: '#FAA300',
                        borderWidth: 2,
                      }}
                   >
                   
                      <Text style={{color: '#333'}}>

                        <Box />
                      </Text>
                      {/* {item == 1 ? <Text>Sameer Sameer</Text> }; */}
                    </TouchableOpacity>
                        :
                        <TouchableOpacity
                   
                        style={{
                          width: '90%',
                          backgroundColor: 'white',
                          height: '80%',
                          borderRadius: 1,
                          borderColor: 'black',
                          borderWidth: 0.1,
                        
                        }}
                        onPress={()=> {
                          
                            this.setState({checked:index})
                        
                          
                        }}>
                        <Text style={{color: '#333'}}>
                          {' '}
                          <Box />{' '}
                        </Text>
                        {/* {item == 1 ? <Text>Sameer Sameer</Text> }; */}
                      </TouchableOpacity>
      

                  }

               



              </View>
            );
          })}
        </View>

        {/* footer wid button */}
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: 125,
              marginHorizontal: 25,
            }}>
            <Button
              title="Next"
              color="red"
              onPress={() =>{
                this.props.navigation.navigate('nextpage',this.state.Jwttoken);
              }}
              // onPress={() =>
              //   navigation.navigate('nextpage')
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcfcfc',
    flex: 1,
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="nextpage" component={nextpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
