import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    // Handle form submission (e.g., validation, API call)
    setTimeout(() => {
      setIsSubmitting(false); // Simulate request response
    }, 2000);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DAFFFB' }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1, // Ensures the ScrollView contents can scroll beyond the screen height
          justifyContent: 'center', // Centers content when not scrollable
          paddingHorizontal: 16, // Adds horizontal padding
        }}
        showsVerticalScrollIndicator={false} // Optionally hide the scroll indicator
      >
        <View style={{ alignItems: 'center' }}>
          {/* Logo */}
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: 300, height: 84, marginTop: 10 }}
          />

          {/* Title */}
          <Text
            style={{
              fontSize: 24,
              color: '#000',
              marginTop: 10,
              fontFamily: 'u_bold',
              textAlign: 'center',
            }}
          >
            Sign up to Friendsly
          </Text>

          {/* Username Field */}
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />

          {/* Email Field */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          {/* Password Field */}
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          {/* Sign Up Button */}
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />

          {/* Login Link */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#555',
                fontFamily: 'pregular',
              }}
            >
              Already have an account?
            </Text>
            <Link
              href="/(tabs)/profile"
              style={{
                fontSize: 16,
                fontFamily: 'u_bold',
                color: '#FF6600',
                marginLeft: 5,
              }}
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
