import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ProfilePage} from './Pages/Profile/ProfilePage';
import {HomePage, DetailPage} from './Pages/Home';

const HomeMainStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeMainStack.Navigator navi headerMode="none">
      <HomeMainStack.Screen name="Home" component={HomePage} />
      <HomeMainStack.Screen name="Detail" component={DetailPage} />
    </HomeMainStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Profile" component={ProfilePage} />
    </ProfileStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
