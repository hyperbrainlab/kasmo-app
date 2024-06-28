import { View, StyleSheet, StatusBar, TextInput } from "react-native";
import Logo from "./Icon/Logo";

export default function Header() {
  return (
    <View style={styles.base}>
      <View style={styles.container}>
        <Logo />
        <TextInput style={styles.input} placeholder="검색어를 입력해주세요" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    height: 100,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 10,
    display: "flex",
    borderRadius: 50,
    backgroundColor: "#F3F3F3",
    width: 300,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
