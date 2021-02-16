function progressBar(){

let form = document.getElementById("form1");
let checkedBoxes = 0;
let totalBoxes = form.elements.length;

for(i =0; i<form.elements.length; i++){
    if(form.elements[i].checked == true){
        checkedBoxes++
    }

    let progress = (checkedBoxes / totalBoxes) * 100;
    document.getElementById("progressBar").value = progress;
    progressInt = parseInt(progress)
    document.getElementById("progress1").innerText = progressInt + "%";

}

}

function strikeThrough() {

    var ele = document.getElementByClassName("task1");
    ele.style.setProperty("text-decoration", "line-through");

}

function goToPage(value){
    window.location = 'Login/' + sSettings + '.html';
}

function clickSubmitOnEnter(e, value) {
        if(e && e.keyCode == 13) {
            if(value=='task1'){
                document.getElementById('task1').focus();
            }
        document.getElementById(value).click(); 
        }
}

function panelSearch() {

    search = document.getElementById("searchbar").value;
    project = document.getElementById("sidebarId");

    if (search === "") {
        while (project.firstChild) {
            project.removeChild(project.firstChild);
        }
        appendProjectsFromFrontEnd();
        appendProjectsFromFrontEnd();
        appendProjectsFromFrontEnd();
        appendProjectsFromFrontEnd();
        return;
    }
        
    for (var i = 0; i < project.childNodes.length; i++) {
        if (!(project.children[i].children[0].innerText.includes(search))) {
            project.removeChild(project.children[i]);
        }

    }
}
