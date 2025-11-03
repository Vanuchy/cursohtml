console.log("Se esta cargando");
document.addEventListener('DOMContentLoaded', function () {
    console.log("Se esta cargando 2");
    const xhttp = new XMLHttpRequest();
    //crear el objeto
    
    xhttp.open('GET','../data(basededatos)/otrosdatos.json', true);
    //indica donde esta
    
    xhttp.send ();
    //enviar

    
    xhttp.onreadystatechange = function (){
   //detecta que se ha enviado un mensaje    
    
    if(xhttp.readyState == 4 && this.status == 200){
    //Si se cumple la condicion de respuesta correcta y estado correcto  
    
            
            var datos = JSON.parse(xhttp.responseText);
            
            var contenedor = document.getElementById('tipos');
            contenedor.innerHTML = "";
            var lista = ``;
            for (var item of datos){
                //este bucle sirve para la tarjeta
                var arreglo = item.opciones;
                lista = "";

                for(var i = 0; i < arreglo.length; i++){
                 //este for sirve para cada opcion que tenga la tarjeta   
                lista += `
                <ol class="orden">${arreglo[i]}</ol>
                `;
                }


                contenedor.innerHTML += 
                `<h3 class="col bg-primary d-flex justify-content-center">${item.titulo}</h3>
                
                        <div class="contenedor">
                            <aside class="asideizquierdo">
                            <img src=${item.imagen}>
                            </aside>
                            <aside class="asidederecho">
                                <ul>
                                    <ol>${item.descripcion}</ol>
                                    ${lista}
                                </ul>                 
                            </aside>
                        </div>`;  
                
                
            }
        }

    }
}) 