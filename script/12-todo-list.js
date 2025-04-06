 const todolist =[]

rendertodolist();
function rendertodolist(){
    let todolistHTML= '';
    todolist.forEach((todoObject,index) => {
        const name= todoObject.name;
        const duedate= todoObject.duedate;
        // const {name,duedate} =todolist[i]; //Destructuring, same function as above two lines
        const html=`
            <div>${name}</div>
            <div>${duedate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button>
            
        `;
        todolistHTML += html;
    });
    document.querySelector(`.js-todo-list`).innerHTML= todolistHTML; 

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index)=>{
        deleteButton.addEventListener('click',()=>{
            todolist.splice(index,1);
            rendertodolist();
        });
    });
    

    /*for(let i=0;i<todolist.length;i++){
        const name= todolist[i].name;
        const duedate= todolist[i].duedate;
        // const {name,duedate} =todolist[i]; //Destructuring, same function as above two lines
        const html=`
            <div>${name}</div>
            <div>${duedate}</div>
            <button onclick="
                todolist.splice(${i},1);
                rendertodolist();
            " class="delete-todo-button">Delete</button>
            
        `;
        todolistHTML += html;
    }
    */

   
}

document.querySelector('.js-add-todo-button').addEventListener('click',() =>{
    addTodo();
});

function addTodo(){
    const inputElement= document.querySelector(`.js-name-input`);
    const name= inputElement.value;
    const dateInputElement =document.querySelector(`.js-due-date-input`);
    const duedate = dateInputElement.value;
    todolist.push({
        name: name,
        duedate: duedate
    });
    
    inputElement.value= ''; //reset text in text box
    rendertodolist();
}