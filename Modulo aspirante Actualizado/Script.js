// Seleccionamos el formulario por su ID
const formulario = document.getElementById('formBusqueda');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se refresque

    // Obtenemos los valores de los inputs por sus IDs
    const cargoValue = document.getElementById('cargo').value;
    const lugarValue = document.getElementById('lugar').value;

    if (cargoValue.trim() === "" || lugarValue.trim() === "") {
        alert("Por favor, completa ambos campos.");
    } else {
        alert("Buscando " + cargoValue + " en " + lugarValue + "...");
        // Aquí podrías redirigir a la página de resultados
    }
});
