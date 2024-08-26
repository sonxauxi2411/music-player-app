import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Thư viện",
        }}
      />
      <Stack.Screen
        name="download"
        options={{
          headerTitle: "Tải về",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
