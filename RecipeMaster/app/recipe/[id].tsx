import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* This adds a back button automatically in the header */}
      <Stack.Screen options={{ title: 'Recipe Details', headerShown: true }} />
      
      <Text style={styles.title}>Recipe ID: {id}</Text>
      <Text style={styles.subtitle}>
        Person 2: Use the ID to filter MOCK_RECIPES and display data.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: 'gray', marginTop: 10 }
});