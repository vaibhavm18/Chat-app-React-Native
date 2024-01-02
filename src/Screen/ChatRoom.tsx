import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View} from 'react-native';
import tailwind from 'twrnc';
import ChatInput from '../Components/chat-input';
import ChatBox from '../Components/chatbox';
import Profile from '../Components/profile';
import {RootStackParamList} from '../MainStack';

export type ChatProps = NativeStackScreenProps<RootStackParamList, 'ChatRoom'>;

export default function ChatRoom({route}: ChatProps) {
  const username = 'Vaibhav';
  const {id, typeOfChat} = route.params;
  const [message, setMessage] = useState('Hello, God!');

  const handelInput = (text: string) => {
    setMessage(text);
  };

  return (
    <View style={tailwind`bg-black h-full  flex p-2`}>
      <Profile
        typeChat={typeOfChat === 'Group' ? 'Leave' : 'Unfriend'}
        username={username}
      />
      <ChatBox message={message} />
      <ChatInput handelInput={handelInput} message={message} />
    </View>
  );
}
