const books = [
    {
        id: 1,
        img: "https://i.postimg.cc/Vk6Lg6rk/for-dummies-cover.jpg",
        name: "A Little Bit of Everything for Dummies",
        author: "John Wiley & Sons",
        desc: "",
        price: "650.00",
        quantity: 10,
        genre: "nonfiction",
    },
    {
        id: 2,
        img: "https://i.postimg.cc/BnGqBv0d/coding-for-kids-cover.jpg",
        name: "Lift-the-Flap Computers and Coding",
        author: "Rosie Dickins",
        desc: "",
        price: "125.00",
        quantity: 10,
        genre: "kids",
    },
    {
        id: 3,
        img: "https://i.postimg.cc/65ZWZvDr/comp-sci-coding-cover.jpg",
        name: "Everything You Need to Ace Computer Science and Coding in One Big Fat Notebook",
        author: "Grant Smith",
        desc: "",
        price: "555.00",
        quantity: 10,
        genre: "nonfiction",
    },
    {
        id: 4,
        img: "https://i.postimg.cc/FKpsRXww/graveyard-apartment-cover.jpg",
        name: "The Graveyard Apartment",
        author: "Mariko Koike",
        desc: "",
        price: "240.00",
        quantity: 10,
        genre: "horro",
    },
    {
        id: 5,
        img: "https://i.postimg.cc/Z5kqscrs/it-cover.jpg",
        name: "IT",
        author: "Stephen King",
        desc: "",
        price: "700.00",
        quantity: 10,
        genre: "horro",
    },
    {
        id: 6,
        img: "https://i.postimg.cc/kMpGK9Dm/killing-code-cover.jpg",
        name: "The Killing Code",
        author: "J. D. Kirk",
        desc: "",
        price: "325.00",
        quantity: 10,
        genre: "crime",
    },
    {
        id: 7,
        img: "https://i.postimg.cc/hj3DLbDr/kiss-quotient-cover.jpg",
        name: "The Kiss Quotient",
        author: "Helen Hoang",
        desc: "",
        price: "550.00",
        quantity: 10,
        genre: "romance",
    },
    {
        id: 8,
        img: "https://i.postimg.cc/Y05tVrmL/love-and-heartbreak-cover.png",
        name: "The Code for Love and Heartbreak",
        author: "Jillian Cantor",
        desc: "",
        price: "500.00",
        quantity: 10,
        genre: "romance",
    },
    {
        id: 9,
        img: "https://i.postimg.cc/hvfG6Zy6/lucy-lopez-cover.jpg",
        name: "Lucy Lopez: Coding Star",
        author: "Claudia Mills & Grace Zang",
        desc: "",
        price: "98.00",
        quantity: 10,
        genre: "kids",
    },
    {
        id: 10,
        img: "https://i.postimg.cc/ZnBTVB0h/marriage-code-cover.jpg",
        name: "The Marriage Code",
        author: "Brooke Burroughs",
        desc: "",
        price: "235.00",
        quantity: 10,
        genre: "romance",
    },
    {
        id: 11,
        img: "https://i.postimg.cc/rpMwMwZS/my-first-coding-cover.jpg",
        name: "My First Coding Book",
        author: "Kiki Prottsman",
        desc: "",
        price: "120.00",
        quantity: 10,
        genre: "kids",
    },
    {
        id: 12,
        img: "https://i.postimg.cc/7YJ6NcTT/psycho-cover.jpg",
        name: "Psycho",
        author: "Robert Bloch",
        desc: "",
        price: "250.00",
        quantity: 10,
        genre: "horror",
    },
    {
        id: 13,
        img: "https://i.postimg.cc/Rhy0B12F/sherlock-holmes-cover.jpg",
        name: "The Great Adventures of Sherlock Holmes",
        author: "Sir Arthur Conan Doyle",
        desc: "",
        price: "400.00",
        quantity: 10,
        genre: "crime",
    },
    {
        id: 14,
        img: "https://i.postimg.cc/JzcR6W7t/simplifying-js-cover.jpg",
        name: "Simplifying JavaScript",
        author: "Joe Morgan",
        desc: "",
        price: "950.00",
        quantity: 10,
        genre: "nonfiction",
    },
    {
        id: 15,
        img: "https://i.postimg.cc/9QGQ67bm/twyford-code-cover.jpg",
        name: "The Twyford Code",
        author: "Janice Hallett",
        desc: "",
        price: "350.00",
        quantity: 10,
        genre: "crime",
    },
];

function showBooks() {
    const booksView = document.getElementById("books");
    
    books.forEach((book) => {
        const bookEl = document.createElement("div");

        bookEl.innerHTML = `
        <img src="${book.img}" alt="${book.name}" id="book-cover">
        <h4>${book.name}</h4>
        <cite>by ${book.author}</cite>
        <p>${book.desc}</p>

        <span class="p-2 d-flex align-items-center justify-content-between">
        <h5>R${book.price}</h5>
        <button onclick="addToCart(${book.id})" class="add-btn">Add to Cart</button>
        </span>`;
        

        booksView.appendChild(bookEl);
    });
}

showBooks();

let cart = JSON.parse(localStorage.getItem("Books")) || [];

function addToCart(bookID) {
    const book = books.find((book) => book.id === bookID);
    if (book && book.quantity > 0) {
        cart.push(book);
        book.quantity--;
        cartRefresh();
    }
}

function takeFromCart(index) {
    let removedBook = cart.splice(index, 1)[0];
    removedBook.quantity++;
    cartRefresh();
}

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

function totalPrice() {
    let totalShow = document.getElementById("total");
    let total = 0;

    cart.forEach(book => {
        total += eval(book.price)
    })

    totalShow.textContent = `R${total}`;
}

cartRefresh();