import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import the navigation hook
import { StatusBar } from 'expo-status-bar';

const LOGIN = () => {
  const navigation = useNavigation();  // Initialize navigation

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Email and Password Inputs */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#1E90FF"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#1E90FF"
          secureTextEntry
          style={styles.input}
        />
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>

      {/* Log In and Sign Up Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('home')}  // Navigate to Home on press
        >
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Social Media Logins */}
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Log in with Facebook</Text>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Log in with Google</Text>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png' }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <View style={styles.signupLinkContainer}>
        <Text style={styles.signupText}>Not a member? <Text style={styles.joinNowText}>Join Now</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#32CD32',
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  loginButtonText: {
    color: '#000',
    fontWeight: '600',
  },
  signupButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  signupButtonText: {
    color: '#000',
    fontWeight: '600',
  },
  socialLoginContainer: {
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',  // Center the text and icon
    marginBottom: 10,
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  socialButtonText: {
    color: '#000',
    fontWeight: '600',
    marginRight: 10,  // Adds space between text and icon
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  signupLinkContainer: {
    marginTop: 20,
  },
  signupText: {
    color: '#000',
  },
  joinNowText: {
    color: '#1E90FF',
    fontWeight: '700',
  },
});

export default LOGIN;
