import { View, StyleSheet, Text } from "react-native";

export default function Banner() {
  return (
    <View style={styles.container}>
      <Text>배너 광고 (슬라이드)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#D7D8DA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
