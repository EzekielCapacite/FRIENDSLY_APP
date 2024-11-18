import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // For the heart icon

const songs = [
  { id: '1', title: '16', artist: 'Baby Keem', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fP-YGcSRvDiMTWUm0sY3qDjgoM5ons9pDQ&s' },
  { id: '2', title: 'Bad Habit', artist: 'Steve Lacy', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRpfAIGRvi-ZZdZqmqhFPHR9r9TuxRSmCdQ&s' },
  { id: '3', title: 'PRIDE.', artist: 'Kendrick Lamar', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYY2AEVSGEjykh6KeZqVVQcYVBPkYF_cDnQ&s' },
  { id: '4', title: 'United In Grief', artist: 'Kendrick Lamar', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2cDF-WpWhWgIQdShRsv8vUEKkcqklYvns3w&s' },
  { id: '5', title: 'N95', artist: 'Kendrick Lamar', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_le-lPJ-eCTrqHf1yjLWxIrMeRWcO0gsPTA&s' },
  { id: '6', title: 'Worldwide Steppers', artist: 'Kendrick Lamar', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_le-lPJ-eCTrqHf1yjLWxIrMeRWcO0gsPTA&s' },
  { id: '7', title: 'Die Hard', artist: 'Kendrick Lamar, Blxst, Amanda Reifer', albumArt: 'https://i1.sndcdn.com/artworks-uhAaiAOlCOE30fSM-IyOY7Q-t500x500.jpg' },
  
  // Additional popular songs
  { id: '8', title: 'As It Was', artist: 'Harry Styles', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5md5uvcBqVrQPxRnjWsydum20oHyK1Se-g&s' },
  { id: '9', title: 'Heat Waves', artist: 'Glass Animals', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_aIAOKIt8KbBFxWqjHIj1DIYYoX6vPvjIQ&s' },
  { id: '10', title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXYKIHiDAE_LJ7a7todbHJ4w-GGFFQBIrYQ&s' },
  { id: '11', title: 'Blinding Lights', artist: 'The Weeknd', albumArt: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png' },
  { id: '12', title: 'Levitating', artist: 'Dua Lipa', albumArt: 'https://i.ytimg.com/vi/TUVcZfQe-Kw/sddefault.jpg' },
];

const bookmark = () => {
  const renderSongItem = ({ item }) => (
    <View style={styles.songItem}>
      {/* Album Art */}
      <Image source={{ uri: item.albumArt }} style={styles.albumArt} />

      {/* Song Info */}
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>

      {/* Heart Icon */}
      <TouchableOpacity>
        <MaterialIcons name="favorite" size={24} color="green" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        renderItem={renderSongItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Dark background similar to the image
    padding: 10,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  albumArt: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  songTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#AAAAAA',
    fontSize: 14,
  },
});

export default bookmark;
