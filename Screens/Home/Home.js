import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import ImageSlideshow from '../../Components/ImageSlideshow';
import News_Details from '../../Components/News_Details';
import NewsFeedCard from '../../Components/NewsFeedCard';

const Top = StatusBar.currentHeight;

const generateRandomTitles = (count) => {
  const titles = [];
  for (let i = 0; i < count; i++) {
    titles.push(`Title ${i + 1}`);
  }
  return titles;
};

export default class Home extends Component {
  render(props) {
    const titles = generateRandomTitles(7); // Generate 10 random titles

    return (
      <SafeAreaView style={styles.safearea}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {/* SlideShow */}
          <View style={styles.slider}>
            <ImageSlideshow />
          </View>

          {/* Voice of Sri Ji */}
          <View style={styles.voiceSection}>

            {/* Voice of Sri Ji header View */}
            <View style={styles.headerView}>
              <View>
              <Text>Voice of</Text>
              <Text style={styles.headerText}>Master Sri Ji</Text>
              </View>
              <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
              <Text style={{fontSize:13,color:'#007DFE',fontWeight:'600'}}>View More</Text>
              </View>
            </View>

            {/* Voice of Sri Ji Podcast Links */}
            <View style={styles.podcastLinks}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {titles.map((title, index) => (
                  <View key={index} style={styles.boxContainer}>
                    <ImageBackground
                      source={{ uri: 'https://res.cloudinary.com/dkkkl3td3/image/upload/v1722782432/Sathyodhayam/vpoqragsagllubzuuj2k.jpg' }} // Replace with your image URL
                      style={styles.imageBackground}
                    >
                    </ImageBackground>
                    <Text style={styles.title}>இயற்கை...</Text>
                  </View>
                ))}
              </ScrollView>
            </View>

            {/* News Feeds */}
            <View>
                {/* News Feed header View */}
                <View style={[styles.headerView,{marginTop:'8%'}]}>
                <View>
                <Text style={{fontSize:13}}>Headlines of</Text>
                <Text style={styles.headerText}>Master Sri Ji</Text>
                </View>
                <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                <Text onPress={() => {this.props.navigation.navigate("News")}} style={{fontSize:13,color:'#007DFE',fontWeight:'600'}}>View More</Text>
                </View>
                </View>
                </View>
               
                <View style={{marginTop:'2%'}}>
                    <News_Details/>
                    <News_Details/>
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
    backgroundColor: 'white',
    marginBottom:10
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  slider: {
    marginHorizontal: '5%',
    marginTop: '2%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  voiceSection: {
    marginTop: 2,
    paddingHorizontal: '5%',
  },
  headerView: {
    marginBottom: 10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  podcastLinks: {
    flexDirection: 'row',
    marginTop:'2%'
  },
  boxContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  imageBackground: {
    width: 85, 
    height: 85, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
  title: {
    fontSize: 10,
    color: 'black', 
    marginTop: 5,
  },
});
