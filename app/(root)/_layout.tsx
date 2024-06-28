import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

import HomeIcon from "@/components/Icon/Home";
import ChatIcon from "@/components/Icon/Chat";
import EditIcon from "@/components/Icon/Edit";
import UserIcon from "@/components/Icon/User";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "00B3F2",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={22}
              height={22}
              color={focused ? "#00B3F2" : "#fff"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ focused }) => (
            <ChatIcon
              width={22}
              height={22}
              color={focused ? "#00B3F2" : "#fff"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="edit"
        options={{
          tabBarIcon: ({ focused }) => (
            <EditIcon
              width={22}
              height={22}
              color={focused ? "#00B3F2" : "#fff"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarIcon: ({ focused }) => (
            <UserIcon
              width={22}
              height={22}
              color={focused ? "#00B3F2" : "#fff"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
