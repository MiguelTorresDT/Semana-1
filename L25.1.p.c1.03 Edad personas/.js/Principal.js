/*Conociendo la edad de varias personas, indicar la edad promedio. 
Ej.  Edades de las personas es: 15, 14, 19, 20, 16 y 18 
La salida requerida presenta el siguiente formato: 
La edad promedio es 17*/ 
import Edad from "./Cl_Edad.js";
import persona from "./Cl_Persona.js";

let Edad1 = new Edad(15), 
    Edad2 = new Edad(14), 
    Edad3 = new Edad(19),
    Edad4 = new Edad(20),
    Edad5 = new Edad(16),
    Edad6 = new Edad(18); 

let pers = new persona(); 

pers.procesarEdad(Edad1); 
pers.procesarEdad(Edad2); 
pers.procesarEdad(Edad3); 
pers.procesarEdad(Edad4); 
pers.procesarEdad(Edad5); 
pers.procesarEdad(Edad6); 

let salida = document.getElementById("salida");

salida.innerHTML = `<br> La edad promedio es ${pers.calcularPromedio()}`