let stock = 5

    const priceElement = document.getElementById("product-price");
    const sizeSelector = document.getElementById("size-selector");
    const inventoryCount = document.getElementById("inventory-count");
    const addToPurchaseButton = document.getElementById("purchase-product");


    function updateInventory() {
        if (stock > 0 ) {
           addToPurchaseButton.disabled = false;
           inventoryCount.textContent = `In Stock: ${stock}`; 
        } else {
            addToPurchaseButton.disabled = true;
            inventoryCount.textContent = "Out of Stock"
        }
    }
addToPurchaseButton.addEventListener("click", () => {
    stock--
    updateInventory();
}) 

    updateInventory();

    

    sizeSelector.addEventListener("change", (event) => {
        const selectedPrice = event.target.value;
        priceElement.textContent = `$${selectedPrice}`; 
        updateInventory();
    });



