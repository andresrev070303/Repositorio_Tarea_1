class Muniequito {
    constructor() {
        this.estado = 0;
        this.imagenes = [
            './[scripts]/[clases]/Imagenes/1.PNG',
            './[scripts]/[clases]/Imagenes/2.PNG',
            './[scripts]/[clases]/Imagenes/3.PNG',
            './[scripts]/[clases]/Imagenes/4.PNG',
            './[scripts]/[clases]/Imagenes/5.PNG',
            './[scripts]/[clases]/Imagenes/6.PNG',
        ];
        this.imagenElement = document.getElementById('munieco');
    }

    dibujar() {
        this.imagenElement.src = this.imagenes[this.estado];
    }

    perderIntento() {
        if (this.estado < this.imagenes.length - 1) {
            this.estado++;
            this.dibujar();
        }
    }

    reiniciar() {
        this.estado = 0;
        this.dibujar();
    }
}

const muniequito = new Muniequito();
