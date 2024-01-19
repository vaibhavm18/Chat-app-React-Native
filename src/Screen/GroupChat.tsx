import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import tailwind from 'twrnc';
import ChatRoom from '../Components/chatroom';
import Profile from '../Components/profile';
import {RootStackParamList} from '../MainStack';

export type groupChatProps = NativeStackScreenProps<
  RootStackParamList,
  'GroupChat'
>;
export default function GroupChat({navigation, route}: groupChatProps) {
  const goBack = () => {
    navigation.pop();
  };

  const remove = (id: string) => {};

  const {id, username} = route.params;

  return (
    <View style={tailwind`bg-[#1e2030] h-full flex p-2`}>
      <Profile
        remove={remove}
        typeChat="Leave"
        goBack={goBack}
        username={username}
        id={id}
      />
      <ChatRoom username="vaibhav" />
    </View>
  );
}
