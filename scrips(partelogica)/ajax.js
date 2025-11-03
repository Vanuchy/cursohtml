console.log("Se esta cargando");
document.addEventListener('DOMContentLoaded', function () {
    console.log("Se esta cargando 2");
    const xhttp = new XMLHttpRequest();
    //crear el objeto
    
    xhttp.open('GET','../data(basededatos)/datos.json', true);
    //indica donde esta
    
    xhttp.send ();
    //enviar

    
    xhttp.onreadystatechange = function (){
   //detecta que se ha enviado un mensaje    
    
    if(xhttp.readyState == 4 && this.status == 200){
    //Si se cumple la condicion de respuesta correcta y estado correcto        
            var datos = JSON.parse(xhttp.responseText);
            
            var contenedor = document.getElementById('contenedor');
            contenedor.innerHTML = "";

            for (var item of datos){
                console.log(item.descripcion);
                contenedor.innerHTML += 
                `<div>
                <a href=${item.enlace}><img src=${item.imagen} width="100%"></a>
                </div>`;  
                
            }
        }

    }
})  