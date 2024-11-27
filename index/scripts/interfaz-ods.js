// Selecciona todos los elementos interactivos
const textos = document.querySelectorAll('.texto-item');
const imagenes = document.querySelectorAll('.ods-item');
const imagenDinamica = document.querySelector('.imagen-dinamica');
const seccion = document.querySelector('.seccion-ods');

// Activa el texto predeterminado y la imagen inicial
document.querySelector('#texto-predeterminado').classList.add('activo');
imagenDinamica.classList.add('predeterminado');
seccion.classList.add('fondo-predeterminado');

// Agrega un evento de clic a cada imagen
imagenes.forEach((imagen, index) => {
    imagen.addEventListener('click', () => {
        // Oculta todos los textos
        textos.forEach(texto => texto.classList.remove('activo'));

        // Muestra el texto correspondiente a la imagen seleccionada
        document.querySelector(`#texto${index + 1}`).classList.add('activo');

        // Cambia la clase de la imagen dinámica
        const nuevaClaseImagen = `ods${index + 1}`;
        imagenDinamica.className = `imagen-dinamica ${nuevaClaseImagen}`;

        // Cambia el fondo de la sección
        const nuevaClaseFondo = `fondo-ods${index + 1}`;
        seccion.className = `seccion-ods ${nuevaClaseFondo}`;
    });
});
