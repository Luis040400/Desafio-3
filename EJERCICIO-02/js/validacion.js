function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}

var e1,e2,e3,msj1,msj2,g1,g2,g3,n1,n2,n3;
e1 = [];
e2 = [];
e3 = [];
g1 = [];
g2 = [];
g3 = [];
n1 = [];
n2 = [];
n3 = [];
msj1 = "BUEN TRABAJO";
msj2 = "EXCELENTE TRABAJO";
var condi1 = 0;
var condi2 = 0;
var total = 0;

function sucursal1(){
  d1 = document.getElementById("ganancia1").value;
  d2 = document.getElementById("empleados1").value;
  d3 = document.getElementById("nombre1").value;
  if(d1 >1000 && d2 >10){
    g1.push(d1);
    e1.push(d2);
    if(d1<30000){
      document.getElementById("msj1").innerHTML = msj1;
    }else{
      document.getElementById("msj1").innerHTML = msj2;
    }
    if(d1>1000 && d1<=25000){
      condi1++;
    }else{
      condi2++;
    }
    total = total + Number(d1);
    document.getElementById("nom1").innerHTML = d3;
    document.getElementById("gan1").innerHTML = d1;
    document.getElementById("emp1").innerHTML = d2;
    console.log(d1,d2);
  }else {
    alert('[ERROR] Revisar si la ganancia es mayor a 1000 o si los empleados son más de 10')
  }
}

function sucursal2(){
  d1 = document.getElementById("ganancia2").value;
  d2 = document.getElementById("empleados2").value;
  d3 = document.getElementById("nombre2").value;
  if(d1>1000 && d2 >10){
    g2.push(d1);
    e2.push(d2);
    if(d1<30000){
      document.getElementById("msj2").innerHTML = msj1;
    }else{
      document.getElementById("msj2").innerHTML = msj2;
    }
    if(d1>1000 && d1<=25000){
      condi1++;
    }else{
      condi2++;
    }
    total = total + Number(d1);
    document.getElementById("nom2").innerHTML = d3;
    document.getElementById("gan2").innerHTML = d1;
    document.getElementById("emp2").innerHTML = d2;
    console.log(d1,d2);
  }else {
    alert('[ERROR] Revisar si la ganancia es mayor a 1000 o si los empleados son más de 10');
  }
}

function sucursal3(){
  d1 = document.getElementById("ganancia3").value;
  d2 = document.getElementById("empleados3").value;
  d3 = document.getElementById("nombre3").value;
  if(d1>1000 && d2>10){
    g3.push(d1);
    e3.push(d2);
    if(d1<30000){
      document.getElementById("msj3").innerHTML = msj1;
    }else{
      document.getElementById("msj3").innerHTML = msj2;
    }
    if(d1>1000 && d1<=25000){
      condi1++;
    }else{
      condi2++;
    }
    total = total + Number(d1);
    document.getElementById("nom3").innerHTML = d3;
    document.getElementById("gan3").innerHTML = d1;
    document.getElementById("emp3").innerHTML = d2;
    document.getElementById("r1").innerHTML = condi1;
    document.getElementById("r2").innerHTML = condi2;
    document.getElementById("r3").innerHTML = total;
    console.log(d1,d2);
    if(Number(e1[0])>20){
      e2[0] = Number(e2[0])+1;
      e3[0] = Number(e3[0])+1;
      document.getElementById("emp2").innerHTML = e2[0];
      document.getElementById("emp3").innerHTML = e3[0];
      console.log(e1[0],e2[0]);
    }
    if(Number(e2[0])>20){
      e1[0] = Number(e1[0])+1;
      e3[0] = Number(e3[0])+1;
      document.getElementById("emp1").innerHTML = e1[0];
      document.getElementById("emp3").innerHTML = e3[0];
      console.log(e1[0],e2[0]);
    }
    if(Number(e3[0])>20){
      e1[0] = Number(e1[0])+1;
      e2[0] = Number(e2[0])+1;
      document.getElementById("emp2").innerHTML = e2[0];
      document.getElementById("emp1").innerHTML = e1[0];
      console.log(e1[0],e2[0]);
    }
  }else{
    alert('[ERROR] Revisar si la ganancia es mayor a 1000 o si los empleados son más de 10');
  }
}