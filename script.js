// script.js
const inputBox = document.getElementById("ibox");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        inputBox.value = ''; // Clear the input field after adding the task
    }
    // inputBox.value=""
    // savetask();


}
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
    }
},false);
// function savetask()
// {
//     localStorage.setItem("data",listContainer.innerHTML);
// }
// //to display stored
// function display()
// {
//     listContainer.innerHTML=localStorage.getItem("data");
// }
// display();