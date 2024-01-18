import React from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Group from '../Components/group';
import {RootState} from '../app/store';
import {removeGroupList} from '../features/group/groupListSlice';
import {addGroup} from '../features/group/groupSlice';

export default function GroupList() {
  const groups = useSelector((state: RootState) => state.groupList.grops);
  const dispatch = useDispatch();

  const requestAddGroup = (
    groupname: string,
    id: string,
    admin: string,
    users: number,
  ) => {
    dispatch(removeGroupList({groupname, id, admin, users}));
    dispatch(addGroup([{groupname, id}]));
  };

  return (
    <ScrollView className="bg-black py-4 px-2">
      {groups.map(val => {
        return (
          <Group
            admin={val.admin}
            groupname={val.groupname}
            id={val.id}
            users={val.users}
            key={val.id}
            requestAddGroup={requestAddGroup}
          />
        );
      })}
      <View className="h-20"></View>
    </ScrollView>
  );
}
