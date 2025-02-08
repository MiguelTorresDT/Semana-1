export default class mayEdad{
    constructor(){
        this.contPers = 0;
        this.contMayor18 = 0;
    }

    procesarPersona(pers){

        //contador de personas
        this.contPers++

        if(pers.edad >= 18)
            this.contMayor18++
    }

    totPers(){
        return this.contPers
    }

    totPersMay18(){
        return this.cntMayor18
    }

    porcjPersMay18(){
        return (this.contMayor18 * 100) / this.contPers
    }
}