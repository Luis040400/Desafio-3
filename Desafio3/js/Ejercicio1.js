var Aalumnos = new Array();
var n = 0;
var name = document.getElementById("name");
var no1 = document.getElementById("nota1");
var no2 = document.getElementById("nota2");
var no3 = document.getElementById("nota3");
var no4 = document.getElementById("nota4");
var no5 = document.getElementById("nota5");
var mayor = 0;
var menor = 0;

function agregar() {
    var alumno = new Object();
    
    if (n < 3) {
        alumno.nombre = document.getElementById("name").value;
        alumno.nota1 = parseFloat(no1.value);
        alumno.nota2 = parseFloat(no2.value);
        alumno.nota3 = parseFloat(no3.value);
        alumno.nota4 = parseFloat(no4.value);
        alumno.nota5 = parseFloat(no5.value);
        if(alumno.nota1 >= 0 && alumno.nota1<=10&&alumno.nota2 >= 0 && alumno.nota2<=10&&alumno.nota3 >= 0 && alumno.nota3<=10
            &&alumno.nota4 >= 0 && alumno.nota4<=10&&alumno.nota5 >= 0 && alumno.nota5<=10){
                alumno.promedio = (alumno.nota1 + alumno.nota2 + alumno.nota3 + alumno.nota4 + alumno.nota5) / 5;
                Aalumnos.push(alumno);
                limpiar();
                n++;
            }else{
                alert("ERROR EN LOS DATOS " + "NO PUEDE INGRESAR NUMEROS NEGATIVOS NI MAYORES A 10");
                limpiar();
            }
        
    }
    else {
        alert("Ya ingreso 3 alumnos");
    }
}
function limpiar() {
    document.getElementById("name").value = "";
    no1.value = "";
    no2.value = "";
    no3.value = "";
    no4.value = "";
    no5.value = "";
}
function mostrar() {
    evaluarPromedio();
    var show = "";
    show = "<table class='table'>";
    show += "<thead>";
    show += "<tr>";
    show += "<th>Nombre</th>";
    show += "<th>Promedio</th>";
    show += "<th>Estado</th>";
    show += "</tr>";
    show += "</thead>";
    for (const key in Aalumnos) {
        if (Aalumnos.hasOwnProperty(key)) {
            const element = Aalumnos[key];
            if (element.promedio >= 7 && element.promedio == mayor) {
                show += "<tbody>";
                show += "<tr>";
                show += "<td>" + element.nombre + "</td>";
                show += "<td>" + element.promedio + "</td>";
                show += "<td>Aprobado</td>";
                show += "<td>Mayor Promedio</td>";
                show += "</tr>";
            }
            else if (element.promedio >= 7 && element.promedio == menor) {
                show += "<tbody>";
                show += "<tr>";
                show += "<td>" + element.nombre + "</td>";
                show += "<td>" + element.promedio + "</td>";
                show += "<td>Aprobado</td>";
                show += "<td>Menor Promedio</td>";
                show += "</tr>";
            }
            else if (element.promedio >= 7) {
                show += "<tbody>";
                show += "<tr>";
                show += "<td>" + element.nombre + "</td>";
                show += "<td>" + element.promedio + "</td>";
                show += "<td>Aprobado</td>";
                show += "</tr>";

            }
            else if (element.promedio >= 4 && element.promedio < 7 && element.promedio==mayor) {
                show += "<tbody>";
                show += "<tr>";
                show += "<td>" + element.nombre + "</td>";
                show += "<td>" + element.promedio + "</td>";
                show += "<td>Regular</td>";
                show += "<td>Mayor Promedio</td>";
                show += "</tr>";

            }
            else if (element.promedio >= 4 && element.promedio < 7 && element.promedio==menor) {
                show += "<tbody>";
                show += "<tr>";
                show += "<td>" + element.nombre + "</td>";
                show += "<td>" + element.promedio + "</td>";
                show += "<td>Regular</td>";
                show += "<td>Menor Promedio</td>";
                show += "</tr>";

            }
            else if (element.promedio >= 4 && element.promedio < 7) {
                show += "<tbody>";
                show += "<tr>";
                show += "<td>" + element.nombre + "</td>";
                show += "<td>" + element.promedio + "</td>";
                show += "<td>Regular</td>";
                show += "</tr>";

            }
            else if (element.promedio < 4 && element.promedio == mayor) {
                show += "<tbody>";
                show += "<tr>";
                show += "<td>" + element.nombre + "</td>";
                show += "<td>" + element.promedio + "</td>";
                show += "<td>Reprobado</td>";
                show += "<td>Mayor Promedio</td>";
                show += "</tr>";
            }
            else if (element.promedio < 4 && element.promedio == menor) {
                show += "<tbody>";
                show += "<tr>";
                show += "<td>" + element.nombre + "</td>";
                show += "<td>" + element.promedio + "</td>";
                show += "<td>Reprobado</td>";
                show += "<td>Menor Promedio</td>";
                show += "</tr>";
            }
            else if (element.promedio < 4) {
                show += "<tbody>";
                show += "<tr>";
                show += "<td>" + element.nombre + "</td>";
                show += "<td>" + element.promedio + "</td>";
                show += "<td>Reprobado</td>";
                show += "</tr>";
            }
        }
        document.getElementById("info").innerHTML = show;
    }
}

function evaluarPromedio() {
    //Para el mayor promedio
    for (const key in Aalumnos) {
        const element = Aalumnos[key];
        if (element.promedio > mayor) {
            mayor = element.promedio;
            if (mayor >= menor) {
                menor = mayor;
            }
        }
        else if (element.promedio < menor) {
            menor = element.promedio;
        }
    }
    //Para obtener el menor promedio
    for(const key in Aalumnos){
        const element = Aalumnos[key];
        if(element.promedio < menor){
            menor = element.promedio;
        }
    }

    alert("Mayor Promedio: " + mayor + " Menor Promedio: " + menor);
var a = mayor+1;
var b = mayor-1;
    for(const key in Aalumnos){
        const element = Aalumnos[key];
        if(mayor>8){
            element.promedio= element.promedio+1;
           if(a>mayor){
               mayor=mayor+1;
               menor=menor+1;
           }
        }
        else if(mayor<8){
            element.promedio=element.promedio-1;
            if(b<mayor){
                mayor=mayor-1;
                menor=menor-1;
            }
        }
    }
}
