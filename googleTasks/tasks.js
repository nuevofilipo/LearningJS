// Model section, here comes everything that is associated with the data, it belongs to the MVC code managing principle-------------------------------------------

let todos;
const savedTodos = JSON.parse(localStorage.getItem("todos"));

if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [
    {
      title: "get groceries",
      dueDate: "2023-10-04",
      id: "id1",
    },
    {
      title: "drink juice",
      dueDate: "2023-15-04",
      id: "id2",
    },
    {
      title: "clean house",
      dueDate: "2023-10-04",
      id: "id3",
    },
  ];
}

//ads new todo
function createTodo(title, dueDate) {
  const id = "" + new Date().getTime();
  todos.push({ title: title, dueDate: dueDate, id: id });
  saveTodos();
}

//removes a todo
function removeTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// View section-------------------------------------------------

function render() {
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach(function (todo) {
    const divElement = document.createElement("div");

    const inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");

    const dateUpdater = document.createElement("input");
    dateUpdater.setAttribute("type", "date");

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";

    const updateButton = document.createElement("button");
    updateButton.innerText = "Update";

    inputBox.id = "input-" + todo.id;
    dateUpdater.id = "dateEdit-" + todo.id;

    if (todo.isEditing === true) {
      divElement.appendChild(inputBox);
      divElement.appendChild(dateUpdater);
      divElement.appendChild(updateButton);
    } else {
      divElement.innerText = todo.title + " " + todo.dueDate;
      divElement.appendChild(editButton);
    }

    divElement.id = todo.id;

    editButton.id = todo.id;
    editButton.onclick = editTodo;

    updateButton.id = todo.id;
    updateButton.onclick = updateTodo;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    divElement.appendChild(deleteButton);
    deleteButton.id = todo.id;
    deleteButton.onclick = deleteTodo;

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(divElement);
  });
}

render();

//Controller section --------------------------------------------
function addTodo() {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;

  createTodo(title, dueDate);
  render();
}

function updateTodo(event) {
  const updateButton = event.target;
  const idToUpdate = updateButton.id;

  const inputBox = document.getElementById("input-" + idToUpdate);
  const title = inputBox.value;
  const updatedDate = document.getElementById("dateEdit-" + idToUpdate);
  const dueDate = updatedDate.value;

  console.log(title, dueDate);

  todos.forEach(function (todo) {
    if (todo.id === idToUpdate) {
      todo.title = title;
      todo.dueDate = dueDate;
      todo.isEditing = false;
    }
  });
  saveTodos();
  render();
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);
  render();
}

function editTodo(event) {
  const editButton = event.target;
  const idToEdit = editButton.id;

  todos.forEach(function (todo) {
    if (todo.id === idToEdit) {
      todo.isEditing = true;
      console.log("calling edit function");
    }
  });
  render();
}
