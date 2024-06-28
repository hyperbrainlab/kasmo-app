import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import MenuList from "@/components/MenuList";

export default function RootScreen() {
  return (
    <SafeAreaView style={styles.base}>
      <Header />
      <View style={styles.container}>
        <Banner />
        <MenuList />

        <View>
          <Text>인기글 영역</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 12,
    flex: 1,
  },
});
