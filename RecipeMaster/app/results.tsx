import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { RecipeCard } from '@/components/RecipeCard';
import { MOCK_RECIPES } from '@/constants/mockData';

export default function ResultsScreen() {
  const { category } = useLocalSearchParams();

  // For now, we are not implementing filtering as requested,
  // but we can pass the category name to the header.

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: category ? `${category} Recipes` : 'Results', headerShown: true }} />
      <Text style={styles.header}>Recipes for you:</Text>

      <FlatList
        data={MOCK_RECIPES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipeCard recipe={item} showSaveButton={true} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No recipes found.</Text>}
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#666',
  },
});
