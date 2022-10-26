import { StyleSheet } from "react-native";
export const s = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 10,
    padding: 10,
  },
  wrapErr: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  flatList: { flex: 1, justifyContent: "space-around" },
  error: {
    fontSize: 24,
    textAlign: "center",
    color: "#d13408",
  },
});
