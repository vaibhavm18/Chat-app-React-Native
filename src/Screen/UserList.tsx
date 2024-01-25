import React from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import User from '../Components/user';
import {RootState} from '../app/store';
import {removeListUser} from '../features/user/userListSlice';
import {addUsers} from '../features/user/userSlice';

export default function UserList() {
  const users = useSelector((state: RootState) => state.userList.users);
  const dispatch = useDispatch();

  const addFriend = (id: string) => {
    dispatch(removeListUser({id}));
    dispatch(addUsers([{id, username: 'vaibhav' + id}]));
  };

  return (
    <ScrollView className="bg-black py-4 px-2">
      {users.map(val => (
        <User
          friends={val.friends}
          groups={val.groups}
          id={val.id}
          username={val.username}
          addFriend={addFriend}
          key={val.id}
        />
      ))}
      <View className="h-16"></View>
    </ScrollView>
  );
}
