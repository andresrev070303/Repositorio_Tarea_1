class Palabra {
    constructor() {
      this.palabraSecreta = "";
      this.palabras = ["casa", "hoguera", "arbol", "paralelepipedo", "programacion"];
      this.longitud = 0;
    }
  
    generarPalabraAleatoria() {
      this.palabraSecreta = this.palabras[Math.floor(Math.random() * this.palabras.length)];
      this.longitud = this.palabraSecreta.length;
    }
  
    verificarLetra(letra) {
      return this.palabraSecreta.includes(letra);
    }
  }
