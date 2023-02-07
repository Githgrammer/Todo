let taskInput = document.getElementById("taskInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");
let newTask= document.getElementsByClassName(".nuevo");
let done= document.getElementById("done");
let list= [];
addTask.addEventListener("click",()=>{


  if(taskInput.value ===""){
return;
  }


  else{
    list.push(taskList.innerHTML+=`<div id="newerTask" class="nuevo">
    <span>${taskInput.value}</span> 
    <img id="done" class="hecho" src="check.png" alt="done">
    </div>` );

    taskInput.value="";
  }


});

