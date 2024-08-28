import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PlayListScreend = () => {
    const {id} = useLocalSearchParams()
  
  return (
    <View>
      <Text>PlayListScreend : {id}</Text>
    </View>
  )
}

export default PlayListScreend

const styles = StyleSheet.create({})