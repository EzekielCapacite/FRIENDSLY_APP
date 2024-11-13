import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg' }} // Replace with your actual image URL
          style={styles.profileImage}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My orders</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My payment cards</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My addresses</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Promocodes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>FAQ</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    backgroundColor: '#ADD8E6',  // Light gray background
  },
  imageContainer: {
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,  // Circular image
    borderWidth: 2,
    borderColor: '#FFF',
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',  // White background for buttons
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',  // Shadow for a card-like effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,  // For Android shadow
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default ProfileScreen;
