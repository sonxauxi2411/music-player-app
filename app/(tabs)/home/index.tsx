import { Alert, FlatList, StyleSheet, Text, View, TouchableOpacity  } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as MediaLibrary from "expo-media-library";
import { Link, useRouter } from "expo-router";


interface AudioFile {
  id: string;
  filename: string;
  duration: number;
  uri: string;
}

const LibraryScreen: React.FC = () => {
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
      
      const assets: AudioFile[] = media.assets.map(asset => ({
        id: asset.id,
        filename: asset.filename,
        duration: asset.duration ?? 0,
        uri: asset.uri ?? ''
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
        const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync();
        if (status === 'denied' && canAskAgain) {
          Alert.alert("Permission Required", "This app needs to read audio files!", [
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
          ]);
        } else if (status === 'denied' && !canAskAgain) {
          Alert.alert("Permission Denied", "Please enable permissions in settings.");
        } else if (status === 'granted') {
          getAudioFiles();
        }
      }
    };

    getPermission();
  }, []);

  const handleDownloadClick = ()=>{
    router.push('/home/download');
  }

  return (
  
      <View style={{padding : 20}}>
        <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
          {/* Favourite */}
          <View style={styles.card}>
            <MaterialIcons name="favorite-border" size={24} color="#0cc5ff" />
            <Text style={{ fontWeight: "bold" }}>Yêu thích</Text>
            <Text>0</Text>
          </View>

          {/* Downloaded */}
          <TouchableOpacity onPress={handleDownloadClick}  style={styles.card}>
            <MaterialCommunityIcons name="download-circle-outline" size={24} color="#6f38cb" />
            <Text style={{ fontWeight: "bold" }}>Đã tải</Text>
            <Text>{audioFiles.totalCount}</Text>
          </TouchableOpacity>
        </View>


      
      </View>
   
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 100,
  },
  fileItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
