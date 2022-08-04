import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_600,
  },
  header: {
    width: "100%",
    height: 200,
    backgroundColor: theme.COLORS.GRAY_700,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    marginHorizontal: 16,
    marginTop: -27,
    flex: 1,
  },
  listHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: theme.COLORS.GRAY_600,
  },
});
