import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
  },
  corDestaque: {
    color: "tomato",
  },
});

export default styles;
