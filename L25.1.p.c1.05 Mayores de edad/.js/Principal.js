/**Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
reporte al final el porcentaje de personas que son mayores de edad.
Se tienen las siguientes personas: Luis (15)Ana (19)José (21)Carmen(17)Rosa (18)José (22)María (17)Luz (19)Rafael (23)Liz (15)Marcos (20) Leo (16) la salida requerida
presenta el siguiente formato:
Cantidad de personas: 12
Cantidad de personas mayor de edad: 7
Porcentaje de personas mayor de edad: 58.33%*/

import persona from "./Cl_Persona.js";
import mayEdad from "./Cl_MayoresEdad.js";

let pers1 = new persona("Luis",15),
    pers2 = new persona("Ana",19),
    pers3 = new persona("José",21),
    pers4 = new persona("Carmen",17),
    pers5 = new persona("Rosa",18),
    pers6 = new persona("José",22),
    pers7 = new persona("María",17),
    pers8 = new persona("Luz",19),
    pers9 = new persona("Rafael",23),
    pers10 = new persona("Liz",15),
    pers11 = new persona("Marcos",20),
    pers12 = new persona("Leo",16);

let may = new mayEdad();

may.procesarPersona(pers1);
may.procesarPersona(pers2);
may.procesarPersona(pers3);
may.procesarPersona(pers4);
may.procesarPersona(pers5);
may.procesarPersona(pers6);
may.procesarPersona(pers7);
may.procesarPersona(pers8);
may.procesarPersona(pers9);
may.procesarPersona(pers10);
may.procesarPersona(pers11);
may.procesarPersona(pers12);

let salida = document.getElementById("salida")

salida.innerHTML = `
Cantidad de personas: ${may.contPers}
<br>Cantidad de personas mayor de edad: ${may.contMayor18}
<br>Porcentaje de personas mayor de edad: ${may.porcjPersMay18()}%
`