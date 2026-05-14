import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Recipe } from '../types/recipe';
import { IconSymbol } from './ui/icon-symbol';

export function RecipeCard({ recipe, showSaveButton = false }: { recipe: Recipe, showSaveButton?: boolean }) {
  return (
    <View style={styles.container}>
      {/* This allows clicking the card to go to the detail page */}
      <Link href={{ pathname: '/recipe/[id]', params: { id: recipe.id } }} asChild>
        <Pressable style={styles.card}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.category}>{recipe.category}</Text>
        </Pressable>
      </Link>

      {showSaveButton && (
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => console.log('Saved', recipe.title)}
        >
          <IconSymbol name="heart.fill" size={16} color="#0a7ea4" />
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  card: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  category: { fontSize: 14, color: '#666', marginTop: 4 },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#0a7ea4',
    gap: 5,
  },
  saveText: {
    fontSize: 12,
    color: '#0a7ea4',
    fontWeight: '600',
  }
});