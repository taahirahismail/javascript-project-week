let cash = JSON.parse(localStorage.getItem("Books")) || [];
let checkoutView = document.getElementById("checkout");

if (cash.length === 0) {
  document.getElementById("clear-cart").style.display = "none";
  document.getElementById("cash-total").style.display = "none";

  checkoutView.innerHTML = `
    <div class="m-2 p-3 text-center">
    <h3>
    Your cart is empty!
    </h3>
    <a href="../pages/products.html" class="btn btn-outline-success">Back to Our Books</a>
    </div>`;
}

// function to remove an item from the cart
function cashRemove(index) {
  cash.splice(index, 1)[0];

  checkout();
}

// function to display the items in the cart on the checkout page
function checkout() {
  checkoutView.innerHTML = "";

  cash.forEach((item, index) => {
    let cashEl = document.createElement("div");

    cashEl.innerHTML = "";
    cashEl.innerHTML = `
        <div class="m-2 border border-black blue-bg">
        <div class="p-2 d-flex align-items-center justify-content-between">
        <img src="${item.img}" alt="${
      item.name
    }" id="book-cover" style="width:100px;">
        <div class="me-auto p-3">
        <h5>${item.name}</h5>
        <p>R${parseInt(item.price).toFixed(2)}</p>
        </div>
        <button onclick="cashRemove(${index})" id="remove" class="rem-btn">x</button>
        </div>
        </div>`;

    checkoutView.appendChild(cashEl);
  });

  cashPrice();
}

checkout();

// function that displays the total price of everything in the cart
function cashPrice() {
  let cashShow = document.getElementById("cash-total");
  let totalCash = 0;

  cash.forEach((item) => {
    totalCash += eval(item.price);
  });

  cashShow.textContent = `Total Price: R${parseInt(totalCash).toFixed(2)}`;
}

// function to clear all items from the cart and from local storage
function clearCart() {
  localStorage.removeItem("Books");

  alert("Thank you for your purchase!");

  document.getElementById("clear-cart").style.display = "none";
  document.getElementById("cash-total").style.display = "none";

  checkoutView.innerHTML = `
    <div class="m-2 p-3 text-center">
    <h3>
    Your cart is empty!
    </h3>
    <a href="../pages/products.html" class="btn btn-outline-success">Back to Our Books</a>
    </div>`;
}

const clearBtn = document.getElementById("clear-cart");
clearBtn.addEventListener("click", clearCart);
