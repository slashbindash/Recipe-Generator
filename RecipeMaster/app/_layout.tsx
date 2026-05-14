import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Landing/Auth screens */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: 'Log In' }} />
      <Stack.Screen name="register" options={{ title: 'Create Account' }} />

      {/* Main App */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* This makes the recipe detail look like a nice popup/modal */}
      <Stack.Screen name="recipe/[id]" options={{ presentation: 'modal', title: 'Recipe Details' }} />
      <Stack.Screen name="categories" options={{ title: 'Categories' }} />
      <Stack.Screen name="results" options={{ title: 'Results' }} />
    </Stack>
  );
}