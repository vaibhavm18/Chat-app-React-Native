import React from 'react';
import {View, Text} from 'react-native';
import tailwind from 'twrnc';
import {TextInput} from '../Components/text-input';
import {Button} from '../Components/button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../MainStack';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login = ({navigation}: LoginProps) => {
  return (
    <View
      style={tailwind`flex-1 w-full items-center justify-center bg-gray-950`}>
      <View style={tailwind`px-4 w-full max-w-sm flex gap-8`}>
        <Text
          style={tailwind`text-5xl font-bold mb-6 text-gray-50 text-center`}>
          Login
        </Text>

        <View style={tailwind`flex flex-col gap-4 `}>
          <TextInput placeholder="Enter username" />
          <TextInput placeholder="Enter password" />
        </View>
        <Button text="Login" variant="success" />
        <Text style={tailwind`text-center text-lg`}>
          Create Account{' '}
          <Text
            style={tailwind`text-blue-400 `}
            onPress={() => navigation.replace('Signup')}>
            signup
          </Text>{' '}
        </Text>
      </View>
    </View>
  );
};
