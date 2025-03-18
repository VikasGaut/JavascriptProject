let div =document.querySelector(".lower");
 let task=document.querySelector("#task")
 let btn=document.querySelector("#btn")
 
 btn.addEventListener("click",(event)=>{
     event.preventDefault();
     let addTask=task.value.trim();
     if(task.value===""){
         alert("Please enter a task")
         return
     }
     let newDiv=document.createElement("div")
     let newbtn=document.createElement("button")
     newbtn.innerText="X"
     newDiv.innerText=addTask;
     div.prepend(newDiv);
     newDiv.append(newbtn)
     newDiv.classList.add("divStyle")
     task.value=""
     
     newbtn.addEventListener("click", () => {
         let confirmDelete = confirm("Are you sure you want to delete this task?");
         if (confirmDelete) {
             newDiv.remove(); // Remove the task when user confirms
         }
     });
 })