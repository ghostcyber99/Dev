'use strict'
let tasks = document.querySelector('#tasks')

document.querySelector('.add-list').addEventListener('click', function(){
    console.log('this is a test');
    const input = document.querySelector('.enter-list').value;
    console.log(input);

    if(input !== 0){
        console.log(input);
        let newItem = document.createElement('div');
        newItem.classList.add(input);
        newItem.innerHTML = `<div class="task">
                        <div class="content">
                            <input 
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
        tasks.appenchild(newItem);
        input.value = '';
    } else{
        alert('Please enter a task')
    }
})
