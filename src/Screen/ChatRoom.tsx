import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View} from 'react-native';
import {GestureResponderEvent} from 'react-native-modal';
import tailwind from 'twrnc';
import ChatInput from '../Components/chat-input';
import ChatBox from '../Components/chatbox';
import Profile from '../Components/profile';
import {RootStackParamList} from '../MainStack';

export type ChatProps = NativeStackScreenProps<RootStackParamList, 'ChatRoom'>;

export default function ChatRoom({route, navigation}: ChatProps) {
  const username = 'Vaibhav';
  const {id, typeOfChat} = route.params;
  const [messages, setMessages] = useState(['Hello, God!']);
  const [message, setMessage] = useState('');

  const sendMessage = (event: GestureResponderEvent) => {
    if (message.trim() === '') {
      return;
    }
    setMessages(prev => [...prev, message]);
    setMessage('');
  };

  const handelInput = (text: string) => {
    setMessage(text);
  };

  const goBack = () => {
    navigation.pop();
  };

  return (
    <View style={tailwind`bg-[#1e2030] h-full flex p-2`}>
      <Profile
        goBack={goBack}
        typeChat={typeOfChat === 'Group' ? 'Leave' : 'Unfriend'}
        username={username}
      />
      <ChatBox messages={messages} />
      <ChatInput
        handelInput={handelInput}
        message={message}
        submitText={sendMessage}
      />
    </View>
  );
}
