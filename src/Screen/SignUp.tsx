import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import tailwind from 'twrnc';
import {Button} from '../Components/button';
import {TextInput} from '../Components/text-input';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useMutation} from '@tanstack/react-query';
import {useDispatch, useSelector} from 'react-redux';
import {RootStackParamList} from '../MainStack';
import {signup, signupType} from '../api';
import {isAuthenticated, login} from '../features/auth/authSlice';

type SignupProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export const Signup = ({navigation}: SignupProps) => {
  const dispatch = useDispatch();
  const [showPassword, _setShowPassword] = useState(false);
  const [error, _setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const isLogin = useSelector(isAuthenticated);

  const {isError, isPending, mutateAsync} = useMutation({
    mutationKey: ['signup'],
    mutationFn: async (data: signupType) => await signup(data),
    onSuccess(data, variables, context) {
      dispatch(
        login({
          _id: data?.data?._id,
          isLogin: true,
          token: data.data.token,
          username: data.data.username,
        }),
      );
    },
    onError(error, variables, context) {
      console.log('error', error, isError);
    },
  });

  useEffect(() => {
    if (isLogin) {
      navigation.push('Home');
    }
  }, [isLogin]);

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
            onChangeText={(text: string) => {
              setEmail(text);
            }}
            value={email}
          />
          <TextInput
            placeholder="Enter username"
            onChangeText={(text: string) => {
              setUsername(text);
            }}
            autoCapitalize="none"
            value={username}
          />
          <TextInput
            placeholder="Enter password"
            secureTextEntry={!showPassword}
            onChangeText={(text: string) => {
              setPassword(text);
            }}
            value={password}
          />

          <TextInput
            placeholder="Confirm password"
            secureTextEntry={!showPassword}
            value={confirmPassword}
            onChangeText={(text: string) => {
              setConfirmPassword(text);
            }}
          />
        </View>
        {isPending ? (
          <Button text="Loading..." />
        ) : (
          <>
            <Button
              text="Sign up"
              variant="success"
              onPress={() => {
                if (password === confirmPassword) {
                  mutateAsync({
                    email,
                    password,
                    username,
                  });
                }
              }}
            />
            <Text style={tailwind`text-center text-lg`}>
              Login here{' '}
              <Text
                style={tailwind`text-blue-400`}
                onPress={() => navigation.replace('Login')}>
                login
              </Text>{' '}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};
