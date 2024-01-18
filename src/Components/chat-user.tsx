import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import tailwind from 'twrnc';
import ProfileImg from './profile-img';

type Props = {
  username: string;
  changeScreen: (id: string, username: string) => void;
  id: string;
};

export default function ChatUser({username, changeScreen, id}: Props) {
  return (
    <TouchableHighlight
      onPress={() => {
        changeScreen(id, username);
      }}>
      <View
        style={tailwind`flex flex-row bg-[#222436] items-center gap-4 border border-white py-3 px-2 rounded-2xl mb-4`}>
        <ProfileImg />
        <Text style={tailwind`text-lg`}>{username}</Text>
      </View>
    </TouchableHighlight>
  );
}
