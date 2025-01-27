import { StyleSheet } from "react-native";

export const categoryStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  innerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 12,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
  },
  activeChip: {
    backgroundColor: "#0f0f0f",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0f0f0f",
  },
  activeText: {
    color: "#fff",
  },
});
