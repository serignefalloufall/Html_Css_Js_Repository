document.getElementById("compteForm").addEventListener("submit", function(e){

    var inputs = document.getElementById("compteForm").getElementsByTagName("input");
   //inputs=this.getElementsByTagName("input");
    var error
    for(var i = 0; i < inputs.length; i++){
        if(!inputs[i].value){
            error = "Veuillez reseigner tous les champs";
        }
    }

    if(error){
        e.preventDefault();//empecher le comportement pardefaut du formulaire
        document.getElementById("error").innerHTML = error;
        return false;
    }else{
        alert('form ok !! ');
    }
  
});

   function myNewClientFunction() {
    var x = document.getElementById("NewClent");
    var y = document.getElementById("AncClient");
    var z = document.getElementById("emp");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
      } else {
        x.style.display = "none";
      }
  }

  function myOldClientFunction() {
   
        var x = document.getElementById("AncClient");
        var y = document.getElementById("NewClent");
        var z = document.getElementById("emp");
        
        if (x.style.display === "none") {
          x.style.display = "block";
          y.style.display = "none";
          z.style.display = "none";
        } else {
          x.style.display = "none";
          y.style.display = "block";
        }
}


   /*   // on réccupère l'élément form.
    var formulaire = document.getElementById('formulaire');
 
    // Condition pour afficher/cacher le formulaire en fonction de son état
    if(formulaire.style.display == 'block'){
        formulaire.style.display = 'none';
    }else{
        formulaire.style.display = 'block';
    }
}*/
