import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
type Prpos = {
    title : string
}

const TextTitle = ({title} : Prpos) => {
  return (
    <View style ={styles.containerText}>
      <Text style={styles.title}>{title}</Text>
      <MaterialIcons name="navigate-next" size={26} color="black" />
    </View>
  )
}

export default TextTitle

const styles = StyleSheet.create({
    containerText : {
       display: "flex", 
       flexDirection : "row",
        gap : 10
    },
    title : {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    }
})