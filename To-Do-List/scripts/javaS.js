var inputTask = document.querySelector("#new-task");
var btnAdd = document.getElementsByTagName("button")[0];
var incompeleteTsk = document.querySelector("#incomplete-tasks");
var completedTsk = document.querySelector("#completed-tasks");


var createNewTaskElement = function(taskstr) {
  var listItem = document.createElement("li");
    
  var boxcheck = document.createElement("input");
  var label = document.createElement("label");                         
  var editInput = document.createElement("input"); 
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button"); 
  
  
  boxcheck.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = taskstr;
  

  listItem.appendChild(boxcheck);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  return listItem;
}

var taskAdd = function() {
  console.log("Add task");

  var listItem = createNewTaskElement(inputTask.value); 

  if(inputTask.value.length > 0) { incompeleteTsk.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  inputTask.value = "";
  }
}


// Edit an existing task
var editTask = function() {
  console.log("Edit task");
  
  var listItem = this.parentNode;
  var editButton = this;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  
  var containsClass = listItem.classList.contains("editMode");

  if(containsClass) {

      label.innerText = editInput.value;
      editButton.innerText = "Edit";
   } else {

     editInput.value = label.innerText;
     editButton.innerText = "Save";
      
   } 

    listItem.classList.toggle("editMode");
    
}

var deleteTask = function() {
  console.log("Delete task");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
}


var taskCompleted = function() {
  console.log("Task complete");

   var listItem = this.parentNode;
   completedTsk.appendChild(listItem); 
   bindTaskEvents(listItem, taskIncomplete);
}



var taskIncomplete = function() {
   console.log("Task incomplete"); 

  var listItem = this.parentNode;
  incompeleteTsk.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");

   var checkBox = taskListItem.querySelector("input[type=checkbox]");
   var editButton = taskListItem.querySelector("button.edit");
   var deleteButton = taskListItem.querySelector("button.delete");
   

    editButton.onclick = editTask;
  

    deleteButton.onclick = deleteTask;
  
  

    checkBox.onchange = checkBoxEventHandler;
  
}
 
btnAdd.addEventListener("click", taskAdd);

for (var i = 0; i < incompeleteTsk.children.length; i++) {

  bindTaskEvents(incompeleteTsk.children[i], taskCompleted);
}

for (var i = 0; i < completedTsk.children.length; i++) {

  bindTaskEvents(completedTsk.children[i], taskIncomplete);
};

      
