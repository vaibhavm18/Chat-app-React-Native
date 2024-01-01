import React from 'react';
import {Text, View} from 'react-native';
import tailwind from 'twrnc';
import {Button} from './button';
import ProfileImg from './profile-img';

export default function Profile() {
  return (
    <>
      <View
        style={tailwind`flex flex-row items-center justify-between px-3 py-2`}>
        <Button text="Back" />
        <View style={tailwind`flex flex-row items-center gap-3`}>
          <ProfileImg />
          <Text>USername</Text>
        </View>
        <Button text="Leave" variant="destructive" />
      </View>
    </>
  );
}
