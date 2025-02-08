export default class empresa {
    constructor() {
        this.acSueldoObreros = 0;
        this.acSuedloAdmins = 0;
        this.contObreros = 0;
        this.contAdmins = 0;
    }

    procesarPersonal(pers) {
        if (pers.cargo === "O")
            this.acSueldoObreros += pers.sueldo

        if (pers.cargo === "O")
            this.contObreros++

        if (pers.cargo === "A")
            this.acSuedloAdmins += pers.sueldo

        if (pers.cargo === "A")
            this.contAdmins++
    }

    pagaObreros() {
        return this.acSueldoObreros
    }

    promdioObreros() {
        return this.acSueldoObreros / this.contObreros
    }

    pagaAdmins() {
        return this.acSuedloAdmins
    }

    promedioAdmins() {
        return this.acSuedloAdmins / this.contAdmins
    }
}