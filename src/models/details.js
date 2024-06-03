// Obteniendo el ID del libro de la URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const bookId = urlParams.get('id');

const bookDetailsContainer = document.getElementById('book-details');

// Hacer una nueva solicitud con el ID del libro para obtener los detalles
fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
  .then(response => response.json())
  .then(data => {
    const book = data;

    // Mostrar los detalles del libro
    const bookDetails = document.createElement('div');
    bookDetails.innerHTML = `
      <h2 class="titulo">${book.volumeInfo.title}</h2>
      <p class="parrafo1">${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor Desconocido'}</p>
      <p class="parrafo2">${book.volumeInfo.description ? book.volumeInfo.description : 'Sin descripción'}</p>
      <img class="portada-detalle" src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'Imagen no disponible'}" alt="Portada del libro">
      <a  href="javascript:history.back()">Volver</a> <!-- Enlace para volver atrás -->
    `;
    bookDetailsContainer.appendChild(bookDetails);
  })
  .catch(error => console.error('Error al obtener detalles del libro:', error));