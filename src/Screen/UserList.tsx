import React from 'react';
import {ScrollView, View} from 'react-native';
import User from '../Components/user';

export default function UserList() {
  return (
    <ScrollView className="bg-black py-4 px-2">
      <User />
      <User />
      <User />
      <User />
      <View className="h-16"></View>
    </ScrollView>
  );
}
