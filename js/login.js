var tentative = 5; // Cette variable contient le nombre de tentative de l'utilisateur.
function validate(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email == "fallfallou37@gmail.com" && password == "passer@123"){

        alert ("Login successfully");
        window.location = "ouvertureCompte.html"; // Redirection vers la page de l'ouverture compte
        return true
        
    }else{
        tentative --;
        alert("Il te reste "+tentative+" tentative;");
        if(tentative == 0){

        // Apres 5 tantative on desactive les champs.

            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            alert ("veuillez contacter votre administrateur ");
            return false;
        }

    }
}