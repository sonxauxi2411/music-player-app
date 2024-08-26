import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";

type Props = {
  children: ReactNode;
  title: string;
  isTab?: boolean;
};


const Header = ({ children, title, isTab }: Props) => {

  const router = useRouter()
  const handleGoBack = ()=>{
    router.back()
    
  }
  return (
    <View>
      {isTab ? (
        <View style={styles.container}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity onPress={handleGoBack}>
              <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}

      <View style={{ padding: 20 }}>{children}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    elevation: 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
