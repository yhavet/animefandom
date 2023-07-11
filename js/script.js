alert("condicciones si no eres mayor de edad , no podras acceder");

var usuario = window.prompt("ingrese su nombre porfavor")
{
    alert("hola " +usuario); 
}

var usuario = window.prompt("ingrese su edad porfavor"); 

var entrada = window.confirm("¿ deseas entrar ?")

if (entrada ==true) {

    alert("¡Has entrado correctamente!"); 
}
else {
    window.close(); 
    alert("¡ups ocurrio un error vuelve a intentar!"); 
}


