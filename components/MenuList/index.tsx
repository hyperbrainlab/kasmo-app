import { View, StyleSheet, FlatList } from "react-native";

import Menu from "./Menu";

const MENU_LIST = [
  {
    id: 0,
    label: "구인/구직",
    color: "#6FCF97",
  },
  {
    id: 1,
    label: "중고거래",
    color: "#F2994A",
  },
  {
    id: 2,
    label: "부동산",
    color: "#EB5757",
  },
  {
    id: 3,
    label: "업소록",
    color: "#BB6BD9",
  },
  {
    id: 4,
    label: "픽업/이사",
    color: "#2F80ED",
  },
  {
    id: 5,
    label: "속닥속닥",
    color: "#9B51E0",
  },
  {
    id: 6,
    label: "질문방",
    color: "#828282",
  },
  {
    id: 7,
    label: "모임",
    color: "#56CCF2",
  },
  {
    id: 8,
    label: "환전",
    color: "#219653",
  },
  {
    id: 9,
    label: "업소 광고",
    color: "#F2C94C",
  },
];

export default function MenuList() {
  return (
    <FlatList
      style={styles.container}
      data={MENU_LIST}
      contentContainerStyle={{ gap: 8 }}
      columnWrapperStyle={{ gap: 8 }}
      keyExtractor={(item, index) => `${item.id}`}
      numColumns={5}
      renderItem={({ item }) => (
        <Menu key={item.id} label={item.label} color={item.color} />
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
