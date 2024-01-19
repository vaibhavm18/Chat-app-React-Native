import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import tailwind from 'twrnc';
import {Button} from './button';
import ProfileImg from './profile-img';

type Props = {
  username: string;
  typeChat: 'Unfriend' | 'Leave';
  goBack: () => void;
  remove: (id: string) => void;
  id: string;
};

export default function Profile({
  typeChat,
  remove,
  username,
  goBack,
  id,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const onPress = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <>
      <View
        style={tailwind`flex flex-row items-center justify-between px-3 py-2`}>
        <View style={tailwind`flex flex-row items-center gap-3`}>
          <Button text="Back" onPress={goBack} />
          <View style={tailwind`flex flex-row gap-2 items-center`}>
            <ProfileImg />
            <Text>{username}</Text>
          </View>
        </View>
        <Button text={typeChat} variant="destructive" onPress={onPress} />
      </View>
      <Modal isVisible={isVisible}>
        <View style={tailwind`border border-white py-2 px-4`}>
          <Text style={tailwind`text-xl text-center mb-4`}>Are you sure?</Text>
          <View style={tailwind`flex flex-row justify-center gap-4`}>
            <Button
              text={typeChat}
              variant="destructive"
              onPress={async () => {
                remove(id);
                goBack();
              }}
            />
            <Button text="Close" variant="success" onPress={onPress} />
          </View>
        </View>
      </Modal>
    </>
  );
}
