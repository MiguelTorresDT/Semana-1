export default class materia {
    constructor() {
        this.contEstudiantes = 0;
        this.contAprobados = 0;
        this.contReprobados = 0;
        this.acNotas = 0;
    }

    procesarEstudiante(est) {
        this.contEstudiantes++;

        if (est.nota >= 48)
            this.contAprobados++;

        if (est.nota < 48)
            this.contReprobados++;

        this.acNotas += est.nota;
    }

    estAprobados() {
        return this.contAprobados;
    }

    estReprobados() {
        return this.contReprobados;
    }

    PromSección() {
        return this.acNotas/this.contEstudiantes ;
    }
}