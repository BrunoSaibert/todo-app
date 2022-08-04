import { useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import theme from "../../styles/theme";

import { styles } from "./styles";

type InputProps = TextInputProps & {
  onAdd: () => void;
};

export function Input({ onAdd, ...rest }: InputProps) {
  const [borderColor, setBorderColor] = useState(theme.COLORS.GRAY_700);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.COLORS.GRAY_300}
        onBlur={() => setBorderColor(theme.COLORS.GRAY_700)}
        onFocus={() => setBorderColor(theme.COLORS.PRIMARY_DARK)}
        {...rest}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onAdd}
      >
        <Feather name="plus-circle" size={16} color={theme.COLORS.GRAY_100} />
      </TouchableOpacity>
    </View>
  );
}
