const inputBox = document.getElementById("Todo-input")
const container = document.getElementById("listcontainer")

function addtodo(){
    if(inputBox.value === ''){
        alert("Enter something to add To-Do")
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        container.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = ''
    savedata()
}
container.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false);
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showdata();

const modal = document.getElementById("MyNodal")
const openBtn = document.getElementById("addTodobtn")
const cancelBtn = document.getElementById("CancelModal")

openBtn.onclick = function() {
    modal.style.display = "flex";
}
cancelBtn.onclick = function() {
    modal.style.display = "none";
}

const input = document.getElementById("ModTodo")
function ModalAddTodo(){
    if(input.value == ''){
        alert("Enter Todo!")
    }else{
        const li = document.createElement("li");
        li.innerHTML = input.value;
        container.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        input.value = '';
        modal.style.display = "none";
    }
}