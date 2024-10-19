document.addEventListener('DOMContentLoaded', () => {
    const priceElement = document.getElementById("product-price");
    const sizeSelector = document.getElementById("size-selector");
    const inventoryCount = document.getElementById("inventory-count");
    const addToPurchaseButton = document.getElementById("purchase-product");

    function updateInventory() {
        const selectedOption = sizeSelector.selectedOptions[0];
        const stock = parseInt(selectedOption.dataset.stock, 10);
        const price = selectedOption.dataset.price;

        priceElement.textContent = `$${price}`;
        inventoryCount.textContent = stock > 0 ? `In Stock: ${stock}` : "Out of Stock";
        addToPurchaseButton.disabled = stock <= 0;
    }

    addToPurchaseButton.addEventListener("click", () => {
        const selectedOption = sizeSelector.selectedOptions[0];
        let stock = parseInt(selectedOption.dataset.stock, 10);

        if (stock > 0) {
            stock--;
            selectedOption.dataset.stock = stock; 
            updateInventory(); 
        }
    });

    sizeSelector.addEventListener("change", updateInventory);

  
    updateInvtentory();
});


