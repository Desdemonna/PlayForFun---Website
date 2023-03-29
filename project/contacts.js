var namee = document.getElementById("name");
var email = document.getElementById("email");
var title = document.getElementById("title");
var message = document.getElementById("message");


document.getElementById("submit").addEventListener("click", content)

function content(){
    namee.value = '';
    email.value = '';
    title.value = '';
    message.value = '';
}