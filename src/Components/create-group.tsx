import React from 'react';
import {Text, View} from 'react-native';
import Model from 'react-native-modal';
import tailwind from 'twrnc';
import {Button} from './button';
import {TextInput} from './text-input';

type Props = {
  isVisible: boolean;
  handelModel: () => void;
};
export default function CreateGroup({handelModel, isVisible}: Props) {
  return (
    <Model isVisible={isVisible}>
      <View
        style={tailwind`flex gap-6 bg-black border  border-white rounded-2xl py-4 px-3`}>
        <View>
          <Text style={tailwind`my-3`}>Group Name: </Text>
          <TextInput style={tailwind`text-black`} />
        </View>
        <View>
          <Text style={tailwind`my-3`}>Category: </Text>
          <TextInput style={tailwind`text-black`} />
        </View>
        <View style={tailwind`flex flex-row justify-center gap-8`}>
          <Button text="Create" variant="success" onPress={handelModel} />
          <Button text="Close" variant="destructive" onPress={handelModel} />
        </View>
      </View>
    </Model>
  );
}
