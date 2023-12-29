import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import tailwind from 'twrnc';
import ProfileImg from './profile-img';

type Props = {
  username: string;
  changeScreen: () => void;
};

export default function ChatUser({username, changeScreen}: Props) {
  return (
    <TouchableHighlight onPress={changeScreen}>
      <View
        style={tailwind`flex flex-row items-center gap-4 border border-white py-3 px-2 rounded-2xl mb-4`}>
        <ProfileImg />
        <Text style={tailwind`text-lg`}>{username}</Text>
      </View>
    </TouchableHighlight>
  );
}
