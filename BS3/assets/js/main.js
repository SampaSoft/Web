
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
        } 
		else 
		{
			$('#msgErro').show("slow");
			
			window.setTimeout(function(){
				$('#msgErro').hide("slow");
			}, 5000);
			
            return false;
        }
    }
