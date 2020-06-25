//Control de validation
function validationClient(){
    var message = document.getElementById("message_error");
    var text;
    message.style.padding = "7px";
    message.style.color = "red";

    if(document.getElementById("nom").value == ""){
        text = "Veuillez reseigner le numero du compte";
        message.innerHTML = text;
        return false;
    }
}




function verifTypeClient(){
    var typeClient = document.getElementById("selectClient").value;

    if(typeClient === "morale"){
       // alert("ok");
       // Si on a un client moral on desactive les autres champs.
       document.getElementById("nom").disabled = true;
       document.getElementById("prenom").disabled = true;
       document.getElementById("adresse").disabled = true;
       document.getElementById("tel").disabled = true;
       document.getElementById("email").disabled = true;
       document.getElementById("salaire").disabled = true;
       document.getElementById("profession").disabled = true;

       document.getElementById("ClientStaut").style.display = "none";
    }
    if(typeClient === "pysique"){
        // alert("ok");
        // Si on a un pysique on desactive tous les champs et on test son staut.
        document.getElementById("nom").disabled = true;
        document.getElementById("prenom").disabled = true;
        document.getElementById("adresse").disabled = true;
        document.getElementById("tel").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("salaire").disabled = true;
        document.getElementById("profession").disabled = true;
        document.getElementById("raisonsocial").disabled = true;

        document.getElementById("adresse_employeur").disabled = true;
        document.getElementById("nom_employeur").disabled = true;
        document.getElementById("num_id").disabled = true;

        alert("Veuillez spécifier votre statut svp !!!");

        document.getElementById("ClientStaut").style.display = "block";
        
     }
}



function verifStaut(){

    //S'il est coché, on récupère la valeur du bouton radio.
    if (document.getElementById('salarie').checked) {
        statutClient = document.getElementById('salarie').value;
        if(statutClient === "salarie"){
            //alert("ok");
            document.getElementById("nom").disabled = false;
            document.getElementById("prenom").disabled = false;
            document.getElementById("adresse").disabled = false;
            document.getElementById("tel").disabled = false;
            document.getElementById("email").disabled = false;
            document.getElementById("salaire").disabled = false;
            document.getElementById("profession").disabled = false;
            document.getElementById("raisonsocial").disabled = false;
    
            document.getElementById("adresse_employeur").disabled = false;
            document.getElementById("nom_employeur").disabled = false;
            document.getElementById("num_id").disabled = false;
            
        }
    }

     //S'il est coché, on récupère la valeur du bouton radio.
     if (document.getElementById('nonsalarie').checked) {
        statutClient = document.getElementById('nonsalarie').value;
        if(statutClient === "nonsalarie"){
            //alert("non_ok");
            document.getElementById("nom").disabled = false;
            document.getElementById("prenom").disabled = false;
            document.getElementById("adresse").disabled = false;
            document.getElementById("tel").disabled = false;
            document.getElementById("email").disabled = false;

            document.getElementById("salaire").disabled = true;
            document.getElementById("profession").disabled = true;
            document.getElementById("raisonsocial").disabled = true;
            document.getElementById("adresse_employeur").disabled = true;
            document.getElementById("nom_employeur").disabled = true;
            document.getElementById("num_id").disabled = true;
        }
    }

    

}