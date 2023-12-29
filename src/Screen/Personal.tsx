import React from 'react';
import {ScrollView, View} from 'react-native';
import tailwind from 'twrnc';
import {Button} from '../Components/button';

export default function Personal() {
  return (
    <ScrollView style={tailwind`bg-black py-4 px-3`}>
      {/* <ChatUser username="Vaibhav" /> */}
      <View>
        <Button text="Add Friend" variant="default" />
      </View>
    </ScrollView>
  );
}
