import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { DIETARY_PREFERENCES, ALLERGIES, AVOID_INGREDIENTS, HOUSEHOLD_USERS } from '@/constants/userPreferences';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.nameText}>Name Lastname</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dietary preferences</Text>
        <View style={styles.tagContainer}>
          {DIETARY_PREFERENCES.map((pref, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{pref}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Allergies</Text>
        <View style={styles.tagContainer}>
          {ALLERGIES.map((allergy, index) => (
            <View key={index} style={[styles.tag, styles.allergyTag]}>
              <Text style={styles.tagText}>{allergy}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Avoid recipes with</Text>
        <View style={styles.tagContainer}>
          {AVOID_INGREDIENTS.map((ingredient, index) => (
            <View key={index} style={[styles.tag, styles.avoidTag]}>
              <Text style={styles.tagText}>{ingredient}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => console.log('Edit preferences pressed')}
      >
        <Text style={styles.editButtonText}>Edit Preferences</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Other users in household: {HOUSEHOLD_USERS.length}
        </Text>
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

      <View style={styles.householdButtons}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => console.log('Edit users pressed')}
        >
          <Text style={styles.secondaryButtonText}>Edit Users</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => console.log('Add user pressed')}
        >
          <Text style={styles.primaryButtonText}>Add User</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerSection: {
    marginBottom: 30,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#444',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bbdefb',
  },
  allergyTag: {
    backgroundColor: '#ffebee',
    borderColor: '#ffcdd2',
  },
  avoidTag: {
    backgroundColor: '#fff3e0',
    borderColor: '#ffe0b2',
  },
  tagText: {
    fontSize: 14,
    color: '#333',
  },
  editButton: {
    backgroundColor: '#0a7ea4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
    marginBottom: 30,
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
  },
  householdButtons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    marginBottom: 40,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#0a7ea4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});