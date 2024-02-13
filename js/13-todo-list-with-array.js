//first practice
const todolist = [];

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");

  const inputName = inputElement.value;

  todolist.push(inputName);

  console.log(todolist);

  inputElement.value = "";
}
//.............................
//second practice
const todoList = [];
renderTodo();

function renderTodo() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const html = `<p>${todo}</p>`;

    todoListHTML += html;
  }
  document.querySelector(".todo-output").innerHTML = todoListHTML;
}

function addTodoList() {
  const inputElemet = document.querySelector(".js-input");

  const inputNam = inputElemet.value;

  todoList.push(inputNam);

  console.log(todoList);

  inputElemet.value = "";
  renderTodo();
}
//..............................
//rough work

// const todoList = [];

// let todoListHTML = "";

// function addTodoList() {
//   const inputList = document.querySelector(".js-input");

//   const inputListName = inputList.value;

//   todoList.push(inputListName);

//   for (
//     let inputListName = 0;
//     inputListName < todoList.length;
//     inputListName++
//   ) {
//     const todo = todoList[inputListName];
//     const html = `<p>${todo}</p>`;
//     todoListHTML += html;
//     document.querySelector(".todo-output").innerHTML = todoListHTML;
//   }
// }
