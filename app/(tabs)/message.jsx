import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const MessageItem = ({ message }) => {
  return (
    <View style={styles.messageContainer}>
      <Image source={{ uri: message.avatar }} style={styles.avatar} />
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
};

const Message = () => {
  const messages = [
    {
      id: '1',
      text: 'Can I order???',
      avatar: 'https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw', // Replace with your avatar image URL
    },
    {
      id: '2',
      text: 'Is this available?',
      avatar: 'https://d22e6o9mp4t2lx.cloudfront.net/cms/pfp2_11cfcec183.webp',
    },
    {
      id: '3',
      text: 'Need fried chicken',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrffnWuU7HIT5xGmVvPTcxdPwJmGiAvWTeVA&s',
    },
    {
      id: '4',
      text: 'How much for delivery?',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg', // Example avatar
    },
    {
      id: '5',
      text: 'Can I pay with card?',
      avatar: 'https://randomuser.me/api/portraits/women/36.jpg', // Example avatar
    },
    {
      id: '6',
      text: 'What time do you close?',
      avatar: 'https://randomuser.me/api/portraits/men/48.jpg', // Example avatar
    },
    {
      id: '7',
      text: 'Do you have vegetarian options?',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg', // Example avatar
    },
    {
      id: '8',
      text: 'Can I customize my order?',
      avatar: 'https://randomuser.me/api/portraits/men/30.jpg', // Example avatar
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageItem message={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ADD8E6',
  },
  messageContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Message;
