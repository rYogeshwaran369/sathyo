import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Audio } from 'expo-av';
import { getFirestore, getDocs, collection, query, where, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default class MeditationTimer extends Component {
  constructor(props) {
    super(props);
    const durationInMinutes = props.route.params?.duration || 0; // Duration in minutes
    this.state = {
      duration: durationInMinutes * 60, // Convert to seconds
      timeLeft: durationInMinutes * 60, // Convert to seconds
      sound: null,
    };
  }

  timer = null;

  async componentDidMount() {
    await this.playSound(); // Play sound when the component mounts
    this.startTimer();
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
    if (this.state.sound) {
      this.state.sound.unloadAsync(); // Unload sound when the component unmounts
    }
  }

  playSound = async () => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/Hello.mp3')
    );
    this.setState({ sound });

    console.log('Playing Sound');
    await sound.playAsync();
  };

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        const newTime = prevState.timeLeft > 0 ? prevState.timeLeft - 1 : 0;
        if (newTime === 0) {
          clearInterval(this.timer);
          this.updateRequestField(); // Call Firebase update when the timer ends
          this.props.navigation.navigate('Home'); // Navigate to Home when timer ends
        }
        return { timeLeft: newTime };
      });
    }, 1000);
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Firebase update method to change "request" field to false
  updateRequestField = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (user) {
        const db = getFirestore();
        const usersRef = collection(db, 'Users');
  
        // Query the user document by email
        const q = query(usersRef, where('email', '==', user.email));
        const querySnapshot = await getDocs(q);
  
        if (!querySnapshot.empty) {
          // Assuming there's only one document for the current user
          const userDoc = querySnapshot.docs[0];
          const userDocRef = userDoc.ref;
  
          // Update the "request" field to false
          await updateDoc(userDocRef, {
            request: false
          });
          console.log('Request field updated successfully');
        } else {
          console.log('No user document found for the current email');
        }
      } else {
        console.log('No user is signed in');
      }
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  render() {
    const { timeLeft, duration } = this.state;

    return (
      <SafeAreaView style={styles.safearea}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.voiceSection}>
            <View>
              <View style={styles.headerView}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 15, fontWeight: 'black' }}>Meditation of</Text>
                  <Text style={styles.headerText}>Master Sri Ji</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', height: '76%', marginTop: '4%' }}>
            <CountdownCircleTimer
              isPlaying
              duration={duration}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[10 / 2, 10 / 3, 10 / 4, 0]}
              size={250}
              strokeWidth={5}
            >
              {() => (
                <Image
                  source={{ uri: 'https://res.cloudinary.com/djc99tekd/image/upload/v1723719615/sathyodhayam/qmad7qesjddv7vwdp9gg.png' }}
                  style={{
                    width: '80%',
                    height: '80%',
                    borderRadius: 100,
                    alignSelf: 'center',
                  }}
                />
              )}
            </CountdownCircleTimer>

            <View style={{ marginTop: '10%' }}>
              <Text style={{ fontSize: 40 }}>{this.formatTime(timeLeft)}</Text>
            </View>

            <View style={styles.Button}>
              <TouchableOpacity>
                <Text style={styles.SignIn_Button_Text}>Continue Meditation</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  voiceSection: {
    marginVertical: 20,
  },
  headerView: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Button: {
    marginTop: 20,
  },
  SignIn_Button_Text: {
    fontSize: 18,
    color: '#007BFF',
  },
});
