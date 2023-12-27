import {View, Text} from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import {Button} from './button';

type Props = {
  onPress: () => void;
};
export default function Header({onPress}: Props) {
  return (
    <View style={tailwind`py-2 px-4 bg-red-400`}>
      <Text style={tailwind``}>header</Text>
      <Button text="Click Me" onPress={onPress} />
    </View>
  );
}
