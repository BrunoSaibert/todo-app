import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    backgroundColor: theme.COLORS.GRAY_500,
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_700,
    marginRight: 4,
    fontSize: 16,
    paddingLeft: 16,
    color: theme.COLORS.GRAY_100,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: theme.COLORS.SECONDARY_DARK,
    alignItems: "center",
    justifyContent: "center",
  },
});
