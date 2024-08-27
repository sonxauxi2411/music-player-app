import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useSelector } from "react-redux";
import { audioPlaySelector } from "@/redux/reducers/audioPlayReducer";
import { View } from "react-native";
import FixedCardAudio from "@/components/audioPlay/FixedCardAudio";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isShowModalPlay, isFixed } = useSelector(audioPlaySelector);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Thư viện",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="discover"
        options={{
          title: "Khám phá",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "disc" : "disc-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="rankings"
        options={{
          title: "Xếp hạng",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "bar-chart" : "bar-chart-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
