import React from 'react';
import {Text, View} from 'react-native';
import {Button} from './button';
import ProfileImg from './profile-img';

type Props = {
  username: string;
  friends: number;
  groups: number;
  id: string;
  addFriend: (id: string) => void;
};

export default function User({
  addFriend,
  friends,
  groups,
  id,
  username,
}: Props) {
  return (
    <View className="border border-white mb-4 py-3 px-4 flex flex-row items-center justify-between rounded-xl">
      <ProfileImg />
      <View className="">
        <Text className="mb-2">{username}</Text>
        <View className="flex flex-row gap-6">
          <Text>Friends: {friends}</Text>
          <Text>Groups: {groups}</Text>
        </View>
      </View>
      <Button
        text="+"
        onPress={() => {
          addFriend(id);
        }}
      />
    </View>
  );
}
