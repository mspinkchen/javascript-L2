
"use strict";

function createToDo(){
  var todo = document.createElement("div"); 
  var span = document.createElement("span"); 
  var input = document.getElementById("input").value;
  if (input == ""){
    input = "廢文一篇";
  }
  span.innerHTML = input;
  todo.appendChild(span);

  var replaceButton = document.createElement("button"); 
  replaceButton.onclick = function(){
    var input = document.getElementById("input").value;
    if (input == ""){
      alert("沒有輸入文字");
      return;
    }
    this.parentNode.firstChild.innerHTML = input;
    document.getElementById("input").value = "";
  }
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);

  var removeButton = document.createElement("button");

  removeButton.onclick = function(){
    if (window.confirm("確定刪除？")){
      this.parentNode.firstChild.style.color = "red";
      todo.removeChild(removeButton);
      todo.removeChild(replaceButton);
    } 
  }
    removeButton.textContent = "V";
    todo.appendChild(removeButton);
    document.getElementById("todolist").appendChild(todo);
    document.getElementById("input").value = "";


}