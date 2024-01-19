import React from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../Components/button';
import User from '../Components/user';
import {RootState} from '../app/store';
import {addListUsers, removeListUser} from '../features/user/userListSlice';
import {addUsers} from '../features/user/userSlice';

const user = [1, 2, 3, 4, 5];
export default function UserList() {
  const users = useSelector((state: RootState) => state.userList.users);
  const dispatch = useDispatch();

  function populate() {
    dispatch(
      addListUsers(
        user.map(val => {
          const num = val * Math.ceil(Math.random() * 100);
          return {
            id: `id${num}`,
            friends: num * 10,
            groups: num * 20,
            username: `group${num}`,
          };
        }),
      ),
    );
  }
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
      <Button text="populate" onPress={populate} />
      <View className="h-16"></View>
    </ScrollView>
  );
}
