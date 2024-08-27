import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  audioPlaySelector,
  setActionAudioPlay,
  setShowModal,
} from "@/redux/reducers/audioPlayReducer";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { actionAudioPlay } from "@/redux/actions/audioPlayAction";

const FixedCardAudio = () => {
  const dispatch = useDispatch();
  const { isFixed, isShowModalPlay, isActionPlay } =
    useSelector(audioPlaySelector);

  const handleShowModal = () => {
    dispatch(setShowModal(!isShowModalPlay));
  };


  
  const handleActionAudio = () =>{
      actionAudioPlay({isActionPlay })
      dispatch(setActionAudioPlay(!isActionPlay));
  }

  return (
    <TouchableOpacity onPress={handleShowModal} style={styles.card}>
        <View style={{display : "flex" , flexDirection : "row", justifyContent : "space-around"}}>
        <Text>Thông tin card</Text>
      <TouchableOpacity onPress={handleActionAudio}>
        {isActionPlay ? (
          <FontAwesome name="pause" size={24} color="black" />
        ) : (
          <FontAwesome name="play" size={24} color="black" />
        )}
      </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );
};

export default FixedCardAudio;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    bottom: "7%",
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
