
function loadPage(){

getAllProjectsAPI() //get request to retrieve all the projects

getUserId() //gets the id of user whos logged in

displayProjectsFromJson() // appends each project in the side bar

displayTasksFromJson() //appends each task in the main menu#

progressBar() //update the progress bar

    makeRequest('GET', "http://localhost:8080/getProjects")
    .then((value) => {
       ` console.log(value);
        console.log(value.userList);
        console.log(value.userList[0].projectList[0].projectId);
        console.log(value.userList[0].projectList[0].taskList[0]);
        console.log(value.userList[0].projectList[0].taskList[0].checkBox);`

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
    });

    return;

}




function makeRequest(method, url, userData) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {

            if (xhr.status >= 200 && xhr.status <= 299) {
                //console.log(xhr.responseText);
                if (xhr.responseText.length > 0) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } else {
                reject('Error!: ' + xhr.responseText);
            }
        }
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        if (method === 'POST') {
            xhr.send(JSON.stringify(userData));

        } else {
            xhr.send();
        }
    });
}