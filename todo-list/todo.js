let input = document.querySelector('.enter-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('#tasks')

//add new task to list 
addBtn = addEventListener('click', () => {
    if(input.value.trim() !== 0){
        let newItem = document.createElement('div');
        newItem.classList.add('task');
        newItem.innerHTML = `   <div class="task">
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
                        </div>`

        tasks.appendChild(newItem);
        input.value = '';
    }else {
        alert('Please enter a task')
    }
})

//delete item from list 
tasks.addEventListener('click', function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
})