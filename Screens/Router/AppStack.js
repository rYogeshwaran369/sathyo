import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, View, StyleSheet } from "react-native";
import Login from "../Authentiction/Login";
import Sign_up from "../Authentiction/Sign_up";
import Home from "../Home/Home";
import Forget_Password from "../Authentiction/Forget_password";
import Email_Sent from "../Authentiction/Email_Sent";
import News from "../News/News";

const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                component={Login}
            />
            <Stack.Screen
                name="Sign_up"
                options={{ headerShown: false }}
                component={Sign_up}
            />
            <Stack.Screen
                name="Home"
                options={{
                    headerBackImage: () => (
                        <View style={styles.backImageContainer}>
                            <Image
                                style={styles.backImage}
                                source={{ uri: 'https://res.cloudinary.com/dkkkl3td3/image/upload/v1722829874/vayqnwazm9xtrmffrkqp.png' }}
                            />
                        </View>
                    ),
                    headerTitle:''
                }}
                component={Home}
            />
            <Stack.Screen
                name="Forget_Password"
                options={{ headerShown: false }}
                component={Forget_Password}
            />
            <Stack.Screen
                name="Email_Sent"
                options={{ headerShown: false }}
                component={Email_Sent}
            />
            <Stack.Screen
                name="News"
                options={{
                    headerBackImage: () => (
                        <View style={styles.backImageContainer}>
                            <Image
                                style={styles.backImage}
                                source={{ uri: 'https://res.cloudinary.com/dkkkl3td3/image/upload/v1722829874/vayqnwazm9xtrmffrkqp.png' }}
                            />
                        </View>
                    ),
                    headerTitle:''
                }}
                component={News}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    backImageContainer: {
        alignItems: 'center',
        width: '60%',
        marginLeft: '2%',
    },
    backImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    circleTitle: {
        backgroundColor: 'black',
        width: 40,
        height: 40,
        borderRadius: 20,
        // marginRight: , // add margin to the right
    },
});
