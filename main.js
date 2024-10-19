
document.addEventListener("DOMContentLoaded", function() {
const priceElement = document.getElementById("product-price");
const sizeSelector =document.getElementById("size-selector");
const inventoryCount = document.getElementById("inventory-count");
const addToPurchaseButton = document.getElementById("purchase-product");

let stock = Number(sizeSelector.options[sizeSelector.selectedIndex].getAttribute("data-stock"));

function updateInventory() {
    inventoryCount.textContent =`In Stock: ${stock}`;
    addToPurchaseButton.disabled = stock === 0;
}
updateInventory();

sizeSelector.addEventListener("change" , (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`; 
    stock = Number(event.target.options[event.target.selectedIndex].getAttribute("data-stock")); 
    updateInventory();

});

addToPurchaseButton.addEventListener("click", () => {
    stock--
    updateInventory();
})
});