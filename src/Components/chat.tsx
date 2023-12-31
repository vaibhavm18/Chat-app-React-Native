import React from 'react';
import {ScrollView} from 'react-native';
import tailwind from 'twrnc';

export default function ChatBox() {
  return (
    <ScrollView style={tailwind`flex-grow border border-red-500`}></ScrollView>
  );
}
