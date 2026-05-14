import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter, Stack } from 'expo-router';

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.overlay}>
        <Text style={styles.logo}>RecipeMaster</Text>
        <Text style={styles.tagline}>Perfect recipes for you</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.primaryButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push('/register')}
          >
            <Text style={styles.secondaryButtonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.guestButton}
            onPress={() => router.replace('/(tabs)')}
          >
            <Text style={styles.guestButtonText}>Use as Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#0a7ea4',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#666',
    marginBottom: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  primaryButton: {
    backgroundColor: '#0a7ea4',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0a7ea4',
  },
  secondaryButtonText: {
    color: '#0a7ea4',
    fontSize: 18,
    fontWeight: 'bold',
  },
  guestButton: {
    padding: 15,
    alignItems: 'center',
  },
  guestButtonText: {
    color: '#666',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
