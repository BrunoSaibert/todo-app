import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingTop: 48,
    borderTopWidth: 1,
    borderColor: theme.COLORS.GRAY_400,
  },
  icon: { marginBottom: 16 },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: theme.COLORS.GRAY_300,
  },
});
