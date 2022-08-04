import { Text, View } from "react-native";

import Clipboard from "../../assets/Clipboard.svg";

import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.container}>
      <Clipboard style={styles.icon} />
      <Text style={[styles.text, { fontWeight: "bold" }]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
