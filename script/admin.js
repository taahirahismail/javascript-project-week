let adminBooks = [
    {
        id: 1,
        img: "https://i.postimg.cc/Vk6Lg6rk/for-dummies-cover.jpg",
        name: "A Little Bit of Everything for Dummies",
        author: "John Wiley & Sons",
        price: "650.00",
        quantity: 10,
        genre: "nonfiction",
    },
    {
        id: 2,
        img: "https://i.postimg.cc/BnGqBv0d/coding-for-kids-cover.jpg",
        name: "Lift-the-Flap Computers and Coding",
        author: "Rosie Dickins",
        price: "125.00",
        quantity: 10,
        genre: "kids",
    },
    {
        id: 3,
        img: "https://i.postimg.cc/65ZWZvDr/comp-sci-coding-cover.jpg",
        name: "Everything You Need to Ace Computer Science and Coding in One Big Fat Notebook",
        author: "Grant Smith",
        price: "555.00",
        quantity: 10,
        genre: "nonfiction",
    },
    {
        id: 4,
        img: "https://i.postimg.cc/FKpsRXww/graveyard-apartment-cover.jpg",
        name: "The Graveyard Apartment",
        author: "Mariko Koike",
        price: "240.00",
        quantity: 10,
        genre: "horro",
    },
    {
        id: 5,
        img: "https://i.postimg.cc/Z5kqscrs/it-cover.jpg",
        name: "IT",
        author: "Stephen King",
        price: "700.00",
        quantity: 10,
        genre: "horro",
    },
    {
        id: 6,
        img: "https://i.postimg.cc/kMpGK9Dm/killing-code-cover.jpg",
        name: "The Killing Code",
        author: "J. D. Kirk",
        price: "325.00",
        quantity: 10,
        genre: "crime",
    },
    {
        id: 7,
        img: "https://i.postimg.cc/hj3DLbDr/kiss-quotient-cover.jpg",
        name: "The Kiss Quotient",
        author: "Helen Hoang",
        price: "550.00",
        quantity: 10,
        genre: "romance",
    },
    {
        id: 8,
        img: "https://i.postimg.cc/Y05tVrmL/love-and-heartbreak-cover.png",
        name: "The Code for Love and Heartbreak",
        author: "Jillian Cantor",
        price: "500.00",
        quantity: 10,
        genre: "romance",
    },
    {
        id: 9,
        img: "https://i.postimg.cc/hvfG6Zy6/lucy-lopez-cover.jpg",
        name: "Lucy Lopez: Coding Star",
        author: "Claudia Mills & Grace Zang",
        price: "98.00",
        quantity: 10,
        genre: "kids",
    },
    {
        id: 10,
        img: "https://i.postimg.cc/ZnBTVB0h/marriage-code-cover.jpg",
        name: "The Marriage Code",
        author: "Brooke Burroughs",
        price: "235.00",
        quantity: 10,
        genre: "romance",
    },
    {
        id: 11,
        img: "https://i.postimg.cc/rpMwMwZS/my-first-coding-cover.jpg",
        name: "My First Coding Book",
        author: "Kiki Prottsman",
        price: "120.00",
        quantity: 10,
        genre: "kids",
    },
    {
        id: 12,
        img: "https://i.postimg.cc/7YJ6NcTT/psycho-cover.jpg",
        name: "Psycho",
        author: "Robert Bloch",
        price: "250.00",
        quantity: 10,
        genre: "horror",
    },
    {
        id: 13,
        img: "https://i.postimg.cc/Rhy0B12F/sherlock-holmes-cover.jpg",
        name: "The Great Adventures of Sherlock Holmes",
        author: "Sir Arthur Conan Doyle",
        price: "400.00",
        quantity: 10,
        genre: "crime",
    },
    {
        id: 14,
        img: "https://i.postimg.cc/JzcR6W7t/simplifying-js-cover.jpg",
        name: "Simplifying JavaScript",
        author: "Joe Morgan",
        price: "950.00",
        quantity: 10,
        genre: "nonfiction",
    },
    {
        id: 15,
        img: "https://i.postimg.cc/9QGQ67bm/twyford-code-cover.jpg",
        name: "The Twyford Code",
        author: "Janice Hallett",
        price: "350.00",
        quantity: 10,
        genre: "crime",
    },
];

const tableView = document.getElementById("table-display");
tableView.addEventListener("onload", showTable());

localStorage.setItem("newBooks", JSON.stringify(adminBooks));

// function to show table with product information
function showTable() {
    adminBooks = JSON.parse(localStorage.getItem("newBooks"));
    tableView.innerHTML = "";

    adminBooks.forEach((book) => {
        const rowEl = document.createElement("tr");

        rowEl.innerHTML += `
        <td class="p-2 border-black d-flex">       
        <img src="${book.img}" alt="${book.name}" style="width:15%">
        <p class="mx-2 my-auto">
        ${book.name} <cite>by ${book.author}</cite>
        </p>
        </td>
        <td class="p-2 border border-black">${book.quantity}</td>
        <td class="p-2 border border-black">${book.price}</td>
        <td class="p-2 border border-black"> 
        <button data-bs-toggle="modal"
        data-bs-target="#edit-book-modal" onclick="editBook(${adminBooks.indexOf(book)})" class="btn btn-outline-primary m-1">edit</button> 
        <button onclick="deleteBook()" class="btn btn-outline-danger m-1">delete</button> 
        </td>`
        
        tableView.appendChild(rowEl);
    });
}

// function to add a new book to the products table
function addBook() {
    adminBooks = JSON.parse(localStorage.getItem("newBooks"));

    let book = {
        id: "",
        img: document.getElementById("book-cover").value,
        name: document.getElementById("book-title").value,
        author: document.getElementById("book-author").value,
        price: parseInt(document.getElementById("book-price").value),
        quantity: parseInt(document.getElementById("quantity").value),
        genre: document.getElementById("book-genre").value,
    };

    adminBooks.push(book);
    localStorage.setItem("newBooks", JSON.stringify(adminBooks));
    location.reload();
};

function editBook(index) {
    adminBooks = JSON.parse(localStorage.getItem("newBooks"));
    let book = adminBooks[index];

    let newImg = document.getElementById("book-cover-edit");
    let newName = document.getElementById("book-title-edit");
    let newAuthor = document.getElementById("book-author-edit");
    let newPrice = document.getElementById("book-price-edit").value;
    let newQuan = document.getElementById("quantity-edit").value;
    let newGenre = document.getElementById("book-genre-edit");

    book.img = newImg;
    book.name = newName;
    book.author = newAuthor;
    book.price = newPrice;
    book.quantity = newQuan;
    book.genre = newGenre;

    adminBooks[index] = book;
    
    showTable();
}

function deleteBook(index) {
    adminBooks = JSON.parse(localStorage.getItem("newBooks"));

    adminBooks.splice(index, 1)[0];

    localStorage.setItem("newBooks", JSON.stringify(adminBooks));
    
    location.reload();
}