import React from 'react';
import {ScrollView, View} from 'react-native';
import Group from '../Components/group';

export default function GroupList() {
  return (
    <ScrollView className="bg-black py-4 px-2">
      <Group />
      <Group />
      <Group />
      <Group />
      <Group />
      <Group />
      <Group />
      <Group />
      <View className="h-20"></View>
    </ScrollView>
  );
}
