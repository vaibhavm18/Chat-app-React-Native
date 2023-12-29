import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import tailwind from 'twrnc';
import {Button} from '../Components/button';
import ChatUser from '../Components/chat-user';
import CreateGroup from '../Components/create-group';

// type GroupProps = NativeStackScreenProps<RootStackParamList, "">

export default function Groups({navigation}) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handelModel = () => setIsVisible(prev => !prev);
  const changeScreen = () => {
    navigation.push('ChatRoom');
  };
  return (
    <>
      <ScrollView style={tailwind`bg-black py-4 px-3`}>
        <ChatUser username="Vaibhava " changeScreen={changeScreen} />
        <View style={tailwind`flex flex-row justify-center gap-6`}>
          <Button text="Create Group" onPress={handelModel} />
          <Button text="Join Group" />
        </View>
        <View style={tailwind`w-8 h-12`}></View>
      </ScrollView>
      <CreateGroup handelModel={handelModel} isVisible={isVisible} />
    </>
  );
}
