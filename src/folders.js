import { showCreateScreen } from ".";

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

    let folderDescription = document.createElement('div');
    let folderDescriptionText = document.createElement('p');

    folderDescription.classList.add('hoverBubble');

    folderDescription.appendChild(folderDescriptionText);
    folderHolder.appendChild(folderDescription);

    folderDescriptionText.textContent = folder.description;
  
    // Create elements
    let folderContainer = document.createElement('div');
    let folderIcon = document.createElement('span');
    let folderName = document.createElement('a');
    let folderPlus = document.createElement('a');
    let folderDelete = document.createElement('a');
  
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

    folderName.addEventListener('mouseover', function() {
        folderDescription.style.visibility = 'visible';
    });

    folderName.addEventListener('mouseout', function() {
        folderDescription.style.visibility = 'hidden';
    });

    folderDelete.addEventListener('click', function() {
        let text = "Are You Sure You Want to Delete?";
        if (confirm(text) == true) {
            folderHolder.removeChild(folderContainer);
        }
      });

    folderPlus.addEventListener('click', function() {
        
    });
  
    // Append elements
    folderHolder.appendChild(folderContainer);
    folderContainer.appendChild(folderIcon);
    folderContainer.appendChild(folderName);
    folderContainer.appendChild(folderPlus);
    folderContainer.appendChild(folderDelete);

    showCreateScreen();
  }
  

document.getElementById("create-folder").addEventListener("submit", function(event){
    let folderName = document.getElementById("folder-name").value;
    let folderDescription = document.getElementById("folder-description").value;
    let folderPriority = document.getElementById("folderPrio").value;
    let folderForm = document.getElementById("create-folder");

    const myFolder = new Folder(folderName, folderDescription, folderPriority);
    displayFolder(myFolder);
    folderForm.reset();
    event.preventDefault();});;