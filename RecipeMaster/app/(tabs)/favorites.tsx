import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MOCK_RECIPES } from '@/constants/mockData';
import { RecipeCard } from '@/components/RecipeCard';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>Your saved recipes</Text>
        <TouchableOpacity style={styles.editButton} onPress={() => console.log('Edit favorites')}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCK_RECIPES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No saved recipes yet.</Text>}
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
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  editButtonText: {
    color: '#0a7ea4',
    fontWeight: '600',
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