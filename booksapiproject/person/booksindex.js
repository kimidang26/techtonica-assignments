// import BOOKS from "./kimsbooks.js";

async function showBooks(){
    const URL = 'http://localhost:2626/api/kimsbooks';
    const response = await fetch(URL);
    const responseBooks = await response.json();
    //console.log(responseBooks);


    function printIsbn(isbn){
        console.log(`${isbn}`)
    };
    
 
    const setEditModal = (isbn) => {
        // Get information about the book using isbn
        const xhttp = new XMLHttpRequest();
    
        xhttp.open("GET", `http://localhost:2626/book/${isbn}`, false);
        xhttp.send();
        console.log("Im trying to edit!");
    
        const book = JSON.parse(xhttp.responseText);
    
        const {
            title,
            author,
        } = book;
    
        // Filling information about the book in the form inside the modal
        
        document.getElementById('isbn').value = isbn;
        document.getElementById('title').value = title;
        document.getElementById('author').value = author;
    
        // Setting up the action url for the book
        document.getElementById('editForm').action = `http://localhost:2626/book/${isbn}`;
    
    };


    for (let book of responseBooks){
   

        const card = `
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="class-title"> ${book.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
                            <div>Author: ${book.author}</div>
                            <div>Format: ${book.format}</div>
                            <div>Isbn: ${book.isbn}</div>
                             <br>
                             <button onclick="deleteBook('${book.isbn}')" type="button" class="btn btn-danger" id ="${book.isbn}">Delete</button> 

                             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editBookModal" onclick="setEditModal(${book.isbn})"> Edit </button>
        
                        </div>
                    </div>
                </div>`
                document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card;
        }
        // let elements = document.getElementsByClassName("btn btn-danger");
        // for (let i = 0; i < elements.length; i++) {
        //     elements[i].addEventListener('click', deleteBook, false);
        // }
    
}

showBooks();


function deleteBook(isbn){
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:2626/book/${isbn}`, false);
    xhttp.send();
    console.log("Trying to Delete!");
    // console.log(evt);
    // Reloading the page
    location.reload();
};
