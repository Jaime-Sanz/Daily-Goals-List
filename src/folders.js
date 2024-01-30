import { showCreateScreen, showToDoScreen } from ".";

let folders = []; // Array to store multiple folders
let selectedFolder = null; // Variable to track the currently selected folder

export class Folder {
  constructor(name, description, priority) {
    this.name = name;
    this.description = description || '';
    this.priority = priority || '';
    this.todos = [];
  }

  addTodo(title, description, dueDate, priority) {
    const newTodo = { title, description, dueDate, priority };
    this.todos.push(newTodo);
    return newTodo;
  }
}

function displayFolder(folder) {
  let folderHolder = document.getElementById('folderHolder');
  let todoGoalsPanel = document.getElementById('goals-panel');
  let todoContainer = document.getElementById('todo-container-panel');
  let folderNameTitlePanel = document.getElementById('folder-name-panel');

  // Create elements
  let folderContainer = document.createElement('div');
  let folderIcon = document.createElement('span');
  let folderName = document.createElement('a');
  let folderPlus = document.createElement('a');
  let folderDelete = document.createElement('a');

  let folderDescription = document.createElement('div');
  let folderDescriptionText = document.createElement('p');

  folderDescription.classList.add('hoverBubble');

  folderDescription.appendChild(folderDescriptionText);
  folderHolder.appendChild(folderDescription);

  folderDescriptionText.textContent = folder.description;

  // Set content and attributes
  folderName.textContent = folder.name;
  folderIcon.textContent = 'folder';
  folderPlus.textContent = 'add';
  folderDelete.textContent = 'delete';
  folderName.href = '#';
  folderPlus.href = '#';
  folderDelete.href = '#';
  folderPlus.classList.add('material-symbols-outlined');
  folderIcon.classList.add('material-symbols-outlined');
  folderDelete.classList.add('material-symbols-outlined');

  // Apply color based on priority
  if (folder.priority === 'High') {
    folderIcon.style.color = 'red';
  } else if (folder.priority === 'Normal') {
    folderIcon.style.color = 'green';
  } else {
    folderIcon.style.color = 'blue';
  }

  // Add a click event listener to the folder container for selecting the folder
  folderContainer.addEventListener('click', function () {
    selectedFolder = folder;
    folderNameTitlePanel.textContent = folder.name;
    console.log("Selected Folder:", selectedFolder);
    displayTodos(selectedFolder);
  });

  folderName.addEventListener('mouseover', function () {
    folderDescription.style.visibility = 'visible';
  });

  folderName.addEventListener('mouseout', function () {
    folderDescription.style.visibility = 'hidden';
  });

  folderDelete.addEventListener('click', function () {
    let text = "Are You Sure You Want to Delete?";

    if (confirm(text) == true) {
      // Find the index of the selected folder in the folders array
      const folderIndex = folders.indexOf(folder);
      if (folderIndex !== -1) {
        // Remove the folder from the folders array
        folders.splice(folderIndex, 1);
      }

      // Remove the folderContainer from the folderHolder
      folderHolder.removeChild(folderContainer);

      // Remove the todos from the selected folder
      folder.todos = [];

      // Update the displayTodos function to clear the goalsPanel
      displayTodos(selectedFolder);

      // Optional: Reset the selectedFolder to null
      selectedFolder = null;

      saveDataToJson();
    }
  });


  folderPlus.addEventListener('click', function () {
    showToDoScreen();
  });

  // Append elements
  folderHolder.appendChild(folderContainer);
  folderContainer.appendChild(folderIcon);
  folderContainer.appendChild(folderName);
  folderContainer.appendChild(folderPlus);
  folderContainer.appendChild(folderDelete);

  // Add the current folder to the array
  folders.push(folder);
  if (folders.length < 1 && !selectedFolder) {
    showCreateScreen();
  }
}

function displayTodos(folder) {
  let goalsPanel = document.getElementById('todo-container-panel');

  goalsPanel.textContent = ''; // Clear the existing todos

  folder.todos.forEach(todo => {
    let todoContainer = document.createElement('div');
    let todoTitle = document.createElement('h3');
    let todoDescription = document.createElement('p');
    let todoDueDate = document.createElement('p');
    let todoPriority = document.createElement('p');
    let todoErase = document.createElement('button');

    todoContainer.classList.add('todo-container');
    todoTitle.classList.add('todo-title');
    todoDescription.classList.add('todo-description');
    todoDueDate.classList.add('todo-duedate');
    todoPriority.classList.add('todo-prio');
    todoErase.classList.add('todo-erase');


    if(todo.priority === "High"){
      todoContainer.style.backgroundColor = "#fd5c63";
      todoErase.classList.add('button-bg-red')
    } else if (todo.priority === "Normal") {
      todoContainer.style.backgroundColor = "#00FA9A";
      todoErase.classList.add('button-bg-green')
    } else {
      todoContainer.style.backgroundColor = "#89CFF0";
      todoErase.classList.add('button-bg-blue')
    }

    console.log(todo.priority);

    todoTitle.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDueDate.textContent = 'Due Date: ' + todo.dueDate;
    todoErase.textContent = "Erase";
    todoErase.onclick = function () {
      // Find the index of the todo in the folder's todos array
      const todoIndex = folder.todos.indexOf(todo);
      if (todoIndex !== -1) {
        // Remove the todo from the folder's todos array
        folder.todos.splice(todoIndex, 1);
      }

      // Remove the todoContainer from the goalsPanel
      goalsPanel.removeChild(todoContainer);

      saveDataToJson();
    };

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDescription);
    todoContainer.appendChild(todoDueDate);
    todoContainer.appendChild(todoPriority);
    todoContainer.appendChild(todoErase);

    goalsPanel.appendChild(todoContainer);
  });
}

document.getElementById("create-folder").addEventListener("submit", function (event) {
  let folderName = document.getElementById("folder-name").value;
  let folderDescription = document.getElementById("folder-description").value;
  let folderPriority = document.getElementById("folderPrio").value;
  let folderForm = document.getElementById("create-folder");

  const newFolder = new Folder(folderName, folderDescription, folderPriority);
  displayFolder(newFolder);
  folderForm.reset();
  saveDataToJson();
  event.preventDefault();
});

document.getElementById("create-todo").addEventListener("submit", function (event) {
  let todoTitle = document.getElementById("todo-title").value;
  let todoDescription = document.getElementById("todo-description").value;
  let todoDate = document.getElementById("todo-date").value;
  let todoPrio = document.getElementById("todo-prio").value;

  if (selectedFolder) {
    selectedFolder.addTodo(todoTitle, todoDescription, todoDate, todoPrio);
    displayTodos(selectedFolder);
    saveDataToJson();
    showToDoScreen();
  } else {
    console.error("No folder selected.");
  }
  event.preventDefault();
});

// Function to convert data to JSON string
function saveDataToJson() {
  const dataToSave = {
    folders: folders,
    selectedFolder: selectedFolder
  };

  const jsonString = JSON.stringify(dataToSave);

  console.log('Saving data to JSON:', jsonString);

  // Save the JSON string to localStorage
  localStorage.setItem('yourAppData', jsonString);
}

// Function to load data from JSON string
// Function to load data from JSON string
function loadDataFromJson() {
  console.log('Loading data from JSON');

  const jsonString = localStorage.getItem('yourAppData');
  console.log('Retrieved JSON string:', jsonString);

  if (jsonString) {
    try {
      const loadedData = JSON.parse(jsonString);

      // Create a temporary array to store loaded folders
      const loadedFolders = [];

      // Load the data back into your application variables
      if (loadedData.folders && Array.isArray(loadedData.folders)) {
        loadedData.folders.forEach(folderData => {
          // Check if a folder with the same name already exists
          const existingFolder = loadedFolders.find(folder => folder.name === folderData.name);

          if (existingFolder) {
            // Folder already exists, update its properties
            existingFolder.description = folderData.description;
            existingFolder.priority = folderData.priority;

            // Clear existing todos in the folder
            existingFolder.todos = [];

            // Add todos from loaded data
            folderData.todos.forEach(todoData => {
              existingFolder.addTodo(todoData.title, todoData.description, todoData.dueDate, todoData.priority);
            });
          } else {
            // Folder doesn't exist, create a new one
            const newFolder = new Folder(folderData.name, folderData.description, folderData.priority);

            // Add todos from loaded data
            folderData.todos.forEach(todoData => {
              newFolder.addTodo(todoData.title, todoData.description, todoData.dueDate, todoData.priority);
            });

            // Add the new folder to the temporary array
            loadedFolders.push(newFolder);

            // Display the new folder
            displayFolder(newFolder);
          }
        });
      }

      // Clear existing folders and update with loaded data
      folders = loadedFolders;

      selectedFolder = loadedData.selectedFolder || null;

      // Update the UI as needed
      // For example, you might want to re-render the todos
      if (selectedFolder) {
        displayTodos(selectedFolder);
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }
}


// Call the loadDataFromJson function when the page loads
window.addEventListener('load', loadDataFromJson);

window.addEventListener('beforeunload', function () {
  saveDataToJson();
});
