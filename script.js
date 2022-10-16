const taskName = document.querySelector('#taskName');
const addButton = document.querySelector('#addTask');
const container = document.querySelector('#container');


addButton.onclick = function() {

    if (taskName.value.trim().length < 1) {
        alert('Give your task some name');
    }
    else {

    //create div "box" in "container"
    const box = document.createElement('div');
    box.classList.add('box');
    container.append(box);

    //create h2 "header" in "box"
    const header = document.createElement('h2');
    header.setAttribute('id', 'header');
    header.innerHTML = taskName.value;
    box.append(header);



    //create button "check"
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('checkBox');
    box.append(checkBox);

    const currentCheck = document.querySelectorAll('.checkBox');

            
    for (let k = 0; k < currentCheck.length; k++) {
        currentCheck[k].onclick = function() {

            if (currentCheck[k].checked) {
                //box element
                this.parentElement.style.backgroundColor = '#24B670';
                this.previousElementSibling.style.textDecoration = 'line-through';

                //this checkbox
                this.style.backgroundColor = '#FFFFFF';
                this.style.color = '#24B670';

                //delete button
                this.nextElementSibling.style.backgroundColor = '#FFFFFF';
                this.nextElementSibling.firstChild.style.color = '#24B670';
            }
            else {
                //box element
                this.parentElement.style.backgroundColor = '#FFFFFF';
                this.previousElementSibling.style.textDecoration = 'none';

                //this checkbox
                this.style.backgroundColor = '#24B670';
                this.style.color = '#FFFFFF';

                //delete button
                this.nextElementSibling.style.backgroundColor = '#24B670';
                this.nextElementSibling.firstChild.style.color = '#FFFFFF';
            }
        }
    };

    //create button "delete" in box
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    box.append(deleteButton);

    //create i/icon for "delete"
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('far', 'fa-trash-alt');
    deleteButton.append(deleteIcon);



    //delete "box" function
    const currentTask = document.querySelectorAll('.delete');
    for (let i = 0; i < currentTask.length; i++) {
        currentTask[i].onclick = function() {
            this.parentElement.remove();
        }
    };

    //reset "taskName" value
    taskName.value = '';
}
    
};