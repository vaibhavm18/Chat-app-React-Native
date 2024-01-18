import React from 'react';
import Header from '../Components/header';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {RootStackParamList} from '../MainStack';
import Groups from './Groups';
import Personal from './Personal';

export type TabType = {
  personal: undefined;
  groups: undefined;
};

export const Tab = createMaterialTopTabNavigator<TabType>();

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const dispatch = useDispatch();

  const handelNotification = () => {
    navigation.push('Notification');
  };

  return (
    <>
      <Header handelNotification={handelNotification} navigation={navigation} />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            color: 'white',
          },
          tabBarStyle: {backgroundColor: 'black'},
        }}>
        <Tab.Screen name="personal" component={Personal} />
        <Tab.Screen name="groups" component={Groups} />
      </Tab.Navigator>
    </>
  );
}
