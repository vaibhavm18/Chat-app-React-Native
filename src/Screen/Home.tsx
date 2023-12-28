import React from 'react';
import Header from '../Components/header';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../MainStack';
import Groups from './Groups';
import Personal from './Personal';

type TabType = {
  personal: undefined;
  groups: undefined;
};
const Tab = createMaterialTopTabNavigator<TabType>();

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const onPress = () => {
    navigation.push('Notification');
  };
  return (
    <>
      <Header onPress={onPress} />
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
