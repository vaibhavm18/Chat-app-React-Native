import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useMutation} from '@tanstack/react-query';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import tailwind from 'twrnc';
import {Button} from '../Components/button';
import {TextInput} from '../Components/text-input';
import {RootStackParamList} from '../MainStack';
import {loginCall, loginType} from '../api';
import {login} from '../features/auth/authSlice';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login = ({navigation}: LoginProps) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shouldLogin, setShouldLogin] = useState(false);

  const {data, isError, isSuccess, error, isPending, mutateAsync} = useMutation(
    {
      mutationKey: ['login'],
      mutationFn: async (data: loginType) => await loginCall(data),
      onSuccess(data, variables, context) {
        console.log('data', data.data);
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
    },
  );

  return (
    <View
      style={tailwind`flex-1 w-full items-center justify-center bg-gray-950`}>
      <View style={tailwind`px-4 w-full max-w-sm flex gap-8`}>
        <Text
          style={tailwind`text-5xl font-bold mb-6 text-gray-50 text-center`}>
          Login
        </Text>

        <View style={tailwind`flex flex-col gap-4 `}>
          <TextInput
            placeholder="Enter username"
            value={username}
            onChangeText={(text: string) => {
              setUsername(text);
              if (
                text.length >= 6 &&
                text.length <= 12 &&
                password.length >= 6 &&
                password.length <= 12
              ) {
                setShouldLogin(true);
              } else {
                setShouldLogin(false);
              }
            }}
          />
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={(text: string) => {
              setPassword(text);
              if (
                username.length > 5 &&
                username.length <= 12 &&
                text.length > 5 &&
                text.length <= 12
              ) {
                setShouldLogin(true);
              } else {
                setShouldLogin(false);
              }
            }}
          />
        </View>
        {isPending ? (
          <Button text="Loading..." className="bg-gray-600" />
        ) : (
          <>
            <Button
              text="Login"
              variant={shouldLogin ? 'success' : 'destructive'}
              onPress={() => {
                if (shouldLogin) {
                  mutateAsync({password, username});
                }
              }}
            />
            <Text style={tailwind`text-center text-lg`}>
              Create Account{' '}
              <Text
                style={tailwind`text-blue-400 `}
                onPress={() => navigation.replace('Signup')}>
                signup
              </Text>{' '}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};
