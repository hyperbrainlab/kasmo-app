import { ReactNode } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

type MenuProps = {
  label: string;
  color: string;
};

export default function Menu({ label, color }: MenuProps) {
  return (
    <TouchableOpacity style={[styles.base, { backgroundColor: color }]}>
      <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    marginTop: 4,
    fontSize: 8,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#fff",
  },
});
