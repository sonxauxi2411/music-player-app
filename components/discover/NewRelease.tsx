import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import TextTitle from "../TextTitle";

type Item = {
  encodeId: string;
  title: string;
};
type Props = {
  title: string;
  data: any;
};

const sliceIntoChunks = (array: any[], chunkSize: number): any[][] => {
  const result: any[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const NewRelease = ({ title, data }: Props) => {
  const [selectedKey, setSelectedKey] = useState<string | null>("all");

  const handlePress = (key: string) => {
    setSelectedKey(key);
  };

  const renderData = () => {
    if (selectedKey) {
      const slicedData = data[selectedKey].slice(0, 12);
      const chunks = sliceIntoChunks(slicedData, 3);

      return (
        <FlatList
          data={chunks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
              <View style={styles.container}>
                  <FlatList
              data={item}
              keyExtractor={(item) => item.encodeId}
              renderItem={({ item }) => (
                <View >
                  <Image
                    source={{ uri: item.thumbnail }}
                    style={styles.image}
                  />
                </View>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              // numColumns={3}
            />
              </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      );

    }
    return null;
  };

  return (
    <View>
      <TextTitle title={title} />
      <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        {Object.keys(data).map((key) => {
          let title = "";
          if (key == "all") title = "Tất cả";
          else if (key == "vPop") title = "Việt Nam";
          else if (key == "others") title = "Quốc Tế";
          return (
            <TouchableOpacity
              key={key}
              style={[
                styles.button,
                selectedKey === key ? styles.active : null,
              ]}
              onPress={() => handlePress(key)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedKey === key ? styles.textActive : null,
                ]}
              >
                {title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View>{renderData()}</View>
    </View>
  );
};

export default NewRelease;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#dadada",
  },
  buttonText: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  active: {
    backgroundColor: "#0a7ea4",
    borderColor: "#0a7ea4",
  },
  textActive: {
    color: "#fff",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  container : {
    display : "flex", 
    flexDirection : "row",
    width: width * 0.9,
  }
});
