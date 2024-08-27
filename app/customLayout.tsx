import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { audioPlaySelector } from "@/redux/reducers/audioPlayReducer";
import FixedCardAudio from "@/components/audioPlay/FixedCardAudio";
import AudioPlayModal from "@/components/audioPlay/AudioPlayModal";

const CustomLayout = () => {
    const {isShowModalPlay, isFixed} = useSelector(audioPlaySelector)
    
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      {isFixed && <FixedCardAudio />}
      <AudioPlayModal visible={isShowModalPlay} />
    </>
  );
};

export default CustomLayout;

const styles = StyleSheet.create({});
