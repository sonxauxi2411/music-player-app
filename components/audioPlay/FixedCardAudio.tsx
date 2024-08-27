import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { audioPlaySelector, setShowModal } from "@/redux/reducers/audioPlayReducer";

const FixedCardAudio = () => {
    const dispatch = useDispatch()
    const {isFixed , isShowModalPlay} = useSelector(audioPlaySelector)
    const handleShowModal = ()=>{
        dispatch(setShowModal(!isShowModalPlay))
    }
  return (
    <TouchableOpacity onPress={handleShowModal} style={styles.card}>
      <Text>Thông tin card</Text>
    </TouchableOpacity>
  );
};

export default FixedCardAudio;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    bottom: 60, 
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
