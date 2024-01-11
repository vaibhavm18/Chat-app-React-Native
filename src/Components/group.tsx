import React from 'react';
import {Text, View} from 'react-native';
import {Button} from './button';
import ProfileImg from './profile-img';

export default function Group() {
  return (
    <View className="border border-white mb-4 py-3 px-4 flex flex-row items-center justify-between rounded-xl">
      <ProfileImg />
      <View className="">
        <Text className="mb-2">Group Name</Text>
        <View className="flex flex-row gap-6">
          <Text>{'usernameasdfks'.slice(0, 13) + '...'}</Text>
          <Text>Users: {100}</Text>
        </View>
      </View>
      <Button text="+" />
    </View>
  );
}
