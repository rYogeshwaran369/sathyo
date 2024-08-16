import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default class Podcast_card extends Component {
  render() {
    return (
      <View style={styles.cardView}>
        <View style={styles.row}>
          <ImageBackground
            source={{ uri: 'https://res.cloudinary.com/djc99tekd/image/upload/v1723719615/sathyodhayam/qmad7qesjddv7vwdp9gg.png' }} // Replace with your image URL
            style={styles.imageBackground}
          />
          <View style={styles.textContainer}>
            <Text style={styles.subtitleText}>Web</Text>
            <Text style={styles.podcastText}>Podcast</Text>
          </View>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>இயற்கையை நம்புங்கள்</Text>
          <Text style={styles.timeText}>6 minutes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    width: '100%',
    height: 150,
    borderRadius: 7,
    borderColor: '#CBCBCB',
    borderWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackground: {
    width: 60,
    height: 60,
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  subtitleText: {
    fontSize: 12.5,
    color: '#898989',
  },
  podcastText: {
    fontSize: 11,
    color: '#898989',
  },
  description: {
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 11,
    color: '#898989',
    marginTop: 5,
  },
});
