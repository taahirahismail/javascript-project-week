let adminBooks = JSON.parse(localStorage.getItem("newBooks")) || [
  {
    id: 1,
    img: "https://i.postimg.cc/Vk6Lg6rk/for-dummies-cover.jpg",
    name: "A Little Bit of Everything for Dummies",
    author: "John Wiley & Sons",
    price: 650,
    quantity: 10,
    genre: "nonfiction",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/BnGqBv0d/coding-for-kids-cover.jpg",
    name: "Lift-the-Flap Computers and Coding",
    author: "Rosie Dickins",
    price: 125,
    quantity: 10,
    genre: "kids",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/65ZWZvDr/comp-sci-coding-cover.jpg",
    name: "Everything You Need to Ace Computer Science and Coding in One Big Fat Notebook",
    author: "Grant Smith",
    price: 555,
    quantity: 10,
    genre: "nonfiction",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/FKpsRXww/graveyard-apartment-cover.jpg",
    name: "The Graveyard Apartment",
    author: "Mariko Koike",
    price: 240,
    quantity: 10,
    genre: "horror",
  },
  {
    id: 5,
    img: "https://i.postimg.cc/Z5kqscrs/it-cover.jpg",
    name: "IT",
    author: "Stephen King",
    price: 700,
    quantity: 10,
    genre: "horror",
  },
  {
    id: 6,
    img: "https://i.postimg.cc/kMpGK9Dm/killing-code-cover.jpg",
    name: "The Killing Code",
    author: "J. D. Kirk",
    price: 325,
    quantity: 10,
    genre: "crime",
  },
  {
    id: 7,
    img: "https://i.postimg.cc/hj3DLbDr/kiss-quotient-cover.jpg",
    name: "The Kiss Quotient",
    author: "Helen Hoang",
    price: 550,
    quantity: 10,
    genre: "romance",
  },
  {
    id: 8,
    img: "https://i.postimg.cc/Y05tVrmL/love-and-heartbreak-cover.png",
    name: "The Code for Love and Heartbreak",
    author: "Jillian Cantor",
    price: 500,
    quantity: 10,
    genre: "romance",
  },
  {
    id: 9,
    img: "https://i.postimg.cc/hvfG6Zy6/lucy-lopez-cover.jpg",
    name: "Lucy Lopez: Coding Star",
    author: "Claudia Mills & Grace Zang",
    price: 98,
    quantity: 10,
    genre: "kids",
  },
  {
    id: 10,
    img: "https://i.postimg.cc/ZnBTVB0h/marriage-code-cover.jpg",
    name: "The Marriage Code",
    author: "Brooke Burroughs",
    price: 235,
    quantity: 10,
    genre: "romance",
  },
  {
    id: 11,
    img: "https://i.postimg.cc/rpMwMwZS/my-first-coding-cover.jpg",
    name: "My First Coding Book",
    author: "Kiki Prottsman",
    price: 120,
    quantity: 10,
    genre: "kids",
  },
  {
    id: 12,
    img: "https://i.postimg.cc/7YJ6NcTT/psycho-cover.jpg",
    name: "Psycho",
    author: "Robert Bloch",
    price: 250,
    quantity: 10,
    genre: "horror",
  },
  {
    id: 13,
    img: "https://i.postimg.cc/Rhy0B12F/sherlock-holmes-cover.jpg",
    name: "The Great Adventures of Sherlock Holmes",
    author: "Sir Arthur Conan Doyle",
    price: 400,
    quantity: 10,
    genre: "crime",
  },
  {
    id: 14,
    img: "https://i.postimg.cc/JzcR6W7t/simplifying-js-cover.jpg",
    name: "Simplifying JavaScript",
    author: "Joe Morgan",
    price: 950,
    quantity: 10,
    genre: "nonfiction",
  },
  {
    id: 15,
    img: "https://i.postimg.cc/9QGQ67bm/twyford-code-cover.jpg",
    name: "The Twyford Code",
    author: "Janice Hallett",
    price: 350,
    quantity: 10,
    genre: "crime",
  },
];

// function to display the products in a table on the DOM
function showTable() {
  let tableView = document.getElementById("table-display");
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
        <td class="p-2 border border-black">R${parseInt(book.price).toFixed(
          2
        )}</td>
        <td class="p-2 border border-black"> 
        <button data-bs-toggle="modal"
        data-bs-target="#edit-book-modal" onclick="editBook(${adminBooks.indexOf(
          book
        )})" class="btn btn-outline-primary m-1">edit</button> 
        <button onclick="deleteBook(${adminBooks.indexOf(
          book
        )})" class="btn btn-outline-danger m-1">delete</button> 
        </td>`;

    tableView.appendChild(rowEl);
  });

  localStorage.setItem("newBooks", JSON.stringify(adminBooks));
}

showTable();

// function to add a new book to the products table
let addBook = document.getElementById("add-btn");

addBook.addEventListener("click", () => {
  try {
    const img = document.getElementById("book-cover").value;
    const name = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const price = parseInt(document.getElementById("book-price").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const genre = document.getElementById("book-genre").value;

    let id =
      adminBooks.map((book) => book.id).at(-1) >= 1
        ? adminBooks.map((book) => book.id).at(-1)
        : 0;
    id++;

    adminBooks.push({
      id,
      img,
      name,
      author,
      price,
      quantity,
      genre,
    });

    localStorage.setItem("newBooks", JSON.stringify(adminBooks));
    showTable();
  } catch (error) {
    console.error("Unable to add new book:", error);
  }
});

// function to edit/update an existing book
function editBook(index) {
  adminBooks = JSON.parse(localStorage.getItem("newBooks"));
  let book = adminBooks[index];

  try {
    document.getElementById("book-cover-edit").value = book.img;
    document.getElementById("book-title-edit").value = book.name;
    document.getElementById("book-author-edit").value = book.author;
    document.getElementById("book-price-edit").value = book.price;
    document.getElementById("quantity-edit").value = book.quantity;
    document.getElementById("book-genre-edit").value = book.genre;

    let updateButton = document.getElementById("edit-book-update-btn");

    updateButton.addEventListener("click", () => {
      book.img = document.getElementById("book-cover-edit").value;
      book.name = document.getElementById("book-title-edit").value;
      book.author = document.getElementById("book-author-edit").value;
      book.price = parseFloat(document.getElementById("book-price-edit").value);
      book.quantity = parseInt(document.getElementById("quantity-edit").value);
      book.genre = document.getElementById("book-genre-edit").value;

      localStorage.setItem("newBooks", JSON.stringify(adminBooks));
      showTable();
    });
  } catch (error) {
    console.error("Unable to update book:", error);
  }
}

// function to delete a book from the array
function deleteBook(index) {
  adminBooks = JSON.parse(localStorage.getItem("newBooks"));

  adminBooks.splice(index, 1);

  localStorage.setItem("newBooks", JSON.stringify(adminBooks));
  showTable();
}
