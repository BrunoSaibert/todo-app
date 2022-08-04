import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import theme from "../../styles/theme";

export type TaskProps = {
  name: string;
  done: boolean;
};

type Props = {
  data: TaskProps;
  onRemove: (name: string) => void;
  onUpdate: (name: string) => void;
};

export function Task({ data, onRemove, onUpdate }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => onUpdate(data.name)}
      >
        {data.done ? (
          <Feather name="check-circle" size={18} color={theme.COLORS.PRIMARY} />
        ) : (
          <Feather name="circle" size={18} color={theme.COLORS.SECONDARY} />
        )}
      </TouchableOpacity>

      <Text style={[styles.text, data.done && styles.textDone]}>
        {data.name}
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Feather
          name="trash-2"
          size={16}
          color={theme.COLORS.GRAY_300}
          onPress={() => onRemove(data.name)}
        />
      </TouchableOpacity>
    </View>
  );
}
