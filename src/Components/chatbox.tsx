import React, {RefObject, useRef} from 'react';
import {ScrollView} from 'react-native';
import tailwind from 'twrnc';
import Chat from './chat';

type Props = {
  messages: string[];
};
export default function ChatBox({messages}: Props) {
  const scrollViewRef = useRef<ScrollView>();
  return (
    <ScrollView
      ref={scrollViewRef as RefObject<ScrollView>}
      style={tailwind`flex-grow bg-black rounded-xl p-2`}
      onContentSizeChange={() => scrollViewRef?.current?.scrollToEnd()}>
      {messages.map((val, i) => {
        return (
          <Chat
            key={i}
            message={val}
            date="21/02/2023"
            time="12:06 PM"
            username="Vaibhav"
          />
        );
      })}
    </ScrollView>
  );
}
