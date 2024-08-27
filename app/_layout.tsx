import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Provider, useSelector } from "react-redux";
import { useColorScheme } from "@/hooks/useColorScheme";
import store from "@/redux/store";
import { audioPlaySelector } from "@/redux/reducers/audioPlayReducer";
import FixedCardAudio from "@/components/audioPlay/FixedCardAudio";
import CustomLayout from "./customLayout";

export default function RootLayout() {
  const [modalVisible, setModalVisible] = useState(false);
  const colorScheme = useColorScheme();
  // const {isShowModalPlay, isFixed} = useSelector(audioPlaySelector)

  const router = useRouter();

  useEffect(() => {
    router.replace("/discover");
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <CustomLayout />
      </ThemeProvider>
    </Provider>
  );
}
