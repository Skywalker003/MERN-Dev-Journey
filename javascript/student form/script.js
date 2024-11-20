var table = document.getElementById("studentTable").querySelector("tbody")

document.getElementById("studentForm").onsubmit = function (save) {
    save.preventDefault(); // Prevent form from refreshing the page
    display();
};

function display(){
//selecting and getting elements
var name = document.getElementById("name")
var age = document.getElementById("age")
var gender = document.querySelector('input[name="gender"]:checked')
var course = document.getElementById("course")
var email = document.getElementById("email")

//creating tr
var newRow = document.createElement("tr")
newRow.innerHTML = '<td>' + name.value + '</td>'
+ '<td>' + age.value + '</td>'
+ '<td>' + course.value + '</td>'
+ '<td>' + gender.value + '</td>'
+ '<td>' + email.value + '</td>'
+ "<td><button onclick='deleteRow(this)'>Delete</button></td>";

// Append the new row to the table's <tbody>

table.appendChild(newRow);

// Reset the form inputs
document.getElementById("studentForm").reset();
}

function deleteRow(button){
    var row = button.parentElement.parentElement;
    row.remove();
}