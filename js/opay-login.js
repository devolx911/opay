const loginBtn = document.getElementById("loginBtn");
let numberEmail = document.getElementById("number-email");
let password = document.getElementById("password");
const loginStatus = document.getElementById("loginStatus");


loginBtn.addEventListener("click", function(){
    let loginNumber = numberEmail.value;
    loginNumber =Number(loginNumber);
    let loginPassword = password.value;
    
    if(loginNumber === 2349112088120 && loginPassword === "popsmoke"){

        window.location.href = "opay.html";  
    }
    else{
        loginStatus.textContent = "Invaild Logins";
    }
    
})
