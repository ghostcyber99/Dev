'use strict'
let tasks = document.querySelector('#tasks')

document.querySelector('.add-list').addEventListener('click', function(){
    let input = document.querySelector('.enter-list').value;

    if(input.trim()){
        let newItem = document.createElement('div');
        newItem.innerHTML = `<div class="task">
                        <div class="content">
                            <input 
                            value='${input}'
                            type="text"
                            class="text"
                            readonly
                            /> 
                        </div>
                        <div class="actions">
                            <button class="edit">Edit</button>
                            <button class="delete">Delete</button>
                        </div>
                    </div>`
        tasks.appendChild(newItem);
        input = '';
    } else{
        alert('Please enter a task')
    }
})
