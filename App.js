import { 
  View, 
  Text,
  SafeAreaView, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList,
  Alert
} from 'react-native'
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export default function App() {
  //* Inputun içerisindeki değer
  const [todo, setTodo] = useState('');

  //* Eklenilen todolar
  const [todos,setTodos] = useState([]);

  const saveTodos =  async saveTodo => {
    try{
      //* AsyncStorage ekleme yaparken setItem metodu ile ekleme yaparız.
      //* Bizden iki değer istenir:
      //* 1.değer: Key(string)
      //* 2.değer: Value(string) Objeyi stringe çevirebilmek için JSON.stringfy methodunu kullanırız
    await AsyncStorage.setItem('todos', JSON.stringify(saveTodo));
    }catch (error){
      console.log('error', error);
    }
  };

  //* Add butonuna basıldığında çalışacak
  const addTodo = () => {  
  //* Yeni bir todo objesi oluştur ve todos stateine aktar
   if (todo) {
    const updatedTodos = [...todos, {id: uuid.v4(),text: todo}]
  setTodos(updatedTodos);
  saveTodos(updatedTodos);
   }
  };

const loadTodos = async () => {
//  try{
//     await AsyncStorage.removeItem('todos');
// } catch (error){
//   console.log(error);
// }

try{ 
 /*
 * AsyncStorage dan veriyi alırken getItem metodu ile alırız.
 * getItem bizden "key" ister.
 * Veriyi string olarak getirir.
 */
 const storedData = await AsyncStorage.getItem('todos');
 console.log('storedData', storedData);
 if (storedData){
 setTodos(JSON.parse(storedData));
}
} catch (error){
 console.log(error);
 }
};

const deleteTodo = async id => {
  //* Bastığımız elemanın id'si ile dizi içerisindeki id'lerden eşleşmeyenleri çıkar ve bir dizi olarak dönder(filter)
 const updatedTodo = todos?.filter(x => x.id !== id);
 console.log(updatedTodo);
 //* state'i güncelle
 setTodos(updatedTodo);
 //* AsyncStorage güncelle
 saveTodos(updatedTodo);
};


const updateTodos = id => {
  //* id'sini bildiğimiz elemanı todos dizisi içerisinde bulmak için find methodu kullandık.
  const exitingTodo = todos?.find(x => x.id === id);
  //* id'li eleman dizide yoksa fonksiyonu durdur
 if (!exitingTodo) return;

 Alert.prompt(
  'Edit Todo', // Kullanıcıya gösterilecek başlık
  'Update', // Kullanıcının güncelleme yapabilmesi için buton üzerinde yazan metindir.
// Kullanıcının giriş yaptığı metni işleyen fonksiyondur.
  newUpdateText => {
    if(newUpdateText){
     const updatedTodos = todos.map(item=> 
        item?.id === id ? {...item,text:newUpdateText} : item,
        );
        setTodos(updatedTodos); //* todos state'i güncellendi.
        saveTodos(updatedTodos); //* asyncStorage güncellendi
    }
  },
  'plain-text',// Kullanıcının sadece düz metin girişi yapabileceğini belirtir.
  exitingTodo.text,// Kullanıcıya başlangıçta gösterilecek mevcut metindir.
);
};


useEffect(() => {
    loadTodos ();
    }, []);

  return (
   <View style= {styles.container}>
    <SafeAreaView>
      <Text style={styles.headerText}>React Native AsyncStorage</Text>
      <View style={styles.inputContainer} >
      <View style={styles.buttonContainer}>
        <TextInput onChangeText={text => setTodo(text) } placeholder='Type a Todo'  style={styles.input} />
          <TouchableOpacity onPress={addTodo} 
          style= {[styles.button, styles.addButton]}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList 
      data={todos} 
      keyExtractor={item=> item.id?.toString()}
      renderItem={ ({item})  => (
        <View style={styles.todoitem} >
        <Text style={{color: '#000000'}}>{item?.text}</Text>
        <View style={{flexDirection:'row'}} >
        <View style={styles.buttonContainer} >
          <TouchableOpacity 
          onPress={() => deleteTodo(item?.id)}
          style={[styles.button, styles.deleteButton]} >
            <Text style={styles.buttonText} >Delete</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer} >
          <TouchableOpacity 
          onPress={()=>updateTodos(item?.id)}
          style={[styles.button, styles.updateButton]} >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      )}  />
    </SafeAreaView>
   </View>
  )
}
const styles = StyleSheet.create ({ 
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    // flex: 1,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    borderColor: 'gray',
  },
    container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {},
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    padding: 8,
  },
  buttonText: {
    color: '#fff',
  },
  todoitem: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  updateButton: {backgroundColor: 'blue', padding: 10},
  deleteButton:{
    padding: 10,
  }
})