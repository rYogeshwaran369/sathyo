import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, StatusBar, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import an icon library
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Auth functions

const Top = StatusBar.currentHeight;

export default function AppHeader({ navigation }) {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    const navigateTo = (route) => {
        closeMenu();
        navigation.navigate(route);
    };

    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth); // Sign out the user
            navigation.navigate('Login'); // Redirect to Login screen or another appropriate screen
        } catch (error) {
            console.error('Error signing out: ', error);
            Alert.alert('Logout Error', 'There was a problem logging out. Please try again.');
        }
    };

    const handleLogin = async (email, password) => {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password); // Handle login here
            navigation.navigate('Home'); // Navigate to home or other screen upon successful login
        } catch (error) {
            console.error('Error signing in: ', error);
            Alert.alert('Login Error', 'Invalid credentials. Please check your email and password.');
        }
    };

    return (
        <View style={[styles.container,{marginTop:40}]}>
            <Image
                style={styles.backImage}
                source={{ uri: 'https://res.cloudinary.com/dkkkl3td3/image/upload/v1722829874/vayqnwazm9xtrmffrkqp.png' }}
            />
            <TouchableOpacity onPress={toggleMenu} style={[styles.menuButton]}>
                <FontAwesome name={menuVisible ? "caret-down" : "bars"} size={24} color="black" />
            </TouchableOpacity>

            {menuVisible && (
                <View style={styles.dropdownContainer}>
                    <TouchableOpacity style={styles.dropdownItem} onPress={() => navigateTo('Meditation_page')}>
                        <Text style={styles.dropdownText}>Meditation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dropdownItem} onPress={handleLogout}>
                        <Text style={styles.dropdownText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Top,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        height: 60,
    },
    backImage: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
    menuButton: {
        paddingHorizontal: 10,
    },
    dropdownContainer: {
        position: 'absolute',
        top: 60, // Align dropdown below the header
        right: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 5, // For shadow effect
        zIndex: 1,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    dropdownText: {
        fontSize: 16,
    },
});
