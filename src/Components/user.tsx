import React from 'react';
import {Text, View} from 'react-native';
import {Button} from './button';
import ProfileImg from './profile-img';

export default function User() {
  return (
    <View className="border border-white mb-4 py-3 px-4 flex flex-row items-center justify-between rounded-xl">
      <ProfileImg />
      <View className="">
        <Text className="mb-2">Username</Text>
        <View className="flex flex-row gap-6">
          <Text>Friends: {100}</Text>
          <Text>Groups: {100}</Text>
        </View>
      </View>
      <Button text="+" />
    </View>
  );
}
