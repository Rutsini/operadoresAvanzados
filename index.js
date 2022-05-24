
let boton1 = document.getElementById("ingresar");
boton1.addEventListener("click", ingresarClick);
function ingresarClick(){
  persona()
};


function persona(){
     
    let nombre = document.getElementById("nombreDom").value; 

    let nombrePersona = document.createElement("h4");
    nombrePersona.innerHTML = "El nombre es: " + nombre
    document.body.append(nombrePersona);
    
    let direccion = document.getElementById("direccionDom").value; 

    let direccionPersona = document.createElement("h4");
    direccionPersona.innerHTML = "La direccion es: " + direccion
    document.body.append(direccionPersona);
    
    let edad = document.getElementById("edadDom").value; 

    let edadPersona = document.createElement("h4");
    edadPersona.innerHTML = "La edad es: " + edad
    document.body.append(edadPersona);
        
    edad >= 18 ? ingresa() : noIngresa();
    };

    function ingresa(){
        const boton2 = document.getElementById("aceptar");
        boton2.addEventListener("click", () => (
            Swal.fire({
                icon: 'Bienvenido',
                title: 'Puede ingresar',
                text: 'Disfrute',
                
              }
    
            ))
        )

    }

    function noIngresa(){
        const boton2 = document.getElementById("aceptar");
        boton2.addEventListener("click", () => (
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No cumple el requisito de edad',
                
              }
    
            ))
        )
        
    }
  







