/**Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
Cantidad de personas: 12
Cantidad de hombres: 5
Cantidad de mujeres: 7*/

import persona from "./Cl_Persona.js";
import contador from "./Cl_Contador.js";

let persona1 = new persona("Luisa", "F");
let persona2 = new persona("Ana", "F");
let persona3 = new persona("Jose", "M");
let persona4 = new persona("Carmen", "F");
let persona5 = new persona("Rosa", "F");
let persona6 = new persona("Jose", "M");
let persona7 = new persona("Maria", "F");
let persona8 = new persona("Luz", "F");
let persona9 = new persona("Rafael", "M");
let persona10 = new persona("Liz", "F");
let persona11 = new persona("Marcos", "M");
let persona12 = new persona("Leo", "M");

let conta = new contador();

conta.procesarPersona(persona1);
conta.procesarPersona(persona2);
conta.procesarPersona(persona3);
conta.procesarPersona(persona4);
conta.procesarPersona(persona5);
conta.procesarPersona(persona6);
conta.procesarPersona(persona7);
conta.procesarPersona(persona8);
conta.procesarPersona(persona9);
conta.procesarPersona(persona10);
conta.procesarPersona(persona11);
conta.procesarPersona(persona12);

let salida = document.getElementById("salida")

salida.innerHTML = `
<br>Cantidad de personas: ${conta.totalPers()}
<br>Cantidad de hombres: ${conta.hombres()}
<br>Cantidad de mujeres: ${conta.mujeres()}
`