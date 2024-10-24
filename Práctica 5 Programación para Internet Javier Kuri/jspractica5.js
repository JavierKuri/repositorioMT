var registro = "<tr><th>Nombre</th><th>Correo</th><th>Artes Marciales</th><th>Genero</th><th>Fecha</th><th>Color</th><th>Experiencia</th></tr>";
function registrar(){
    if(document.getElementById("nombre").value==''){
        alert("Falta insertar nombre");
    } else if (document.getElementById("correo").value==''){
        alert("Falta insertar correo");
    } else if (document.querySelectorAll('input[name=opcion]:checked').length==0){
        alert("Falta seleccionar alguna opción");
    } else if (document.querySelector('input[name=genero]:checked')==null){
        alert("Falta seleccionar genero");
    } else if (document.getElementById("fecha")==''){
        alert("Falta seleccionar fecha");
    } else {


        x = document.getElementById("nombre").value;
        registro = registro + "<td>" + x + "</td>";
        x = document.getElementById("correo").value;
        registro = registro + "<td>" + x + "</td>";

        var artes = '';
        var cadena = '';
        x = document.getElementsByName("opcion");
        for(i=0;i<x.length;i++){
            if(x[i].checked){
                artes = x[i].value;
                cadena = cadena + artes + "<br>";
            }
        }
        registro = registro + "<td>" + cadena + "</td>";  

        x = document.getElementsByName("genero");
        for(i = 0; i < x.length; i++) {
            if(x[i].checked) {
                registro = registro + "<td>" + x[i].value + "</td>"; 
            }
        }

        x = document.getElementById("fecha").value;
        registro = registro + "<td>" + x + "</td>";
        x = document.getElementById("colour").value;
        registro = registro + "<td>" + x + "</td>";
        x = document.getElementById("slider").value;
        registro = registro + "<td>" + x + "</td>";

        registro = registro + "</tr>";
        document.getElementById("resultado").innerHTML = registro;

        document.getElementById("nombre").value='';
        document.getElementById("correo").value='';
        document.getElementById("boxeo").checked=false;
        document.getElementById("taekwondo").checked=false;
        document.getElementById("judo").checked=false;
        document.getElementById("hombre").checked=false;
        document.getElementById("mujer").checked=false;
        document.getElementById("otro").checked=false;
        document.getElementById("fecha").value='';
        document.getElementById("colour").value='#ffffff';
        document.getElementById("slider").value=0;
    }
}