let cash = JSON.parse(localStorage.getItem("Books"));
let checkoutView = document.getElementById("checkout");

function cashRemove(index) {
    cash.splice(index, 1)[0];
    // removedBook.quantity++;
    checkout();
  }

function checkout() {
    cash.forEach((item, index) => {
        let cashEl = document.createElement("div");

        cashEl.innerHTML = '';
        cashEl.innerHTML = `
        <div class="m-2 border border-black blue-bg">
        <div class="p-2 d-flex align-items-center justify-content-between">
        <img src="${item.img}" alt="${item.name}" id="book-cover" style="width:100px;">
        <div class="me-auto p-3">
        <h5>${item.name}</h5>
        <p>R${item.price}</p>
        </div>
        <button onclick="cashRemove(${index})" id="remove" class="rem-btn">x</button>
        </div>
        </div>`

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
  
    cashShow.textContent = `Total Price: R${(totalCash).toFixed(2)}`;
  }

function clearCart() {
    localStorage.clear();

    alert("Thank you for your purchase!");

    location.reload();
}