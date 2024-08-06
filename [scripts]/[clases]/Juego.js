
class Juego {
    constructor() {
      this.jugador = new Jugador();
      this.tablero = new Tablero();
      this.palabra = new Palabra();
      this.ui = new Ui(this);
  
      this.palabra.generarPalabraAleatoria();
      this.tablero.inicializarTablero(this.palabra.longitud);
      console.log(this.palabra.palabraSecreta);
    }
  
    jugar(letra) {
      let acierto = this.palabra.verificarLetra(letra);
      if (acierto) {
        this.tablero.actualizarTablero(this.palabra.palabraSecreta, letra);
      } else {
        this.jugador.restarIntentos();
      }
  
      if (this.tablero.comprobarVictoria(this.palabra.palabraSecreta)) {
        this.ui.mostrarMensaje("¡Ganaste! La palabra era: " + this.palabra.palabraSecreta);
        this.reiniciarJuego();
      } else if (this.jugador.intentos === 0) {
        this.ui.mostrarMensaje("¡Perdiste! La palabra era: " + this.palabra.palabraSecreta);
        this.reiniciarJuego();
      }
    }
  
    reiniciarJuego() {
      this.jugador.resetearIntentos();
      this.palabra.generarPalabraAleatoria();
      this.tablero.inicializarTablero(this.palabra.longitud);
    }
  }

