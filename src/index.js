import '/src/style.css';

export function closePanel() {
    document.getElementById("folders-panel").style.width = "0%";
    document.getElementById("goals-panel").style.width = "100%";
    document.getElementById("three-lines").style.visibility = "visible";
    document.getElementById("new-folder").style.visibility = "hidden";
}

export function openPanel() {
    document.getElementById("new-folder").style.visibility = "visible";
    document.getElementById("folders-panel").style.width = "20%";
    document.getElementById("goals-panel").style.width = "80%";
    document.getElementById("three-lines").style.visibility = "hidden";
    document.getElementById("new-folder").style.visibility = "visible";
}

export function showCreateScreen() {
    let formVis = document.getElementById("create-form");
    let folderForm = document.getElementById("create-folder");

    if (formVis.style.visibility === "visible") {
        formVis.style.visibility = "hidden";
        folderForm.reset();
    } else {
        formVis.style.visibility = "visible";
    }
}

export function showToDoScreen() {
    let formVis = document.getElementById("todo-form");
    let folderForm = document.getElementById("create-todo");

    if (formVis.style.visibility === "visible") {
        formVis.style.visibility = "hidden";
        folderForm.reset();
    } else {
        formVis.style.visibility = "visible";
    }
}
