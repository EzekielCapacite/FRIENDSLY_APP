import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const submit = () => {
    // Clear any previous error
    setError('');

    if (!form.email || !form.password) {
      setError('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate a sign-in request
    setTimeout(() => {
      setIsSubmitting(false); // Simulate response
      // Handle successful login (redirect, etc.)
    }, 2000);
  };

  return (
    <SafeAreaView className="h-full" style={{ backgroundColor: '#DAFFFB' }}>
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4 my-6">
          {/* Logo */}
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[300px] h-[50px]"
          />

          {/* Title */}
          <Text className="text-2xl text-black mt-10 font-u_regular">
            Log in to LibConnect
          </Text>

          {/* Error Message */}
          {error && (
            <Text className="text-red-500 text-sm mt-2">{error}</Text>
          )}

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
            secureTextEntry
          />

          {/* Sign In Button */}
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />

          {/* Signup Link */}
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-700 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/(auth)/sign-up"
              className="text-lg font-u_bold text-orange-600"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
