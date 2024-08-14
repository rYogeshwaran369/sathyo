import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Top = StatusBar.currentHeight;

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
  render() {
      return (
          <SafeAreaView style={styles.safearea}>
{/* Image Container */}
        <View style={styles.ImageContainer}>
          <Image 
            source={{ uri: "https://res.cloudinary.com/dkkkl3td3/image/upload/v1722784157/Sathyodhayam/mk2lpjcsc1oytupt3fxc.jpg" }} 
            style={styles.image}
          />
        </View>

{/* Input Container */}

        <ScrollView>
        <View style={styles.InputContainer}>

        <Text style={styles.Header}>User Login</Text>
        
        <View style={styles.Welcome_Text}>
            <Text>Hey, enter your details to get sign</Text>
            <Text> in to your account</Text>
        </View>

        <View style={styles.Input_Box_Container}>
            <TextInput placeholder='Enter Email' placeholderTextColor={"#858585"} style={[styles.Input_Box]}/>
            <TextInput placeholder='Password' placeholderTextColor={"#858585"} style={[styles.Input_Box]}/>
            <Image
                style={{
                width: 27,
                height: 27,
                marginLeft: "85%",
                marginTop: -40,
                }}
                source={{
                uri: "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681360562/Group254_uq1yhe.png",
                }}
            />
            <TouchableOpacity onPress={() => {this.props.navigation.navigate("Forget_Password")}}>
            <Text style={styles.Trouble_SignIn}>Having trouble in sign in?</Text>
            </TouchableOpacity>
            <View style={styles.Button}>
            <TouchableOpacity
            onPress={() => {this.props.navigation.navigate("Home")}}>
            <Text style={styles.SignIn_Button_Text}>Sign In</Text>
            </TouchableOpacity>
            </View>
            
            <View style={styles.Signup_Navigation}>
            <Text>Don’t have an account? <TouchableOpacity style={{fontWeight:'bold',fontSize:16,}} onPress={() => {this.props.navigation.navigate("Sign_up")}}><Text style={{fontWeight:'bold',fontSize:16}}>Sign up</Text></TouchableOpacity></Text>
            </View>
        
        </View>
       
        </View>
        </ScrollView>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safearea: {
    marginTop: Top,
    flex: 1,
    backgroundColor: "white",
    justifyContent:'space-between',  
  },

  ImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height:'35%',
  },

  InputContainer: {
    height:'60%',
    alignContent:'center',
    alignItems:'center',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  Header: {
    fontSize:25,
    fontWeight:'bold',
    marginTop:'2%'
  },

  Welcome_Text : {
    alignItems:'center',
    fontSize:18,
    fontWeight:'black',
    width:'100%',
    marginTop:'3%'
  },

  Input_Box_Container: {
    width:"100%",
    justifyContent:'space-between',
    marginTop:'2.6%'
  },

  Input_Box: {
        width: "90%",
        height: 55,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        marginTop:'5%',
        borderColor: "#D6D6D6",
        borderRadius: 10,
        paddingLeft: 17,
  },

  Trouble_SignIn: {
        marginTop:'7%',
        marginLeft:'7%',
        fontSize:13,
        fontWeight:'bold'
  },

  Button: {
    width: "90%",
    height: 52,
    backgroundColor: "#10357E",
    marginLeft: 20,
    marginRight: 20,
    marginTop: "11%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize:18,
    color:'#FFFFFF',
    fontWeight:'bold',
    alignContent:'center',
  },

  SignIn_Button_Text: {
    fontSize:18,
    fontWeight:'bold', 
    color:'#FFFF'
  },

  Signup_Navigation: {
    justifyContent:'center', 
    alignItems:'center', 
    marginTop:'6%'
  }

});

