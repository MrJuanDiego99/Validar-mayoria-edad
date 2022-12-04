$(document).ready(function () {
    $("#registrar").click(function () { 

        let n = 0;
        let i = 18;
        let nom = " ";

        n = parseInt($("#txteda").val());
        nom = String ($("#txtnom").val());

        if (n<i){
            alert(nom + " tiene " + n + " años y es menor de edad.");
        }else{
            alert(nom + " tiene " + n + " años y es mayor de edad.");
        }
    });
});