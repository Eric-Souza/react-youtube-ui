import { StyleSheet } from "react-native";

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  mainContent: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  scrollableContent: {
    flex: 1,
    marginTop: 10,
  },
});
