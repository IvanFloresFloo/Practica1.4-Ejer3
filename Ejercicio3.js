function calcularNumerosPrimos() {
    const numeroInput = parseInt(document.getElementById("numeroInput").value);
    
    const numerosPrimos = [];
    
    for (let i = 2; i <= numeroInput; i++) {
      if (esPrimo(i)) {
        numerosPrimos.push(i);
      }
    }
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Números primos: " + numerosPrimos.join(", ");
  }
  
  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  