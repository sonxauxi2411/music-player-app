import { audioPlaySelector, setShowModal } from '@/redux/reducers/audioPlayReducer';
import React, { useEffect } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const AudioPlayModal = ({ visible }: { visible: boolean }) => {

  const {isShowModalPlay} = useSelector(audioPlaySelector)
  const dispatch = useDispatch()
  const handleCloseModal = ()=>{
    dispatch(setShowModal(!isShowModalPlay))
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={handleCloseModal}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={handleCloseModal}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
        <Text style={styles.modalText}>This is a fullscreen modal!</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  closeButton: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default AudioPlayModal;
