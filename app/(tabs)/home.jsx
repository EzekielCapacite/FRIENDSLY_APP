import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Featuring Today Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featuring Today</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.featuredCard}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT353T0-Of-yfHZ9dP4kdkdtYdqs6bl9bGRhQ&s' }} // replace with real image
              style={styles.featuredImage}
            />
          </View>
          <View style={styles.featuredCard}>
            <Image
              source={{ uri: 'https://link-to-image.com/song2.jpg' }} // replace with real image
              style={styles.featuredImage}
            />
          </View>
        </ScrollView>
      </View>

      {/* Recently Played Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recently Played</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.recentlyPlayedCard}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT353T0-Of-yfHZ9dP4kdkdtYdqs6bl9bGRhQ&s' }} // replace with real image
              style={styles.recentlyPlayedImage}
            />
            <Text style={styles.songName}>Inside Out</Text>
          </View>
          <View style={styles.recentlyPlayedCard}>
            <Image
              source={{ uri: 'https://i.ytimg.com/vi/fS7OffmLrf0/hqdefault.jpg' }} // replace with real image
              style={styles.recentlyPlayedImage}
            />
            <Text style={styles.songName}>Young</Text>
          </View>
        </ScrollView>
      </View>

      {/* Mixes for You Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mixes for You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.mixCard}>
            <Image
              source={{ uri: 'https://i.ytimg.com/vi/QGme-DHrsYY/sddefault.jpg' }} // replace with real image
              style={styles.mixImage}
            />
            <Text style={styles.mixName}>The Chainsmokers Mix</Text>
          </View>
          <View style={styles.mixCard}>
            <Image
              source={{ uri: 'https://i.ytimg.com/vi/iDuNcE44ICY/maxresdefault.jpg' }} // replace with real image
              style={styles.mixImage}
            />
            <Text style={styles.mixName}>Pop Hits Mix</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  featuredCard: {
    marginRight: 15,
  },
  featuredImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  recentlyPlayedCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  recentlyPlayedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  songName: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  mixCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  mixImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  mixName: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
});

export default HomeScreen;
