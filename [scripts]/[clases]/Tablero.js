class Tablero {
  constructor() {
    this.tablero = [];
  }

  inicializarTablero(longitud) {
    this.tablero = Array(longitud).fill('_');
  }

  actualizarTablero(palabraSecreta, letra) {
    for (let i = 0; i < palabraSecreta.length; i++) {
      if (palabraSecreta[i] === letra) {
        this.tablero[i] = letra;
      }
    }
    this.mostrarTablero(); // Asegúrate de llamar a mostrarTablero después de cada actualización
  }

  comprobarVictoria(palabraSecreta) {
    return this.tablero.join('') === palabraSecreta;
  }

  mostrarTablero() {
    const tableroElement = document.getElementById('tablero');
    tableroElement.textContent = this.tablero.join(' ');
  }
}
