import { Alert, StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import { useRouter } from "expo-router";
import * as MediaLibrary from "expo-media-library";

// const mockAudioFiles = [
//   {
//     id: "1",
//     filename: "Song 1",
//     duration: 210,
//     uri: "https://example.com/song1.mp3",
//   },
//   {
//     id: "2",
//     filename: "Song 2",
//     duration: 180,
//     uri: "https://example.com/song2.mp3",
//   },
//   {
//     id: "3",
//     filename: "Song 3",
//     duration: 240,
//     uri: "https://example.com/song3.mp3",
//   },
//   {
//     id: "4",
//     filename: "Song 4",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "5",
//     filename: "Song 5",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "6",
//     filename: "Song 6",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "7",
//     filename: "Song 7",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "8",
//     filename: "Song 8",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "9",
//     filename: "Song 8",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "10",
//     filename: "Song 8",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "11",
//     filename: "Song 8",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "12",
//     filename: "Song 12",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "13",
//     filename: "Song 13",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "14",
//     filename: "Song 14",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "15",
//     filename: "Song 19",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "16",
//     filename: "Song 20",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
//   {
//     id: "17",
//     filename: "Song 22",
//     duration: 200,
//     uri: "https://example.com/song4.mp3",
//   },
// ];

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

  const renderItem = ({ item }: { item: AudioFile }) => (
    <View style={styles.fileItem}>
      <Text>{item.filename}</Text>
      <Text>{item.duration} seconds</Text>
    </View>
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
