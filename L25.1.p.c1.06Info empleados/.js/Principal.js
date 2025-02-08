/**En una empesa se tiene personal obrero y personal administrativo. La empesa necesita
determinar cuál es el monto promedio que paga por cada tipo de personal.
Al ser consultada por la forma como desean que se presente la salida, la empesa suministra
el siguiente formato, informando que 
Juan (obrero) actualmente gana $100
Ana (obrero) gana $120
Lin (administrativo) gana $200
Mary (obrero) gana $50
Carlos (administrativo) gana $150
Monto total pagado a obreros: $270
Promedio pagado a 3 obreros: $90
Monto total pagado a administrativos: $350
Promedio pagado a 2 administrativos: $175*/

import personal from "./Cl_Personal.js";
import empresa from "./Cl_Empresa.js";

let pers1 = new personal("Juan", "O", 100),
    pers2 = new personal("Ana", "O", 120),
    pers3 = new personal("Lin", "A", 200),
    pers4 = new personal("Mary", "O", 50),
    pers5 = new personal("Carlos", "A", 150);

let emp = new empresa();

emp.procesarPersonal(pers1);
emp.procesarPersonal(pers2);
emp.procesarPersonal(pers3);
emp.procesarPersonal(pers4);
emp.procesarPersonal(pers5);

let salida = document.getElementById("salida")

salida.innerHTML = `
<br>Monto total pagado a obreros: ${emp.pagaObreros()} $
<br>Promedio pagado a ${emp.contObreros} obreros: ${emp.promdioObreros()} $
<br>
<br>Monto total pagado a administrativos: ${emp.pagaAdmins()} $
<br>Promedio pagado a ${emp.contAdmins} administrativos: ${emp.promedioAdmins()} $
`