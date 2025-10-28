let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let mobileEmail = document.getElementById("number-email");
let password = document.getElementById("password");
const createBtn = document.getElementById("createBtn");
const createStatus = document.getElementById("createStatus");

createBtn.addEventListener("click", function(){
    if(firstName.value.trim() === "" && lastName.value.trim() === "" && mobileEmail.value.trim() ==="" && password.value.trim() === ""){ 
        createStatus.textContent = "Enter a vaild Details"
    }
    else{
        window.location.href = "verify-opay.html"
        
    }

})


