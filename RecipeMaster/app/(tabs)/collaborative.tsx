import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {HOUSEHOLD_USERS } from '@/constants/userPreferences';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function CollaborativeScreen() {
  const [isCollaborativeOn, setIsCollaborativeOn] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Collaborative Mode is {isCollaborativeOn ? 'on' : 'off'}
      </Text>
      <Button
        title={isCollaborativeOn ? "Turn off" : "Turn on"}
        onPress={() => setIsCollaborativeOn(!isCollaborativeOn)}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}> Users:</Text>
      <Button title="Select All"></Button>
      <Button title= "Select"></Button>
      <View style={styles.section}>
              {HOUSEHOLD_USERS.map((user) => (
                <View key={user.id} style={styles.userRow}>
                  <View style={styles.userInfo}>
                    <IconSymbol name="person.fill" size={24} color="#666" />
                    <View style={styles.userTextContainer}>
                      <Text style={styles.userName}>{user.name}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#444',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userTextContainer: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  }
});