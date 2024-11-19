var ul = document.getElementById("list-container")
var input = document.getElementById("inputbox")


function add(){
    
    var listitem =document.createElement("li")
    listitem.innerHTML = input.value + " <button onclick = 'del(event)'>Delete</button>"

//stupid instead of using + adding the btn u did all shit

/*
    var delbtn = document.createElement("button")
    delbtn.textContent = "Delete"

    listitem.insertAdjacentElement("beforeend", delbtn)
*/
     

    ul.append(listitem)

}

function del(event){
    event.target.parentElement.remove()
}