function goToPage(pageName){
    window.location = 'Login/' + pageName + 'html';
}

function panelSearch() {
    var children = document.getElementsByClassName("searchThis");
    search = document.getElementById("searchbar").value;

    if (search === "") {
        var myNode = document.getElementById("sidebarId");

        myNode.innerText = "";
        printProjects()
        return;
    }

    for (var i = 0; i < children.length; i++) {

        console.log(children[i].innerText);
        while (children[i].innerText != search) {
            if (children[i].innerText != search) {
                children[i].parentNode.parentNode.removeChild(children[i].parentNode);
            }
        }
    } 
}

function addTask() { //when you make a task initially
    appendTaskFromTextBox(); //modifies frontend and adds it to a form
}

function saveProject(){ //replaced appendProject
 updateProjectsAPI();
 getProjectsAPI();
//  appendProjectsFromFrontEnd() //modifies frontend 
 
}

function deleteTask(button) {
    deleteTaskFrontEnd();
    
}

//do we delete and then get or just delete and modify frontend
function deleteProject(button) {
    deleteProjectAPI();
    getProjectAPI();
    deleteProjectFrontEnd();

}
