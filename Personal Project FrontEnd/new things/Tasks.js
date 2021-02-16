function displayTasksFromJson(){
    console.log("displayTasksFromJson");
}

//on button press removes task from form and from frontend
function deleteTaskFrontEnd(){
    var taskDiv = button.parentNode;
    taskDiv.parentNode.removeChild(taskDiv);
}

//on button press adds whats in the textbox to fronnt and a form 
function appendTaskFromTextBox(){ //replaces addTask
    var progressChecked = 0; 
    let progressTotal = 0;

    let completeStatus= false;
    let form = document.getElementById("form1");
    let member = document.getElementById("task1").value;
    if (member.length == 0) {
        return;
    }
    const childPara = document.createElement('p');
    childPara.setAttribute("class", "deleteMe");
    childPara.setAttribute("id", progressTotal);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("class", "deleteMe");

    progressTotal++  
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('click', (ev) => {
        if (ev.target.checked) {
          ev.target.parentElement.style.textDecoration = "line-through";
            progressChecked++
            completeStatus= true;
            task = {"taskContent": member, "checked": completeStatus};
        } else {
            ev.target.parentElement.style.textDecoration = "none";
            progressChecked--
            completeStatus= false;
            task = {"taskContent": member, "checked": completeStatus};
        }
        progressBar(progressChecked, progressTotal)
    });

    childPara.innerText =  member;
    childPara.append (checkBox);  
    form.appendChild(childPara);
    document.getElementById('task1').value = '' 
    progressBar(0, 0);
    task = {"taskContent":  member, "checked": completeStatus};
    userData1.push(task); 
}


function appendTasksFromJson() {
    let progressChecked = 0;
    var progressTotal = 0; 

    for (i = 0; i <= value.length - 1; i++) {
        sidebarId = document.getElementById("sidebarId");
        
        // createProjectDiv()
        projectId = value[i].projectId;
        projectTitle = value[i].projectName;

        const titleDiv = document.createElement('div');
        titleDiv.className = "searchThis";
        titleDiv.innerText = projectTitle;

        const projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'list-group-item list-group-item-action bg-light">Dashboard2</a>');

        const projectIdDiv = document.createElement('div');
        projectIdDiv.style.display = "none";
        projectIdDiv.innerText = projectId;


        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.id = "deleteButton";
        deleteBtn.innerText = "delete";
        deleteBtn.addEventListener('click', (ev) => {
            deleteTask(ev.target)
            ev.stopPropagation();
        });


        projectDiv.addEventListener('click', (ev) => {
            var myNode = document.getElementById("form1");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);

            }
            printSavedProject(projectIdDiv.innerText, ev.target)
    
        });

        projectDiv.append(titleDiv);
        projectDiv.append(projectIdDiv);
        projectDiv.append(deleteBtn);
        sidebarId.append(projectDiv)

    }
}