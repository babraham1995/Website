function whileFunction(){

    divThing = document.getElementById("mainDiv");

    // for (var i = 0; i < divThing; i++) {
    //     while (!(divThing.innerText.includes(search))) {
    //         project.removeChild(project.children[i]);
    //     }

    // }

    for (var i = 0; i < project.childNodes.length; i++) {
        while (!(project.children[i].children[0].innerText.includes(search))) {
            project.removeChild(project.children[i]);
        }

    }


    for (var i = 0; i < 11; i++) {
        while (i<10) {
            console.log('number:  ' + i);
        }

    }
    

    divThing.append("hello");


}