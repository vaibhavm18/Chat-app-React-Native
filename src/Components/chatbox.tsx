import React, {RefObject, useRef} from 'react';
import {ScrollView, Text, View} from 'react-native';
import tailwind from 'twrnc';
import {message} from '../features/user/chatSlice';
import Chat from './chat';

type Props = {
  oldMessage: message[];
  newMessage: message[];
};
export default function ChatBox({newMessage, oldMessage}: Props) {
  const scrollViewRef = useRef<ScrollView>();
  return (
    <ScrollView
      ref={scrollViewRef as RefObject<ScrollView>}
      style={tailwind`flex-grow bg-black rounded-xl p-2`}
      onContentSizeChange={() => scrollViewRef?.current?.scrollToEnd()}>
      {oldMessage?.length === 0 && newMessage?.length === 0 && (
        <View>
          <Text>No messages</Text>
        </View>
      )}
      {oldMessage?.reverse().map(val => {
        return (
          <Chat
            key={val.messageId}
            message={val.chatMessage}
            date="21/02/2023"
            time="12:06 PM"
            username={val.user.username}
          />
        );
      })}
      {newMessage?.map(val => {
        return (
          <Chat
            key={val.messageId}
            message={val.chatMessage}
            date="21/02/2023"
            time="12:06 PM"
            username={val.user.username}
          />
        );
      })}
    </ScrollView>
  );
}
