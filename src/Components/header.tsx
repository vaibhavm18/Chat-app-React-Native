import React from 'react';
import {Text, View} from 'react-native';
import tailwind from 'twrnc';
import {Button} from './button';

type Props = {
  onPress: () => void;
};
export default function Header({onPress}: Props) {
  return (
    <View
      style={tailwind`py-3 px-4 bg-red-400 flex flex-row justify-between items-center`}>
      <Text style={tailwind`text-2xl`}>Social</Text>
      <Button text="Notification" onPress={onPress} />
    </View>
  );
}
