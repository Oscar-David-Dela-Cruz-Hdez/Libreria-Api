const tituloB = document.getElementById("buscar-libro");
const buscar = document.getElementById("buscar");
const claveAPI = "AIzaSyAWGonSjqE0D3jHF8IYj0nAUmi57U4ZF4I"; // Reemplaza 'TU_CLAVE_DE_API' con tu clave API

// mostrar frases del dia 

// Función para buscar libros por título
function buscarLibrosPorTitulo() {
  event.preventDefault();
  const titulo = tituloB.value.trim();
  // const claveAPI = "AIzaSyAWGonSjqE0D3jHF8IYj0nAUmi57U4ZF4I"; // Reemplaza 'TU_CLAVE_DE_API' con tu clave API
  const url = `https://www.googleapis.com/books/v1/volumes?q=${titulo}&key=${claveAPI}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error de red al buscar libros");
      }
      return response.json();
    })
    .then((data) => {
      mostrarLibros(data);
    })
    .catch((error) => {
      console.error("Error al buscar libros:", error);
    });
}

buscar.addEventListener("click", buscarLibrosPorTitulo);

const booksContainer = document.getElementById("books-container");
const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=${claveAPI}`;

// Conjunto para rastrear los IDs de libros mostrados
const shownBookIds = new Set();

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const books = data.items;

    books.forEach((book) => {
      const bookId = book.id;

      // Verifica si el ID del libro ya ha sido mostrado
      if (!shownBookIds.has(bookId)) {
        shownBookIds.add(bookId); // Agrega el ID del libro al conjunto de IDs mostrados

        const bookInfo = document.createElement("div");
        bookInfo.classList.add("contener");
        const detailsLink = document.createElement("a");
        detailsLink.href = `detalle-libro.html?id=${bookId}`;
        detailsLink.innerHTML = `
        <img src="${
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "Imagen no disponible"
        }" alt="Portada del libro">
            <b>${book.volumeInfo.title}</b>
            <p>${
              book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Autor Desconocido"
            }</p>
          `;
        bookInfo.appendChild(detailsLink);
        booksContainer.appendChild(bookInfo);
      }
    });
  });

//mostrar libros
function mostrarLibros(data) {
  booksContainer.innerHTML = ""; // Limpiar el contenedor antes de mostrar los resultados

  if (data.items) {
    data.items.forEach((libro) => {
      const books = data.items;

      books.forEach((book) => {
        const bookInfo = document.createElement("div");
        bookInfo.classList.add("contener");

        const detailsLink = document.createElement("a"); // Crear un enlace para los detalles del libro
        detailsLink.href = `detalle-libro.html?id=${book.id}`; // Enlazar a un archivo detalle-libro.html con el ID del libro como parámetro
        detailsLink.innerHTML = `
        <img  src="${
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "Imagen no disponible"
        }" alt="Portada del libro">
                <b>${book.volumeInfo.title}</b>
                <p>${
                  book.volumeInfo.authors
                    ? book.volumeInfo.authors.join(", ")
                    : "Autor Desconocido"
                }</p>
                
              `;
        bookInfo.appendChild(detailsLink);
        booksContainer.appendChild(bookInfo);
      });
    });
  } else {
    const noResults = document.createElement("p");
    noResults.textContent =
      "No se encontraron libros para la búsqueda proporcionada.";
    booksContainer.appendChild(noResults);
  }
}

//categoria en venta
// const shownBookIds = new Set();
// const claveAPI = "TU_CLAVE_API"; // Reemplaza 'TU_CLAVE_API' con tu clave de API de Google Books

// const booksContainer = document.getElementById("booksContainer"); // Reemplaza 'booksContainer' con el ID correcto de tu contenedor de libros

const ctVenta = document.getElementById("ctgVenta");
ctVenta.addEventListener("click", () => searchBooks("flowers"));

function searchBooks(keyword) {
  event.preventDefault();
  
  booksContainer.innerHTML = "";
  const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&projection=lite&key=${claveAPI}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const books = data.items;

      if (books) {
        books.forEach((book) => {
          if (!shownBookIds.has(book.id)) {
            shownBookIds.add(book.id);

            const bookInfo = document.createElement("div");
        bookInfo.classList.add("contener");

            const detailsLink = document.createElement("a");

            detailsLink.href = `detalle-libro.html?id=${book.id}`;

            detailsLink.innerHTML = `
              <img src="${
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "Imagen no disponible"
              }" alt="Portada del libro">
              <b>${
                book.volumeInfo.title ? book.volumeInfo.title : "Sin título"
              }</b>
              <p>${
                book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "Autor desconocido"
              }</p>
              <b>${
                book.saleInfo && book.saleInfo.listPrice
                  ? book.saleInfo.listPrice.amount
                  : "Precio no disponible"
              }</b>
              <button>Agregar</button>
            `;
            bookInfo.appendChild(detailsLink);
            booksContainer.appendChild(bookInfo);
          }
        });
      } else {
        alert("No se encontraron libros para esa consulta");
      }
    })
    .catch((error) => {
      alert("Error al obtener datos: " + error);
    });
}
