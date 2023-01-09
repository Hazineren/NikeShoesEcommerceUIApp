import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import Home from './src/screens/Home';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {icons, COLORS, FONTS, SIZES} from './constants'

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:'transparent',
  }
}

const Stack = createStackNavigator();

const App=()=>{
  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{title:'SHOE SELECTOR',
          headerTitleAlign:'center', 
          headerTintColor:COLORS.lightGray,
          headerTitleStyle:{
            ...FONTS.navTitle
          }, headerLeft:({onPress})=>(
            <TouchableOpacity style={{marginLeft:SIZES.padding}} onPress={onPress}>
              <Image source={icons.menu} resizeMode='contain'
                style={{width:25,height:25}}></Image>
            </TouchableOpacity>
          ),headerRight:()=>(
            <TouchableOpacity style={{marginRight:SIZES.padding}} onPress={()=>console.log('Header right onPressed')}>
              <Image source={icons.search} resizeMode='contain' style={{width:30,height:30}}></Image>
            </TouchableOpacity>
          )}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ()=>{
  return <App/>
}