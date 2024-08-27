import { Alert, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import { useRouter } from "expo-router";
import * as MediaLibrary from "expo-media-library";
import { Audio } from 'expo-av';



interface AudioFile {
  id: string;
  filename: string;
  duration: number;
  uri: string;
}

const DownloadScreed = () => {
  const [audioFiles, setAudioFiles] = useState<{
    items: AudioFile[];
    totalCount: number;
  }>({
    items: [],
    totalCount: 0,
  });

  const router = useRouter();

  const getAudioFiles = async () => {
    try {
      const media = await MediaLibrary.getAssetsAsync({
        mediaType: "audio",
      });
      console.log(media)
      const assets: AudioFile[] = media.assets.map((asset) => ({
        id: asset.id,
        filename: asset.filename,
        duration: asset.duration ?? 0,
        uri: asset.uri ?? "",
      }));
  
      setAudioFiles({
        items: assets,
        totalCount: media.totalCount,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getPermission = async () => {
      const permission = await MediaLibrary.getPermissionsAsync();
      if (permission.granted) {
        getAudioFiles();
      } else if (!permission.granted && permission.canAskAgain) {
        const { status, canAskAgain } =
          await MediaLibrary.requestPermissionsAsync();
        if (status === "denied" && canAskAgain) {
          Alert.alert(
            "Permission Required",
            "This app needs to read audio files!",
            [
              {
                text: "I am ready",
                onPress: () => {
                  // Optionally retry permission request here
                },
              },
              {
                text: "Cancel",
                onPress: () => {
                  // Handle cancel
                },
              },
            ]
          );
        } else if (status === "denied" && !canAskAgain) {
          Alert.alert(
            "Permission Denied",
            "Please enable permissions in settings."
          );
        } else if (status === "granted") {
          getAudioFiles();
        }
      }
    };

    getPermission();
  }, []);

  const handlePlayAudio = async (item : AudioFile)=>{
   try {
      // const {sound} = await Audio.Sound.createAsync({uri: item.uri})
      // await sound.playAsync();
      // const data = await RNFetchBlob.fs.readFile(item.uri, 'base64');
      // console.log(data)

      // console.log(metadata);
   } catch (error) {
    console.log('err:' , error);
   }
  }

  const renderItem = ({ item }: { item: AudioFile }) => (
    <TouchableOpacity onPress={()=>handlePlayAudio(item)} style={styles.fileItem}>
      <Text>{item.filename}</Text>
      <Text>{item.duration} seconds</Text>
    </TouchableOpacity>
  );

  return (
    
   <View style={{}}>
        

        <FlatList
          data={audioFiles.items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
   </View>
   
   
  );
};

export default DownloadScreed;

const styles = StyleSheet.create({
  fileItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  listContainer: {
    paddingBottom: 20,
  },
});
