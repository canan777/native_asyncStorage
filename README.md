# ✅ native_asyncStorage

## 📝 React Native Todo Application
This is a simple and effective React Native Todo application that uses AsyncStorage to store data permanently. This app allows users to manage their to-do list. Users can add new tasks, update existing tasks, and delete completed tasks. The app saves the todos on the device, preventing data loss.

## 🌟 Features:
### 🆕 Add a New Todo :
Users can add a new task. Once added, the task is immediately displayed on the screen and stored in the device's memory.

### 🔄 Update an Existing Todo :
Users can update tasks they have previously added. The update process is useful when the importance or content of the tasks changes.

### 🗑️ Delete a Todo:
Completed or no longer needed tasks can be easily deleted. The deletion process helps keep the list organized.

### 📦 Persist Todos :
By using AsyncStorage, all tasks are permanently stored on the device. This ensures that tasks are not lost even when the app is restarted.

## 🛠️ Technical Details:
📌 React Native: Forms the basis of the app and ensures it works on mobile devices.
📌 AsyncStorage: Used to store data permanently. User tasks are stored on the device, preventing data loss even when the app is restarted.

## 🖼️ Screenshots:
### Main Screen 🏠
Users can see all tasks on this screen. New tasks can be added, existing tasks can be updated, and completed tasks can be deleted.

### ➕ Add New Task Screen :
Users can come to this screen to add a new task. The title and details of the task are entered here.

### ✏️ Update Task Screen :
When an existing task is selected, the user can update the task on this screen.

## ✅ Delete Task Confirmation :
When users want to delete a task, the deletion process is confirmed, and the task is removed from the list.

### 💡 Use Cases :
✳ Tracking Daily Tasks: Users can track their daily to-do list.
✳ Project and Task Management: Can be used to organize and manage tasks within a project.
✳ Personal Goals: Ideal for tracking short and long-term goals.

📍 This application allows easy management of to-dos on mobile devices using React Native and ensures data persistence with AsyncStorage. It is an ideal tool for managing all kinds of tasks and to-do lists!


### native_asyncStorage

![](./assest/asyncStorage.gif)



## Asyncstorage Kurulum

### npm için:

npm install @react-native-async-storage/async-storage

### yarn için:

yarn add @react-native-async-storage/async-storage

- "pod":"npx pod-install" scripte ekleriz ve npm pod veya yarn pod diyerek çalıştırırız.

## AsyncStorage

-React native uygulamalarında kalıcı veri depolamak için basit,asenkron,anahtar-değer yapısında bir depolama sistemidir.

### Kullanım Alanları:

- Kullanıcı tercihleri,temalar, dil ayarları gibi verilerin depolanması
- e-ticaret uygulamalarında kullanıcı sepetindeki ürünlerin yerel olarak saklanması
- Çevrimdışı modda kullanılacak verilerin depolanması
- Kullanıcının oturum bilgilerinin saklanması


