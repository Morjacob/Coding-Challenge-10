const priceElement = document.getElementById("product-price");
const sizeSelector =document.getElementById("size-selector");
const inventoryCount = document.getElementById("inventory-count");
const addToPurchaseButton = document.getElementById("purchase-product");

let stock = Number(sizeSelector.options[sizeSelector.selectedIndex].getAtrribute("data-stock"));
sizeSelector.addEventListener("change" , (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContext = `$${selectedPrice}`
    stock = Number(event.target.options[event.target.selectedIndex].getAttribute("data-stock")); // Use Number here
    updateInventory();
})


// Task 3- handle stock availability

function updateInventory() {
    inventoryCount.textContent =`In Stock: ${stock}`;
    addToPurchaseButton.disabled = stock === 0;
}

addToPurchaseButton.addEventListener("click", () => {
    stock--
    updateInventory();
})

updateInventory();