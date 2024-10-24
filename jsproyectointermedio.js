var tareas = "<tr><th>Tareas</th></tr>";

function añadir(){
    if(document.getElementById("tarea").value==''){
        alert("Falta insertar tarea");
    } else {
        x = document.getElementById("tarea").value;
        tareas = tareas + "<tr><td><input type='checkbox'>" + "<span>" + x + "</span></td></tr>";
        document.getElementById("lista").innerHTML=tareas;
        document.getElementById("tarea").value='';
    }
}

function borrarlista(){
    tareas="<tr><th>Tareas</th></tr>";
    document.getElementById("lista").innerHTML=tareas;
}

