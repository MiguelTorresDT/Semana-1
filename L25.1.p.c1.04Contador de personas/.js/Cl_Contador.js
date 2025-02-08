export default class CL_Contador {
    constructor() {
        this.contpers = 0;
        this.contHombre = 0;
        this.contMujeres = 0;
    }

    procesarPersona(perso) {
        this.contpers++

        if (perso.cSexo() === 1) {
            this.contHombre++
        }

        if (perso.cSexo() === 2) {
            this.contMujeres++
        }
    }

    totalPers() {
        return this.contpers
    }

    hombres() {
        return this.contHombre
    }

    mujeres() {
        return this.contMujeres
    }
}