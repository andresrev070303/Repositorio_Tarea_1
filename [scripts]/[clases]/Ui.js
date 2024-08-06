class Ui {
  constructor(juego) {
    this.juego = juego;
    this.input = document.getElementById('letra');
    this.boton = document.getElementById('boton');
    this.output = document.getElementById('output');
    
    console.log("Constructor de Ui se ejecutó"); // Agrega esta línea
    
    this.boton.addEventListener('click', () => {
      console.log("click");
      let letra = this.input.value.toLowerCase();
      console.log(letra);
      if (letra.match(/[a-z]/) && letra.length === 1) {
        this.juego.jugar(letra);
        this.input.value = '';
        console.log("true");
      }
    });
    
    console.log("Evento click del botón se configuró"); // Agrega esta línea
  }

  mostrarMensaje(mensaje) {
    this.output.innerHTML = mensaje;
  }
}
