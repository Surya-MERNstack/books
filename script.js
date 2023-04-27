
const url = 'https://anapioficeandfire.com/api/books';

async function fetchingBooks() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const heading = document.createElement('h1');
    heading.textContent = 'George Novels';
    heading.setAttribute('id', 'heading');

    data.forEach(async (book) => {
      const displayBooks = document.getElementById('bookList');

      //creating the div with class name book
      const booksContainer = document.createElement('div');
      booksContainer.classList.add('book');

      //book name
      const name = document.createElement('h2');
      name.textContent = book.name;

      //ISBN
      const register = document.createElement('p');
      register.textContent = `ISBN: ${book.isbn}`;

      //Number of pages
      const pages = document.createElement('p');
      pages.textContent = `Number of Pages: ${book.numberOfPages}`;

      //Characters
      const characterName = document.createElement('h3');
      characterName.textContent = 'Characters';
      const character = document.createElement('p');

      for (const charUrl of book.characters.slice(0, 10)) {
        const charRes = await fetch(charUrl);
        const charData = await charRes.json();
        character.textContent += `${charData.name}, `;
      }

      //Authors
      const author = document.createElement('p');
      author.textContent = `Authors: ${book.authors}`;

      //Publisher
      const publisher = document.createElement('p');
      publisher.textContent = `Publisher: ${book.publisher}`;

      //Release date
      const releaseDate = document.createElement('p');
      releaseDate.textContent = `Released: ${book.released}`;

      booksContainer.appendChild(name);
      booksContainer.appendChild(register);
      booksContainer.appendChild(pages);
      booksContainer.appendChild(author);
      booksContainer.appendChild(publisher);
      booksContainer.appendChild(releaseDate);
      booksContainer.appendChild(characterName);
      booksContainer.appendChild(character);

      displayBooks.appendChild(booksContainer);
      displayBooks.appendChild(heading);

      //filter the books name and author name
      const searchInput = document.getElementById('search');
      searchInput.addEventListener('keyup', (event) => {
        const query = event.target.value.toLowerCase();
        const books = displayBooks.getElementsByClassName('book');
        Array.from(books).forEach((book) => {
          const bookTitle = book.getElementsByTagName('h2')[0].textContent.toLowerCase();
          const bookAuthors = book.getElementsByTagName('p')[5].textContent.toLowerCase();
          if (bookTitle.includes(query) || bookAuthors.includes(query)) {
            book.style.display = 'block';
          } else {
            book.style.display = 'none';
          }
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
}

fetchingBooks();




  