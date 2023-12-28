import React from 'react';
import {Text, View} from 'react-native';
import tailwind from 'twrnc';

type Props = {
  username: string;
};

export default function ChatUser({username}: Props) {
  return (
    <View
      style={tailwind`flex flex-row items-center gap-4 border border-white py-3 px-2 rounded-2xl mb-4`}>
      <View style={tailwind`w-12 h-12 bg-white rounded-full`}></View>
      <Text style={tailwind`text-lg`}>{username}</Text>
    </View>
  );
}
