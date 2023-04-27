
let url = 'https://anapioficeandfire.com/api/books';



async function fetchingBooks() {
    try {
      await fetch(url).then(((response) =>{
       return  response.json()
    })).then(
        ((data) => {
            let heading = document.createElement('h1');
            heading.textContent = 'George Novels'
            heading.setAttribute('id','heading')
            data.map((items) => {
            let displaybooks = document.getElementById('bookList');
            displaybooks.innerHTML += " ";
            
            

            //creating the div with class name book
            let bookscontainer = document.createElement('div');
            bookscontainer.classList.add('book')
            
            //book name
            let name = document.createElement('h2');
            name.textContent = ` ${items.name}`
            
            //Register Number
            let register = document.createElement('p');
            register.textContent = `ISBN : ${items.isbn}`
            
            //No of pages
             let pages = document.createElement('p');
             pages.textContent = `Number of Pages : ${items.numberOfPages}`
             
            //Character
             let charactername = document.createElement('h3');
             charactername.textContent = 'Characters'
             let character = document.createElement('p');
             character.textContent = ` ${items.characters.slice(0,5).join(', ')}...`
             
            //authors
             let author = document.createElement('p');
             author.textContent = `Authors : ${items.authors}`

            //publisher
             let publisher = document.createElement('p');
             publisher.textContent = `Publisher : ${items.publisher}`

            //reslased
             let releasedate = document.createElement('p');
             releasedate.textContent = `Released : ${items.released}`
            
             bookscontainer.appendChild(name);
             bookscontainer.appendChild(register); 
             bookscontainer.appendChild(pages); 
             bookscontainer.appendChild(author); 
             bookscontainer.appendChild(publisher);
             bookscontainer.appendChild(releasedate);
             bookscontainer.appendChild(charactername)
             bookscontainer.appendChild(character); 
             
             displaybooks.appendChild(bookscontainer)
             displaybooks.appendChild(heading)
          
             //filter the booksname and authorname
            const searchInput = document.getElementById('search');
            searchInput.addEventListener('keyup', event => {
            const query = event.target.value.toLowerCase();
           const books = displaybooks.getElementsByClassName('book');
           Array.from(books).forEach(book => {
          const bookTitle = book.getElementsByTagName('h2')[0].textContent.toLowerCase();
          const bookAuthors = book.getElementsByTagName('p')[4].textContent.toLowerCase();
          if (bookTitle.includes(query) || bookAuthors.includes(query)) {
            book.style.display = 'block';
          } else {
            book.style.display = 'none';
          }
        });
        });
      });

})
        
)
}catch(err){
    console.log(ReferenceError + err);
}}

fetchingBooks();



  