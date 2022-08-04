import { useState } from "react";
import { Alert, FlatList, Keyboard, View } from "react-native";

import Logo from "../../assets/Logo.svg";

import { Empty } from "../../components/Empty";
import { Badge } from "../../components/Badge";
import { Task, TaskProps } from "../../components/Task";

import { styles } from "./styles";
import { Input } from "../../components/Input";

export default function Home() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleAddTask() {
    if (!taskName) {
      return Alert.alert("Falta de dados", "Informe o nome da tarefa.");
    }

    if (tasks.filter((task) => task.name === taskName).length) {
      return Alert.alert(
        "Tarefa já existe",
        "Já existe uma tarefa com esse nome."
      );
    }

    const newTask: TaskProps = { name: taskName, done: false };

    setTasks((previousTasks) => [...previousTasks, newTask]);
    setTaskName("");
    Keyboard.dismiss();
  }

  function handleRemoveTask(name: string) {
    Alert.alert("Remover", "Deseja remover a tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          setTasks((previousTasks) =>
            previousTasks.filter((task) => task.name !== name)
          );
        },
      },
      { text: "Não", style: "cancel" },
    ]);
  }

  function handleUpdateTask(name: string) {
    const index = tasks.findIndex((task) => task.name === name);

    const tasksUpdated = [...tasks];
    tasksUpdated[index].done = !tasksUpdated[index].done;

    setTasks(tasksUpdated);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.content}>
        <Input
          onChangeText={setTaskName}
          value={taskName}
          onAdd={handleAddTask}
        />

        <FlatList
          data={tasks}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <Task
              data={item}
              onRemove={handleRemoveTask}
              onUpdate={handleUpdateTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={() => (
            <View style={styles.listHeader}>
              <Badge title="Criadas" amount={tasks.length} />
              <Badge
                primary
                title="Concluídas"
                amount={tasks.filter((task) => task.done).length}
              />
            </View>
          )}
          ListEmptyComponent={() => <Empty />}
        />
      </View>
    </View>
  );
}
