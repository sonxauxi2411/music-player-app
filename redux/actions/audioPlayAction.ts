import { Audio } from "expo-av";
import {
  audioPlaySelector,
  setFixedShow,
  setPlayAudio,
} from "../reducers/audioPlayReducer";
import { useSelector } from "react-redux";

let currentSound: Audio.Sound | null = null;

export const playAudio = async ({
  dispatch,
  audio,
}: {
  audio: any;
  dispatch: any;
}) => {
  try {
    if (currentSound) {
      await currentSound.stopAsync();
      await currentSound.unloadAsync();
    }
    const { sound } = await Audio.Sound.createAsync({ uri: audio.uri });
    currentSound = sound;
    await sound.playAsync();
    dispatch(setPlayAudio());
  } catch (error) {
    console.log(error);
  }
};

export const actionAudioPlay = async ({isActionPlay} : {isActionPlay : boolean}) => {
  try {
    if (currentSound) {
      if (isActionPlay) {
        await currentSound.pauseAsync();
      } else {
        await currentSound.playAsync();
      }
    }
  } catch (error) {
    console.log(error);
  }
};
