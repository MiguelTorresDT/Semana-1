/**Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de
aprobados, cantidad de reprobados y nota promedio de la sección.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
222 (60Ptos), la salida que se espera es como la siguiente:
Cantidad de aprobados: 6
Cantidad de reprobados: 2
 Nota promedio de la sección: 57.25*/

 import estudiante from "./Cl_Estudiante.js";
 import materia from "./Cl_Materia.js";
 
 let Est1 = new estudiante(888, 60),
     Est2 = new estudiante(777, 50),
     Est3 = new estudiante(999, 40),
     Est4 = new estudiante(333, 80),
     Est5 = new estudiante(111, 30),
     Est6 = new estudiante(666, 90),
     Est7 = new estudiante(444, 48),
     Est8 = new estudiante(222, 60);
 
 let mat = new materia();
 mat.procesarEstudiante(Est1);
 mat.procesarEstudiante(Est2);
 mat.procesarEstudiante(Est3);
 mat.procesarEstudiante(Est4);
 mat.procesarEstudiante(Est5);
 mat.procesarEstudiante(Est6);
 mat.procesarEstudiante(Est7);
 mat.procesarEstudiante(Est8);
 
 let salida = document.getElementById("salida");
 
 salida.innerHTML = `
 <br> Cantidad de aprobados: ${mat.estAprobados()}
 <br> Cantidad de reprobados: ${mat.estReprobados()}
 <br><br >Nota promedio de la sección: ${mat.PromSección()} `