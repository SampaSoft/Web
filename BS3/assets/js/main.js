
    function validate(){

        var login = document.getElementById("inputlogin").value;
        var senha = document.getElementById("inputPassword").value;

    
        if (login == "admin" && senha == "admin") {
            //alert("Login successfully");
            //window.location="../examples/dashboard.html";
            window.location.replace("dashboard.html");
            return true;
        //else if (login == "" && senha == "") {
          //  alert("Please fill all the text!")
            //return false;
        } else {
            // attempt = attempt - 1;// Decrementing by one.
            alert("Login or password is wrong! Try again...");
            // Disabling fields after 3 attempts.
            // if( attempt == 0){
            // document.getElementById("inputlogin").disabled = true;
            //document.getElementById("inputPassword").disabled = true;
            //document.getElementById("submit").disabled = true;
            return false;
        }
    }
