import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({icon, color, name, focused}) =>{
  return(
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        
      />
    </View>
  )

}

const TabLayout = () => {
  return (
   <>
    <Tabs>


    <Tabs.Screen
        name="login"
        options={{
          title:'Login',
          headerShown:false,
          tabBarIcon:({color,focused})=>(
           <TabIcon
            icon={icons.login}
            color={color}
            name="Login"
            focused={focused}
           />
          )
        }}
      />



      <Tabs.Screen
        name="home"
        options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({color,focused})=>(
           <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
           />
          )
        }}
      />

    <Tabs.Screen
        name="orders"
        options={{
          title:'orders',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.bookmark}
            color={color}
            name="orders"
            focused={focused}
           />
          )
        }}
      />

<Tabs.Screen
        name="message"
        options={{
          title:'message',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.message}
            color={color}
            name="message"
            focused={focused}
           />
          )
        }}
      />

<Tabs.Screen
        name="profile"
        options={{
          title:'profile',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.profile}
            color={color}
            name="profile"
            focused={focused}
           />
          )
        }}
      />




    </Tabs>
   </>
  )
}

export default TabLayout