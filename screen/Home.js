import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from './component/Icon';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          activeDotColor="#22D4FF"
          autoplayTimeout={5}
        >
          <View style={styles.item}>
            <Image
              source={require('../assets/banner-1.jpg')}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>

          <View style={styles.item}>
            <Image
              source={require('../assets/banner-1.jpg')}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>

          <View style={styles.item}>
            <Image
              source={require('../assets/banner-1.jpg')}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>

          <View style={styles.item}>
            <Image
              source={require('../assets/banner-1.jpg')}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>
        </Swiper>
      </View> */}

      <View style={styles.iconsContainer}>
        <Icon name="phone" iconText="Apple" />
        <Icon name="android" iconText="Samsung" />
        <Icon name="laptop" iconText="Laptop" />
      </View>

      <View style={styles.iconsContainer}>
        <Icon name="tablet" iconText="Tablet" />
        <Icon name="mouse" iconText="Mouse" />
        <Icon name="keyboard-outline" iconText="Keyboard" />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  sliderContainer: {
    width: '90%',
    height: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 8,
  },

  imgItem: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  item: {
    flex: 1,
    justifyContent: 'center',
  },

  iconsContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    marginTop: 35,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },

});


export default Home