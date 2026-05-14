import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { RecipeCard } from '@/components/RecipeCard';
import { MOCK_RECIPES } from '@/constants/mockData';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items scanned from your Smart Fridge: </Text>
      <FlatList 
        data={MOCK_RECIPES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => console.log('Edit list pressed')}
        >
          <Text style={styles.editButtonText}>Edit list</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => router.push('/categories')}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  listContent: { paddingBottom: 20 },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#0a7ea4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});