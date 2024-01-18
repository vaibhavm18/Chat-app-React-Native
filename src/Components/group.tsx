import React from 'react';
import {Text, View} from 'react-native';
import {Button} from './button';
import ProfileImg from './profile-img';

type Props = {
  id: string;
  groupname: string;
  admin: string;
  users: number;
  requestAddGroup: (
    groupname: string,
    id: string,
    admin: string,
    users: number,
  ) => void;
};

export default function Group({
  id,
  admin,
  groupname,
  users,
  requestAddGroup,
}: Props) {
  return (
    <View className="border border-white mb-4 py-3 px-4 flex flex-row items-center justify-between rounded-xl">
      <View className="flex flex-row items-center">
        <ProfileImg />
        <View className="ml-3">
          <Text className="mb-2">{groupname}</Text>
          <View className="flex flex-row gap-6">
            <Text>{admin.slice(0, 13) + '...'}</Text>
            <Text>Users: {users}</Text>
          </View>
        </View>
      </View>
      <Button
        text="+"
        onPress={() => {
          requestAddGroup(groupname, id, admin, users);
        }}
      />
    </View>
  );
}
