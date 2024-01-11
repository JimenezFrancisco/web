// Función para obtener el elemento del DOM por su ID
function obtenerElemento(id) {
    return document.getElementById(id);
  }
  
  // Función para obtener la función ingresada por el usuario
  function obtenerFuncion() {
    return obtenerElemento('funcion').value;
  }
  
  // Función para calcular la integral indefinida
  function calcularIntegral() {
    try {
      const funcion = obtenerFuncion();
      const resultado = math.integral(funcion, 'x');
      mostrarResultado(funcion, resultado);
    } catch (error) {
      mostrarError();
      console.error(error);
    }
  }
  
  // Función para mostrar el resultado en la página
  function mostrarResultado(funcion, resultado) {
    obtenerElemento('resultado').textContent = `La integral indefinida de '${funcion}' es: ${resultado} + C`;
  }
  
  // Función para mostrar un mensaje de error
  function mostrarError() {
    obtenerElemento('resultado').textContent = "Ha ocurrido un error. Asegúrate de ingresar una expresión matemática válida.";
  }
  
  // Evento al cargar la página para asociar la función al botón
  window.addEventListener('DOMContentLoaded', function() {
    obtenerElemento('calcularBtn').addEventListener('click', calcularIntegral);
  });
  