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

const Stack = createStackNavigator()
const HomeStack=()=>{
  return(
    <Stack.Navigator >
      <Stack.Screen 
        name='HomeScreen'  
        component={Home}
        options={{
          headerShown:false
        }} 
      />
      <Stack.Screen 
        name='Details'  
        component={ProductDetails}
        options={({ route }) => (
          {header:({navigation})=>(
            <SafeAreaView style={{backgroundColor:'#F7F6F4' ,paddingTop: StatusBar.currentHeight || 0,marginHorizontal:16}}>
              <ProductHeader route={route}  navigation={navigation}/>
              </SafeAreaView>)
        })}
      />
      <Stack.Screen 
        name='Cart'  
        component={Cart}

      />
      <Stack.Screen 
        name='Search'  
        component={Search}
        
        
      />
    </Stack.Navigator>
  )
}
export default HomeStack