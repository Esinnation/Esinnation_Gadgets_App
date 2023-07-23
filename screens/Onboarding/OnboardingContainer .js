import React, { useState,useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import First from './First';
import Second from './Second';

const { width } = Dimensions.get('window');

const OnboardingContainer = ({navigation}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalScreens = 3;

  const handleNext = () => {
    if (currentPage < totalScreens - 1) {
      scrollViewRef.current.scrollTo({ x: (currentPage + 1) * width, animated: true });
      setCurrentPage(currentPage + 1);
    }else{
      navigation.navigate('Mytabs')
    }
  };

  const handleSkip = () => {
    navigation.navigate('Mytabs')
  };

  const scrollViewRef =useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        onScroll={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const page = Math.round(offsetX / width);
          setCurrentPage(page);
        }}
        scrollEventThrottle={200}
      >
        {/* Screen 1 */}
        <View style={styles.screen}>
          <First/>
        </View>

        {/* Screen 2 */}
        <View style={styles.screen}>
          <Second/>
        </View>

        {/* Screen 3 */}
        <View style={[styles.screen, { backgroundColor: '#9b59b6' }]}>
          <Text style={styles.text}>Welcome to Onboarding Screen 3</Text>
        </View>
      </ScrollView>

      {/* Indicator */}
      <View style={styles.indicatorContainer}>
        {[...Array(totalScreens)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentPage ? styles.activeIndicator : null,
            ]}
          />
        ))}
      </View>

      {/* Next and Skip buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  screen: {
    width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    position:'absolute',
    bottom:60,
    alignSelf:'center'
  },
  indicator: {

    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#bbb',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position:'absolute',
    bottom:20,
    width:width,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OnboardingContainer;
