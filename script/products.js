let books = JSON.parse(localStorage.getItem("newBooks"));

// function to display books on the products page
const booksView = document.getElementById("books");
showBooks(books);

function showBooks(books) {
  booksView.innerHTML = "";

  books.forEach((book) => {
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
        <span class="row mt-auto">
        <img src="${book.img}" alt="${book.name}" id="book-cover" class="p-2">
        </span>
        
        <span class="row mt-auto">
        <h4 class="text-center">${book.name}</h4>
        <cite class="text-center">by ${book.author}</cite>
        <span class="mt-5 mb-0 p-2 d-flex align-items-center justify-content-between">
        <h5>R${parseInt(book.price).toFixed(2)}</h5>
        <button onclick="addToCart(${book.id})" class="add-btn">Add to Cart</button>
        </span>
        </span>`;

    booksView.appendChild(bookEl);
  });
}

// sort functions
function sortHTL() {
  let sortedBooks = [...books].sort((b1, b2) => b2.price - b1.price);
  showBooks(sortedBooks);
}

function sortLTH() {
  let sortedBooks = [...books].sort((b1, b2) => b1.price - b2.price);
  showBooks(sortedBooks);
}


// functions to filter books by genre
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
        <p>R${parseInt(book.price).toFixed(2)}</p>
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

  totalShow.textContent = `R${parseInt(total).toFixed(2)}`;
}