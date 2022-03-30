var todos = [];
function getTodo(){
    let title = document.getElementById("todoTitle").value
    let text = document.getElementById("todoText").value
    let todo = {
        "title":title,
        "text":text
    }
   
    console.log("todo Object = ",todo);
    todos.push(todo);
    //document.getElementById("todoTitle").innerHTML = " "
    //document.getElementById("todoText").innerHTML = " "
    displayTodos()
    // let todoTitle = document.getElementById("cardTitle")
    // let todoText = document.getElementById("cardText")
    // todoTitle.innerHTML = title;
    // todoText.innerHTML = text;
}
function displayTodos(){
    
     let resultCard = document.getElementById("resultCard")
     resultCard.value = ' ';
     //let todoText = document.getElementById("cardText")
     //for(i=0;i<todos.length;i++){
        resultCard.innerHTML += `<div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${todos[todos.length-1].title}</h5>
           <p class="card-text">${todos[todos.length-1].text}</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
       </div>
       `
    //     todoTitle.innerHTML = todos[i].title;
      //   todoText.innerHTML = todos[i].text;
     //}
}
