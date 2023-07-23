import { createStackNavigator } from '@react-navigation/stack';

import {SafeAreaView} from 'react-native'
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Search from '../screens/Search';
import ProductHeader from '../compoents/ProductHeader';
import { globalStyles } from '../global';
import { StatusBar } from 'react-native';
import Cart from '../screens/Cart';
import OnboardingContainer from '../screens/Onboarding/OnboardingContainer ';
import MyTabs from './MyTabs';

const Stack = createStackNavigator()
const Stacks=()=>{
  return(
    <Stack.Navigator >
      <Stack.Screen 
        name='Onboarding'  
        component={OnboardingContainer}
        options={{
          headerShown:false
        }} 
      />
      <Stack.Screen 
        name='Mytabs'  
        component={MyTabs}
        options={{
          headerShown:false
        }} 
      />
    </Stack.Navigator>
  )
}
export default Stacks