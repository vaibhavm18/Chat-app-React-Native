import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import tailwind from 'twrnc';
import ChatRoom from '../Components/chatroom';
import Profile from '../Components/profile';
import {RootStackParamList} from '../MainStack';
import {removeUser} from '../features/user/userSlice';

export type personalChatProps = NativeStackScreenProps<
  RootStackParamList,
  'PersonalChat'
>;

export default function PersonalChat({navigation, route}: personalChatProps) {
  const dispatch = useDispatch();
  const goBack = () => {
    navigation.pop();
  };

  const remove = (id: string) => {
    dispatch(removeUser({id}));
  };

  const {id, username} = route.params;
  return (
    <View style={tailwind`bg-[#1e2030] h-full flex p-2`}>
      <Profile
        remove={remove}
        typeChat="Unfriend"
        goBack={goBack}
        username={username}
        id={id}
      />
      <ChatRoom username="vaibhav" />
    </View>
  );
}
