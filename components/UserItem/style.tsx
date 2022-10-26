import { StyleSheet } from "react-native";
export const s = StyleSheet.create({
  block: {
    width: "40%",
    marginBottom: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 30,
  },
  by: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 5,
  },
  text: {
    textAlign: "center",
    marginBottom: 3,
    letterSpacing: 2,
  },
});
