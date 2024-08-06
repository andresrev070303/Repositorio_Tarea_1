class Jugador {
  constructor() {
      this.intentos = 5;
  }

  restarIntentos() {
      this.intentos--;
      muniequito.perderIntento(); // Aquí se llama al método de Muñequito
      this.mostrarIntentosRestantes(); 
  }

  resetearIntentos() {
      this.intentos = 5;
      muniequito.reiniciar(); // Aquí se reinicia Muñequito
      this.mostrarIntentosRestantes(); 
  }

  mostrarIntentosRestantes() {
      const intentosRestantesElement = document.getElementById('intentosRestantes');
      intentosRestantesElement.textContent = `Intentos restantes: ${this.intentos}`;
  }
}

const jugador = new Jugador();

function actualizarIntentosRestantes() {
  jugador.mostrarIntentosRestantes();
}

actualizarIntentosRestantes();
