import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ITodo {
  id: number,
  name: string
}
export default function App() {
  const [todo, setTodo] = useState("")
  const [listTodo, setListTodo] = useState<ITodo[]>([])
  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Error", "Cannot miss input", [{
        text: 'cancel'
      }, {
        text: 'ok'
      }])
      return
    }
    setListTodo([...listTodo, { id: randomInteger(1, 200000), name: todo }])
    setTodo("")
  }
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const deleteTodo = (id: number) => {
    const newTodos = listTodo.filter(item => item.id !== id)
    setListTodo(newTodos)
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>hello hello</Text>
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.toDoInput}
            onChangeText={(value => { setTodo(value) })}
          />
          <Button
            title='add to do'
            onPress={handleAddTodo}
          />
        </View>
        <View style={styles.todo}>
          <FlatList
            data={listTodo}
            keyExtractor={item => item.id + ""}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                  onPress={() => deleteTodo(item.id)}
                >
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{item.name}</Text>
                    <AntDesign name="delete" size={24} color="black" />
                  </View>
                </Pressable>
              )
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 30,
  },
  form: {
    flex: 2
  },
  todo: {
    padding: 5,
    flex: 10
  },
  toDoInput: {
    borderWidth: 1,
    borderBlockColor: "green",
    padding: 5,
    margin: 15
  },
  body: {
    padding: 10,
    flex: 1
  },
  groupTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 15,
    justifyContent: "space-between",
    padding: 5
  },
  todoItem: {
    fontSize: 20,
  }
});
