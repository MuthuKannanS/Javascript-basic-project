//Selection popupbox,popupoverlay,button
var popupoverlay = document.querySelector(".popup-overlay") 
var popupbox = document.querySelector(".popup-box") 
var addpopup = document.getElementById("add-popup-button")

addpopup.addEventListener("click",function(){
	popupoverlay.style.display="block"
	popupbox.style.display="block"
	
})

//select cancel button

var cancelbutton = document.getElementById("cancel")
cancelbutton.addEventListener("click",function(){
	event.preventDefault()
	popupoverlay.style.display="none"
	popupbox.style.display="none"
})

//select container,add book,book title,book author,book description
var container = document.querySelector(".container")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var description = document.getElementById("notes")
var addbook = document.getElementById("add_book")
addbook.addEventListener("click",function(event){
	event.preventDefault()
	var div=document.createElement("div")
	div.setAttribute("class","book-container")
	div.innerHTML=`<h2>${booktitle.value}</h2>
				<h5>${bookauthor.value}</h5>
				<p>${description.value}</p>
				<button onclick="deletebook(event)">delete</button>`
	container.append(div)
	popupoverlay.style.display="none"
	popupbox.style.display="none"
})

function deletebook(event){
	event.target.parentElement.remove()
}