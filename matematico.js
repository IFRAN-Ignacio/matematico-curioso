function calcular() {

  // Leer semilla con getElementById
  var inputEl  = document.getElementById("inputSemilla");
  var errorEl  = document.getElementById("errorMsg");
  var resultEl = document.getElementById("resultados");

  var semilla = parseInt(inputEl.value);

  // Validación
  if (isNaN(semilla) || semilla < 1 || semilla > 9999) {
    errorEl.style.display = "block";
    resultEl.style.display = "none";
    return;
  }
  errorEl.style.display = "none";

  // Generar la secuencia usando un vector (array) 
  var secuencia = [];       // vector donde guardamos cada número
  var actual    = semilla;

  secuencia.push(actual);   // agregamos la semilla al vector

  while (actual !== 1) {
    if (actual % 2 === 0) {
      actual = actual / 2;        // par -> mitad
    } else {
      actual = actual * 3 + 1;   // impar -> triple + 1
    }
    secuencia.push(actual);       // agregamos al vector
  }

  // Calcular largo y máximo recorriendo el vector 
  var largo  = secuencia.length;
  var maximo = secuencia[0];

  for (var i = 1; i < largo; i++) {
    if (secuencia[i] > maximo) {
      maximo = secuencia[i];
    }
  }

  //  Mostrar resultados con getElementById 
  document.getElementById("outputLargo").textContent  = largo;
  document.getElementById("outputMaximo").textContent = maximo;

  // Armar chips de la secuencia 
  var contenedor = document.getElementById("outputSecuencia");
  contenedor.innerHTML = "";

  for (var j = 0; j < largo; j++) {
    var chip = document.createElement("span");
    chip.classList.add("num-chip");
    chip.textContent = secuencia[j];

    if (j === 0)                  chip.classList.add("semilla");
    if (secuencia[j] === maximo)  chip.classList.add("maximo");
    if (secuencia[j] === 1)       chip.classList.add("final");

    contenedor.appendChild(chip);
  }

  // Mostrar la sección de resultados
  resultEl.style.display = "block";
}

// Permitir usar Enter en el input
document.getElementById("inputSemilla").addEventListener("keydown", function(e) {
  if (e.key === "Enter") calcular();
});
