function validate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessage = document.getElementById("errorMessage");

    errorMessage.style.color = "white";
    errorMessage.style.backgroundColor = "red";
    errorMessage.style.textAlign = "center";
    errorMessage.style.padding = "10px";
    errorMessage.style.width = "90%";
    errorMessage.style.padding = "10px";
    errorMessage.style.marginBottom = "10px";
    errorMessage.style.transition= "all .5s ease-in";


    if(user=="" && email=="" && password=="" && confirmPassword==""){
        errorMessage.innerHTML = "Please, Enter Your Data";
        return false;
    }
    else if(user.length<5 || user.length>15){
        errorMessage.innerHTML = "Please, Insert 5-15 Character in Username";
        return false;
    }
    else if(email.indexOf("@")==-1 || email.indexOf(".com")==-1){
        errorMessage.innerHTML = "Please, Enter Valid E-Mail";
        return false;
    }
    else if(password.length<8 || password.length>22){
        errorMessage.innerHTML = "Please, Insert Atleast 8 Character in Password";
        return false;
    }
    else if(password != confirmPassword){
        errorMessage.innerHTML = "Please, Matched Password";
        return false;
    }
    else{
        return true;
    }
}