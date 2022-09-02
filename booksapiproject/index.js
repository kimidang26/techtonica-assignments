//This will be your express server

import express from "express";
import cors from "cors";
import originalBooks from "./kimsbooks.js";
import path from 'path';
import morgan from 'morgan';
import bodyParser from "body-parser";

let books = originalBooks;


//creates my whole app, call the express function and whatever is in it is our app
const app = express();
const PORT = 2626;



//middleware, app/express uses middleware/cors
let middleware = cors();
app.use(middleware);
// Congfigure body parser middleware
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());


//morgan
let logger = morgan('tiny')
app.use(logger);


//
let userFolder= 'person';
let staticMiddlewear = (express.static(userFolder));
app.use(staticMiddlewear);

//to let the server know what directory we are working on, know where were stating from so we can use it later
const __dirname = path.resolve();
console.log(__dirname);



//creating the /api/book endpoint -GET Request
//creating my own server to show all my books
app.get('/api/kimsbooks', (req, resp) => {
    resp.json(books);
})

//this is a route
app.get('/',(req,resp) => {
    // resp.send("Hello Everyone this is my library of books API");
    //open the index.html file that is in the person directory
    resp.sendFile(path.join(__dirname, 'person','index.html'));
})

//to get a single book
app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.redirect('/');
});



app.delete('/book/:isbn', (req,resp) => {
    //reading isbn from the URL
    const isbn = req.params.isbn;

    books=books.filter( i => {
        if (i.isbn !==isbn) {
            return true;
        }
        return false;
    })
    resp.send('Book is deleted');
});



app.post('/book/:isbn', (req, resp) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    // Remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }

    resp.send('Book is edited');
});



app.listen(PORT, () => console.log(`Hello Kimberly, Server is running at ${PORT}`));

////////////functions/////////////////////////

// function eliminateBook(isbn){
//     books=books.filter( i => {
//         if (i.isbn !==isbn) {
//             return true;
//         }
//         return false;
//     })
//     resp.send('Book is deleted');
// }

