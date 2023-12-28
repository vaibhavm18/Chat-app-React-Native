import React, {useState} from 'react';
import {Text, View} from 'react-native';
import tailwind from 'twrnc';
import {Button} from '../Components/button';
import {TextInput} from '../Components/text-input';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../MainStack';

type SignupProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;
export const Signup = ({navigation}: SignupProps) => {
  const [showPassword, _setShowPassword] = useState(false);
  const [error, _setError] = useState(null);

  return (
    <View
      style={tailwind`w-full flex-1 items-center justify-center bg-gray-950`}>
      {error ? (
        <View
          style={tailwind`absolute top-8 w-full bg-red-400 mx-8 max-w-sm p-4 rounded-md`}>
          <Text style={tailwind`text-gray-50 font-bold`}>
            Email addresses don't match
          </Text>
        </View>
      ) : null}
      <View style={tailwind`px-8 w-full max-w-sm flex gap-3`}>
        <Text
          style={tailwind`text-5xl font-bold mb-6 text-gray-50 text-center`}>
          Sign up
        </Text>

        <View style={tailwind`flex flex-col gap-4 mb-6`}>
          <TextInput
            placeholder="Enter email address"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput placeholder="Enter username" autoCapitalize="none" />

          <TextInput
            placeholder="Enter password"
            secureTextEntry={!showPassword}
          />

          <TextInput
            placeholder="Confirm password"
            secureTextEntry={!showPassword}
          />
        </View>
        <Button text="Sign up" variant="success" />
        <Text style={tailwind`text-center text-lg`}>
          Login here{' '}
          <Text
            style={tailwind`text-blue-400`}
            onPress={() => navigation.replace('Login')}>
            login
          </Text>{' '}
        </Text>
      </View>
    </View>
  );
};
