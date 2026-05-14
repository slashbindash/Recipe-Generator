import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/icon-symbol';

const CATEGORIES = [
  { id: 'breakfast', title: 'Breakfast', icon: 'egg' },
  { id: 'lunch', title: 'Lunch', icon: 'lunch-dining' },
  { id: 'drinks', title: 'Drinks', icon: 'local-bar' },
  { id: 'pastas', title: 'Pastas', icon: 'restaurant' },
  { id: 'salads', title: 'Salads', icon: 'eco' },
  { id: 'desserts', title: 'Desserts', icon: 'cake' },
  { id: 'soups', title: 'Soups', icon: 'soup-kitchen' },
];

export default function CategoriesScreen() {
  const router = useRouter();

  const renderCategory = ({ item }: { item: typeof CATEGORIES[0] }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => {
        router.push({
          pathname: '/results',
          params: { category: item.title }
        });
      }}
    >
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <IconSymbol name="chevron.right" size={24} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Select Category', headerShown: true }} />
      <Text style={styles.header}>What are we cooking?</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#444',
  },
});
