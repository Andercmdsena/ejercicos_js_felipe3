function inversion(){
    const nombres = document.getElementById("nombres").value;
    const email = document.getElementById("email").value;
    const monto = document.getElementById("monto").value;
    const tiempo = document.getElementById("tiempo").value;
    const tiempo1 = document.getElementById("tiempo1");
    const total = document.getElementById("total");
    const total2 = document.getElementById("total2");
    const procentaje = document.getElementById("porcentaje");
    const preSimulacion = document.querySelector(".pre-simulation");
    const postSimulacion = document.querySelector(".post-simulation");

    
    const showNombre = document.getElementById("nombresAp")
    const showEmail = document.getElementById("email1")
    
    postSimulacion.classList.remove("disabled");
    preSimulacion.classList.add("disabled");

    showNombre.innerText = nombres
    showEmail.innerText = email

    switch (tiempo){
        case '1 Año':
        result = Math.round(12*(monto*(0.8/100) )) ;
        result1 = parseInt(result) + parseInt(monto);
        tiempo1.innerText = tiempo
        porcentaje.innerText = "%0.8"
        
        
        total.innerText = result1
        total2.innerText = result
        break;
        case '2 Años':
            result = Math.round(24*(monto*(1.3/100) ));
            result1 = parseInt(result) + parseInt(monto);
        tiempo1.innerText = tiempo
        porcentaje.innerText = "%1.3%"
        total2.innerText = result
        total.innerText = result1
        
        
        break;
        case '3 Años':
            result = Math.round(36*(monto*(1.7/100) ));
            result1 = parseInt(result) + parseInt(monto);
        tiempo1.innerText = tiempo
        porcentaje.innerText = "%1.7%"
        
        total2.innerText = result
        total.innerText = result1
        
        break;
        default:
            alert("algo salio mal")

    }
}
