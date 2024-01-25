import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import tailwind from 'twrnc';
import {Button} from '../Components/button';
import {notification} from '../api';
import {RootState} from '../app/store';
import {removeNotification} from '../features/notification/notificationSlice';

export default function Notification() {
  const dispatch = useDispatch();
  const {data, isError, isFetched, isLoading} = useQuery({
    queryKey: ['notification'],
    queryFn: async () => await notification(),
  });

  const notifications = useSelector(
    (state: RootState) => state.notification.notifications,
  );

  function deleteNotification(id: string) {
    dispatch(removeNotification({id}));
  }

  return (
    <ScrollView style={tailwind`bg-[#1e2030] text-[#BCD1EF] flex px-4 pt-4`}>
      {notifications.map(val => (
        <View
          key={val.id}
          style={tailwind`bg-[#222436] border border-gray-300 rounded-2xl py-4 px-2 mb-4 flex items-center gap-4`}>
          <Text>
            Accept Friend request from{' '}
            <Text style={tailwind`underline`}>@{val.username}</Text>{' '}
          </Text>
          <View style={tailwind`flex flex-row gap-7`}>
            <Button
              text="Accept"
              variant="success"
              onPress={() => {
                deleteNotification(val.id);
              }}
            />
            <Button
              text="Decline"
              variant="destructive"
              onPress={() => {
                deleteNotification(val.id);
              }}
            />
          </View>
        </View>
      ))}
      {/*Bottom padding*/}
      <View style={tailwind`py-4`}></View>
    </ScrollView>
  );
}
