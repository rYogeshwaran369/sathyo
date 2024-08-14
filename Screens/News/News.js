import React, { Component } from 'react'
import { View,Text,SafeAreaView,StyleSheet,ScrollView } from 'react-native'
import ImageSlideshow from '../../Components/ImageSlideshow'
import News_Details from '../../Components/News_Details'

export default class News extends Component {
  render() {
    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            {/* SlideShow */}
                <View style={styles.slider}>
                    <ImageSlideshow />
                </View>
                <View style={styles.voiceSection}>
                <View>
                {/* News Feed header View */}
                <View style={[styles.headerView]}>
                <View>
                <Text style={{fontSize:13,fontWeight:'black'}}>News Feeds from</Text>
                <Text style={[styles.headerText,{marginLeft:5}]}>Master Sri Ji</Text>
                </View>
                </View>
                </View>
               
                <View style={{marginTop:'2%'}}>
                    <News_Details/>
                    <News_Details/>
                    <News_Details/>
                    <News_Details/>
                    <News_Details/>
                    <News_Details/>
                </View>
          </View>
            </ScrollView>
        </SafeAreaView>
    )
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
      headerView: {
        marginBottom: 10,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      headerText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      voiceSection: {
        paddingHorizontal: '5%',
      },
})