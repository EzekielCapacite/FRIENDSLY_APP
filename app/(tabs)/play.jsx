import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You can use other icon libraries too

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      {/* Album Art */}
      <View style={styles.artContainer}>
        <Image
          style={styles.albumArt}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT353T0-Of-yfHZ9dP4kdkdtYdqs6bl9bGRhQ&s' }} // Replace with your image
        />
      </View>

      {/* Song Details */}
      <Text style={styles.songTitle}>Inside Out</Text>
      <Text style={styles.artistName}>The Chainsmokers ft. Charlee</Text>
      
      {/* Lyrics Snippet */}
      <Text style={styles.lyrics}>Let me see the dark sides as well as the bright</Text>

      {/* Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <FontAwesome name="step-backward" size={32} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="play" size={32} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="step-forward" size={32} color="white" />
        </TouchableOpacity>
      </View>

      {/* Playback Progress */}
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressTime}>0:25</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.totalTime}>3:15</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  artContainer: {
    marginBottom: 20,
  },
  albumArt: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  artistName: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  lyrics: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    marginBottom: 30,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: 'gray',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  progressFill: {
    width: '20%', // Simulate progress
    height: '100%',
    backgroundColor: 'white',
  },
  progressTime: {
    color: 'white',
  },
  totalTime: {
    color: 'white',
  },
});

export default PlayScreen;
