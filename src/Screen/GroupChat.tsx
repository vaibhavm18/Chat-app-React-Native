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
import {addNewChat} from '../features/group/chatSlice';
import {removeGroup} from '../features/group/groupSlice';

export type groupChatProps = NativeStackScreenProps<
  RootStackParamList,
  'GroupChat'
>;
export default function GroupChat({navigation, route}: groupChatProps) {
  const dispatch = useDispatch();
  const {id, groupname} = route.params;
  const [message, setMessage] = useState('');

  const username = useSelector((state: RootState) => state.auth.username);
  const userId = useSelector((state: RootState) => state.auth._id);
  const oldChats = useSelector(
    (state: RootState) => state.groupChats.oldChats[id],
  );
  const newChats = useSelector(
    (state: RootState) => state.groupChats.newChats[id],
  );

  const goBack = () => {
    navigation.pop();
  };

  const remove = (id: string) => {
    dispatch(removeGroup({id}));
  };

  const handelInput = (text: string) => {
    setMessage(text);
  };

  const sendMessage = () => {
    if (message.trim() === '') {
      return;
    }

    if (!username || !userId) {
      return;
    }

    dispatch(
      addNewChat({
        chatMessage: message,
        date: '',
        id,
        user: {id: userId, username: username},
        messageId: nanoid(),
      }),
    );

    setMessage('');
  };

  return (
    <View style={tailwind`bg-[#1e2030] h-full flex p-2`}>
      <Profile
        remove={remove}
        typeChat="Leave"
        goBack={goBack}
        username={groupname}
        id={id}
      />
      <ChatRoom
        handelInput={handelInput}
        message={message}
        sendMessage={sendMessage}
        oldMessage={oldChats}
        newMessage={newChats}
        id={id}
      />
    </View>
  );
}
