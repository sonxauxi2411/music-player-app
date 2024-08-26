import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Khám phá",
        }}
      />

    </Stack>
  );
};

export default StackLayout;
