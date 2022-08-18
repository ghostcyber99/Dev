'use strict'
let tasks = document.querySelector('#tasks')
let deleteBtn = document.querySelector('.delete');

//add new task 

//saving to local storage 

document.querySelector('.add-list').addEventListener('click', function(){
    let input = document.querySelector('.enter-list').value;
    // let deleteBtn = document.querySelector('.delete');

    if(input.trim()){
        let newItem = document.createElement('div');
        newItem.innerHTML = `<div class="task" id="edit">
                        <div class="content" >
                            <input 
                            value='${input}'
                            type="text"
                            class="text"
                            /> 
                        </div>
                        <div class="actions">
                            <button class="save">Save</button>
                            <button class="delete">Delete</button>
                        </div>
                    </div>`
        tasks.appendChild(newItem);
        input = '';
    } else{
        alert('Please enter a task')
    }

    //saving the task to local storage
    document.querySelector('.save').addEventListener('click', function(){
        console.log('this is a test');
    })

    //deleting the tasking 
    document.querySelector('.delete').addEventListener('click', function(){
        let elem = document.getElementById('edit');
        elem.parentNode.removeChild(elem);
        return false;
    })
    

});



    

