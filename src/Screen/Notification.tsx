import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import tailwind from 'twrnc';
import {Button} from '../Components/button';

export default function Notification() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const name = 'vaibhav';
  // const nums = [1, 2, 4];
  return (
    <ScrollView style={tailwind`bg-black text-white flex px-4 pt-4`}>
      {nums.map(val => (
        <View
          key={val}
          style={tailwind`border border-gray-300 rounded-2xl py-4 px-2 mb-4 flex items-center gap-4`}>
          <Text>
            Accept Friend request from{' '}
            <Text style={tailwind`underline`}>@{name}</Text>{' '}
          </Text>
          <View style={tailwind`flex flex-row gap-7`}>
            <Button text="Accept" variant="success" />
            <Button text="Decline" variant="destructive" />
          </View>
        </View>
      ))}
      {/*Bottom padding*/}
      <View style={tailwind`py-4`}></View>
    </ScrollView>
  );
}
