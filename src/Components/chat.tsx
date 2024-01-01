import React from 'react';
import {Text, View} from 'react-native';
import tailwind from 'twrnc';
import ProfileImg from './profile-img';

type Props = {
  username: string;
  time: string;
  message: string;
  date: string;
};

export default function Chat({message, time, date, username}: Props) {
  return (
    <View
      style={tailwind`flex flex-row gap-3 border border-white p-3 mb-3 rounded-2xl `}>
      <ProfileImg />
      <View style={tailwind`flex-shrink`}>
        <View
          style={tailwind`flex flex-row justify-between items-center w-full`}>
          <Text>{username}</Text>
          <Text>{time}</Text>
          <Text>{date}</Text>
        </View>
        <Text style={tailwind``}>{message}</Text>
      </View>
    </View>
  );
}
