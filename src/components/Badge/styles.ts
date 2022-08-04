import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    color: theme.COLORS.SECONDARY,
    fontWeight: "bold",
    marginRight: 8,
  },
  colorPrimary: {
    color: theme.COLORS.PRIMARY,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.GRAY_400,
  },
  badgeText: {
    fontSize: 12,
    color: theme.COLORS.GRAY_200,
    fontWeight: "bold",
  },
});
