import { StyleSheet } from "react-native";

export const sideMenuStyles = StyleSheet.create({
  container: {
    width: 240,
    backgroundColor: "#fff",
    borderRightWidth: 1,
    borderRightColor: "#e5e5e5",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedMenuItem: {
    backgroundColor: "#e8f0fe",
    borderLeftWidth: 4,
    borderLeftColor: "#065fd4",
  },
  icon: {
    fontSize: 20,
    marginRight: 20,
    width: 30,
    textAlign: "center",
    color: "#606060",
  },
  label: {
    fontSize: 14,
    color: "#030303",
  },
  selectedLabel: {
    fontWeight: "500",
    color: "#065fd4",
  },
  separator: {
    height: 1,
    backgroundColor: "#e5e5e5",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 12,
    color: "#606060",
    fontWeight: "700",
    paddingVertical: 8,
    paddingHorizontal: 20,
    textTransform: "uppercase",
  },
  signInText: {
    fontSize: 14,
    color: "#065fd4",
    fontWeight: "500",
    paddingHorizontal: 20,
  },
});
