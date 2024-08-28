import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

type Item = {
  link: string;
  banner: string;
  cover: string;
  encodeId: string;
};

type Props = {
  data: Item[];
};

const BannerHome = ({ data }:  Props ) => {
   
    const router = useRouter()

    const handleNavigationPlayList = (id : string) =>{
        const queryParams = new URLSearchParams({
            id
        
          }).toString();
        router.push(`/discover/playList?${queryParams}`)
    }

    const renderItem = ({item} : {item : Item})=>{
        return (
            <TouchableOpacity onPress={()=>handleNavigationPlayList(item.encodeId)} style={styles.itemContainer}>
                <Image source={{uri: item.banner}} style={styles.image} />
            </TouchableOpacity>
        )
    }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.encodeId}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

export default BannerHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
      },
      itemContainer: {
        paddingHorizontal: 10, 
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 120, 
        borderRadius: 10,
      },
      text: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 16,
      },
});
