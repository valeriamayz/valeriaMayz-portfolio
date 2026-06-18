const formulario =
document.getElementById(
"formulario"
);

formulario.addEventListener(
"submit",

function(event){

event.preventDefault();

alert(
"Gracias por tu mensaje. Me contactaré pronto."
);

formulario.reset();

}

);
