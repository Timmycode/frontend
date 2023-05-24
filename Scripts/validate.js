var attempts = 3;

function validate(){
    var userName = document.getElementById("username").value;
    var password = document.getElementById("psw").value;

    if(userName == "Frontend" && password == "java"){
        alert("Welcome back " + userName + ", it been a While");
        window.location = "success.html";
        return false;
    } 
    else {
        attempts--;
        alert("You have just "+attempts+" attempts left of 3");
        window.location = "index.html";

        if(attempts == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("psw").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}