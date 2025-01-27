import { StyleSheet } from "react-native";

export const videoCardStyles = StyleSheet.create({
  thumbnailContainer: {
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  durationBadge: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: "#fff",
    fontSize: 12,
  },
  infoContainer: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0f0f0f",
    marginBottom: 6,
  },
  channelTitle: {
    fontSize: 12,
    color: "#303030",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#606060",
  },
  placeholder: {
    position: "absolute",
    top: 5,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  placeholderText: {
    color: "#fff",
    fontSize: 12,
  },
  popupContainer: {
    position: "absolute",
    width: 400,
    height: "auto",
    backgroundColor: "#fff",
    zIndex: 10000,
    borderRadius: 16,
    padding: 16,
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  popupImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 8,
  },
  popupInfo: {
    flexGrow: 1,
    marginTop: 12,
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 6,
  },
  popupSubtitle: {
    fontSize: 14,
    color: "#606060",
  },
  popupButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  popupButton: {
    fontSize: 14,
    color: "#0073e6",
    fontWeight: "500",
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#f1f1f1",
    borderRadius: 4,
    cursor: "pointer",
  },
});
