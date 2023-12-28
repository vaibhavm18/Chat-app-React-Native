import React from 'react';
import {ScrollView, View} from 'react-native';
import tailwind from 'twrnc';
import {Button} from '../Components/button';
import ChatUser from '../Components/chat-user';

export default function Groups() {
  return (
    <ScrollView style={tailwind`bg-black py-4 px-3`}>
      <ChatUser username="Vaibhav" />
      <ChatUser username="Vaibhav" />
      <ChatUser username="Vaibhav" />
      <ChatUser username="Vaibhav" />
      <ChatUser username="Vaibhav" />
      <View style={tailwind`flex flex-row justify-center gap-6`}>
        <Button text="Create Group" />
        <Button text="Join Group" />
      </View>

      <View style={tailwind`w-8 h-12`}></View>
    </ScrollView>
  );
}
