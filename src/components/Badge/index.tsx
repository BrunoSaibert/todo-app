import { Text, View } from "react-native";

import { styles } from "./styles";

type BadgeProps = {
  title: string;
  primary?: boolean;
  amount: number;
};

export function Badge({ title, primary, amount }: BadgeProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, primary && styles.colorPrimary]}>
        {title}
      </Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{amount}</Text>
      </View>
    </View>
  );
}
