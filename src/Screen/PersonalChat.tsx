import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {nanoid} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import tailwind from 'twrnc';
import ChatRoom from '../Components/chatroom';
import Profile from '../Components/profile';
import {RootStackParamList} from '../MainStack';
import {RootState} from '../app/store';
import {addNewChat} from '../features/user/chatSlice';
import {removeUser} from '../features/user/userSlice';

export type personalChatProps = NativeStackScreenProps<
  RootStackParamList,
  'PersonalChat'
>;

export default function PersonalChat({navigation, route}: personalChatProps) {
  const {id, username} = route.params;
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const goBack = () => {
    navigation.pop();
  };

  const remove = (id: string) => {
    dispatch(removeUser({id}));
  };

  const newChats = useSelector(
    (state: RootState) => state.personalChats.newChats[id],
  );
  const oldChats = useSelector(
    (state: RootState) => state.personalChats.oldChats[id],
  );

  const handelInput = (text: string) => {
    setMessage(text);
  };

  const sendMessage = (userId: string) => {
    if (message.trim() === '') {
      return;
    }

    dispatch(
      addNewChat({
        chatMessage: message,
        date: '',
        id: userId,
        user: {id: userId, username: 'vaibhav'},
        messageId: nanoid(),
      }),
    );

    setMessage('');
  };

  return (
    <View style={tailwind`bg-[#1e2030] h-full flex p-2`}>
      <Profile
        remove={remove}
        typeChat="Unfriend"
        goBack={goBack}
        username={username}
        id={id}
      />
      <ChatRoom
        id={id}
        handelInput={handelInput}
        sendMessage={sendMessage}
        message={message}
        newMessage={newChats}
        oldMessage={oldChats}
      />
    </View>
  );
}
