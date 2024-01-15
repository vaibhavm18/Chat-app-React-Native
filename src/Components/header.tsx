import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import tailwind from 'twrnc';
import {RootStackParamList} from '../MainStack';
import {logout} from '../features/auth/authSlice';
import {Button} from './button';

type Props = {
  handelNotification: () => void;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home', undefined>;
};
export default function Header({handelNotification, navigation}: Props) {
  const dispatch = useDispatch();
  const onpress = () => {
    dispatch(logout());
  };
  return (
    <View
      style={tailwind`py-3 px-4 bg-[#1e2030] flex flex-row justify-between  items-center`}>
      <Text style={tailwind`text-2xl`}>Social</Text>
      <View style={tailwind`flex flex-row gap-4`}>
        <Button text="Notification" onPress={handelNotification} />
        <Button text="Logout" onPress={onpress} />
      </View>
    </View>
  );
}
