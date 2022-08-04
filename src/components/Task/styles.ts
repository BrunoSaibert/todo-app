import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_400,
    backgroundColor: theme.COLORS.GRAY_500,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: theme.COLORS.GRAY_100,
  },
  textDone: {
    color: theme.COLORS.GRAY_300,
    textDecorationLine: "line-through",
  },
  button: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
