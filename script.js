// var del = document.getElementById("del")
var add = document.getElementById("add")
var cancel = document.getElementById("cancel")
var box = document.querySelector(".box")
var container = document.querySelector(".container")
var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup")
var title = document.querySelector("#title")
var author = document.querySelector("#author")
var description = document.querySelector("#description")
var addbook = document.querySelector("#addbook")
var container = document.querySelector(".container")

add.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.visibility="visible"
})
cancel.addEventListener("click",function(){
    overlay.style.display="none"
    popup.style.visibility="hidden"
    title.value=""
    author.value=""
    description.value=""
})
addbook.addEventListener("click",function(){
    var div = document.createElement("div")
    div.setAttribute("class","box")
    div.innerHTML=`<h2 class="title">${title.value}</h2>
    <h3 class="author">Author : ${author.value}</h3>
    <p class="description"> ${description.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popup.style.visibility="hidden"
    title.value=""
    author.value=""
    description.value=""
})

function del(event) {
        event.target.parentElement.remove()
}