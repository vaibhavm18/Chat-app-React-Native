import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {CommonActions} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import tailwind from 'twrnc';
import {Button} from '../Components/button';
import ChatUser from '../Components/chat-user';
import CreateGroup from '../Components/create-group';
import {RootState} from '../app/store';
import {TabType} from './Home';

export type GroupsProps = MaterialTopTabScreenProps<TabType, 'groups'>;

export default function Groups({navigation}: GroupsProps) {
  const groups = useSelector((state: RootState) => state.group.grops);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handelModel = () => setIsVisible(prev => !prev);

  const changeScreen = (id: string, username: string) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'GroupChat',
        params: {id, username},
      }),
    );
  };

  const groupList = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'GroupList',
      }),
    );
  };

  return (
    <>
      <ScrollView style={tailwind`bg-[#1e2030] py-4 px-3`}>
        {groups.map(val => {
          return (
            <ChatUser
              changeScreen={changeScreen}
              id={val.id}
              username={val.groupname}
              key={val.id}
            />
          );
        })}
        <ChatUser username="Vaibhava " id="123" changeScreen={changeScreen} />
        <ChatUser username="Vaibhava " id="123" changeScreen={changeScreen} />
        <View style={tailwind`flex flex-row justify-center gap-6`}>
          <Button text="Create Group" onPress={handelModel} />
          <Button text="Join Group" onPress={groupList} />
        </View>
        <View style={tailwind`w-8 h-12`}></View>
      </ScrollView>
      <CreateGroup handelModel={handelModel} isVisible={isVisible} />
    </>
  );
}
