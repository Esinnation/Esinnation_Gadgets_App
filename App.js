import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react'
import First from './screens/Onboarding/First';
import OnboardingContainer from './screens/Onboarding/OnboardingContainer ';
import Second from './screens/Onboarding/Second';
import Home from './screens/Home';
import Search from './screens/Search';
import { SafeAreaView } from 'react-native';
import ProductDetails from './screens/ProductDetails';
import HomeStack from './routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import { setupURLPolyfill } from 'react-native-url-polyfill';
import { StateContext } from './context/StateContext';
import { RootSiblingParent } from 'react-native-root-siblings';
import MyTabs from './routes/MyTabs';
import Stacks from './routes/Stacks';
import { FavoriteContext } from './context/FavouriteContext';

setupURLPolyfill();

export default function App() {
  return (
          // <Home/>
            <FavoriteContext>
          <StateContext>
            <RootSiblingParent>  
              <NavigationContainer>
                <Stacks/>
              </NavigationContainer>
            </RootSiblingParent>
          </StateContext>
            </FavoriteContext>
      // <Search/>
      // <OnboardingContainer/>
  );
}

const styles = StyleSheet.create({
 
});
