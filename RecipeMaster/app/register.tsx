import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter, Stack } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    username: '',
    password: '',
    repeatPassword: '',
  });

  const handleRegister = () => {
    // Implement actual registration logic here
    console.log('Register with:', formData);
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Stack.Screen options={{ title: 'Create Account', headerShown: true }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Join RecipeMaster</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="John"
            value={formData.name}
            onChangeText={(text) => setFormData({...formData, name: text})}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Doe"
            value={formData.lastname}
            onChangeText={(text) => setFormData({...formData, lastname: text})}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="johndoe123"
            value={formData.username}
            onChangeText={(text) => setFormData({...formData, username: text})}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Min 8 characters"
            value={formData.password}
            onChangeText={(text) => setFormData({...formData, password: text})}
            secureTextEntry
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Repeat Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            value={formData.repeatPassword}
            onChangeText={(text) => setFormData({...formData, repeatPassword: text})}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 30,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0a7ea4',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
