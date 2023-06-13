let books = [
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

// function to display books on the products page
const booksView = document.getElementById("books");
showBooks(books);

function showBooks(books) {
  books.forEach((book) => {
    let bookEl = document.createElement("div");
    bookEl.innerHTML="";
    bookEl.innerHTML = `
        <span class="row mt-auto">
        <img src="${book.img}" alt="${book.name}" id="book-cover" class="p-2">
        </span>
        
        <span class="row mt-auto">
        <h4 class="text-center">${book.name}</h4>
        <cite class="text-center">by ${book.author}</cite>
        <span class="mt-5 mb-0 p-2 d-flex align-items-center justify-content-between">
        <h5>R${book.price}</h5>
        <button onclick="addToCart(${book.id})" class="add-btn">Add to Cart</button>
        </span>
        </span>`;

    booksView.appendChild(bookEl);
  });
}

// sort functions
function sortHTL() {
  let sortedBooks = books.sort((b1, b2) =>
    parseFloat(b1.price) < parseFloat(b2.price)
      ? 1
      : parseFloat(b1.price) > parseFloat(b2.price)
      ? -1
      : 0
  );

  showBooks(sortedBooks);
}

function sortLTH() {
  let sortedBooks = books.sort((b1, b2) =>
    parseFloat(b1.price) > parseFloat(b2.price)
      ? 1
      : parseFloat(b1.price) < parseFloat(b2.price)
      ? -1
      : 0
  );

  showBooks(sortedBooks);
}

// functions to filter books by genre - how tf do I make this kak work?????
function filterNonfic() {
  let filteredBooks = books.filter((book) => book.genre === "nonfiction");

  showBooks(filteredBooks);
}

function filterRomance() {
  let filteredBooks = books.filter((book) => book.genre === "romance");

  showBooks(filteredBooks);
}

function filterCrimeMys() {
  let filteredBooks = books.filter((book) => book.genre === "crime");

  showBooks(filteredBooks);
}

function filterHorror() {
  let filteredBooks = books.filter((book) => book.genre === "horror");

  showBooks(filteredBooks);
}

function filterKids() {
  let filteredBooks = books.filter((book) => book.genre === "kids");

  showBooks(filteredBooks);
}

// cart functions
// local storage stuff - first initializing the cart as either an empty array or an array of books as retrieved from local storage
let cart = JSON.parse(localStorage.getItem("Books")) || [];
cartRefresh();

// allows the book to be added to cart if the quantity is more than 0, the quantity will be decreased by one if it's added to the cart
function addToCart(bookID) {
  const book = books.find((book) => book.id === bookID);
  if (book && book.quantity > 0) {
    cart.push(book);
    book.quantity--;
    cartRefresh();
  }
}

// removes an item from cart and increases it's quantity in stock by one
function takeFromCart(index) {
  let removedBook = cart.splice(index, 1)[0];
  removedBook.quantity++;
  cartRefresh();
}

// the actual cart function - shows in a modal on the html side, use the add and remove functions in here
function cartRefresh() {
  const basket = document.getElementById("cart-in");
  localStorage.setItem("Books", JSON.stringify(cart));

  basket.innerHTML = "";
  cart.forEach((book, index) => {
    const basketBook = document.createElement("div");
    basketBook.innerHTML = `
        <div class="p-2 d-flex align-items-center justify-content-between">
        <img src="${book.img}" alt="${book.name}" id="book-cover" style="width:100px;">
        <div class="me-auto p-3">
        <h5>${book.name}</h5>
        <p>R${book.price}</p>
        </div>
        <button onclick="takeFromCart(${index})" id="remove" class="rem-btn">x</button>
        </div>`;

    basket.appendChild(basketBook);
  });

  totalPrice();
}

// function that displays the total price of everything in the cart
function totalPrice() {
  let totalShow = document.getElementById("total");
  let total = 0;

  cart.forEach((book) => {
    total += eval(book.price);
  });

  totalShow.textContent = `R${total}`;
}