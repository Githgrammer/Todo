/*Here starts the program
after declaring and getting the input,
created a class where all the inputs will be located
also creating an id for each task created, that is inside
the classes.js file*/ 

let desc_title =document.getElementById("issue_title");
let description =document.getElementById("issue");
let send= document.getElementById("boton");
let divi= document.getElementById("list");
let seve= document.getElementById("issueSeverity");
let done= document.getElementById("check")
const date= new Date();
let test=[];

/*creating the event that will create our html element
including the button that will delete them*/

send.addEventListener("click", (e)=>{
    e.preventDefault();
let newIssue = new Issue(desc_title.value,description.value,seve.value);

let nuevoDiv= document.createElement("div")
nuevoDiv.classList.add("todo")

let title = document.createElement("h3");
title.innerText = newIssue._titulo;
nuevoDiv.appendChild(title)

let severity = document.createElement("p");
severity.innerText= newIssue._severity;
nuevoDiv.appendChild(severity);

let parrafo = document.createElement("p");
parrafo.innerText= newIssue._descripcion;
nuevoDiv.appendChild(parrafo);

let boton = document.createElement("button")
boton.innerText="Done"
boton.classList.add("done-button")
nuevoDiv.appendChild(boton);

/*Changing colors depending of the severity choosed*/
if(seve.value == "High"){
    severity.style.color="red";
    }

   else if(seve.value == "Medium"){
        severity.style.color="orange";
        }

/*Checking if there's input or not, if it is, procceding*/
if(desc_title.value === "" || description.value === ""){
alert("fill all the inputs")
}
else{
 let task=divi.appendChild(nuevoDiv);
    desc_title.value="";
    description.value="";
    seve.value="Low";
}




/*Finally the button to remove the item clicked by the user*/
boton.addEventListener("click" ,()=>{
    /*here we push all the new info before removing it */
    test.push(nuevoDiv);
    nuevoDiv.remove();
})


/*Button to check all the done task */

done.addEventListener("click",()=>{
    /*loop through all the elements inside
        the array created and pushed below and show again all the task 
        that has been done */
    test.forEach( div => {
        divi.appendChild(div)
    });
    
    })
    

})


