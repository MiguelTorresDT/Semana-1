export default class persona {

    constructor(){
        this.acEdad = 0;
        this.contPersonas = 0;
    }
    procesarEdad(Ed){
        this.acEdad += Ed.edad;
        this.contPersonas++;
    }
    calcularPromedio(){
        return this.acEdad / this.contPersonas;
    }
}