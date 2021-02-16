//on buttonpress removes project from frontend 
function deleteProjectFrontEnd(){
    var taskDiv = button.parentNode;
    taskDiv.parentNode.removeChild(taskDiv);
} 

//on page startup, and on save/delete
function displayProjectsFromJson(){
    console.log("appendProjectsFromJson");
}

//on page load up displays whats in the json


function deleteProject(button) {
    var taskDiv = button.parentNode;
    taskDiv.parentNode.removeChild(taskDiv);
    //DO THE API CALL deleteProjectAPI()
}



function appendProjectsFromFrontEnd() { //replaces saveProject

    
    makeRequest('GET', "http://localhost:8080/getProjects")
    .then((value) => {
   
    for (i = 0; i <= value.userList.length - 1; i++) {

        sidebarId = document.getElementById("sidebarId");
        
        projectId = value.userList[i].projectList[0].projectId
        projectTitle = value.userList[i].projectList[0].projectTitle

        const titleDiv = document.createElement('div');
        titleDiv.className = "searchThis";
        titleDiv.innerText = projectTitle;

        const projectDiv = document.createElement('div');
        projectDiv.setAttribute('id', 'projectDiv');
        projectDiv.setAttribute('class', 'list-group-item list-group-item-action bg-light">Dashboard2</a>');

        const projectIdDiv = document.createElement('div');
        projectIdDiv.style.display = "none";
        projectIdDiv.innerText = projectId;


        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.id = "deleteButton";
        deleteBtn.innerText = "delete";
        deleteBtn.addEventListener('click', (ev) => {
            deleteProject(ev.target)
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
document.getElementById('projectName').value = '' 
}