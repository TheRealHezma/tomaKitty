import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="ticTacToe" />
      <Stack.Screen name="hangMan" />
    </Stack>
  );
}
