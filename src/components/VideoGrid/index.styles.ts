import { StyleSheet } from "react-native";

export const videoGridStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
    gap: 16,
  },
  card: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 250,
    maxWidth: 350,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
});
