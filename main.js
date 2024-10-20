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
//is stock if greater than 0, the popup will say "in stock"
addToPurchaseButton.addEventListener("click", () => {
    stock--
    updateInventory();
    if (stock > "0") { 
        alert(`Purchase confirmed for ${sizeSelector.value}.`);
    } else {
        alert("This product is out of stock.");
    }
});

    updateInventory();

//allows you to choose which size, the size will change when updated
    sizeSelector.addEventListener("change", (event) => {
        const selectedPrice = event.target.value;
        priceElement.textContent = `$${selectedPrice}`; 
        updateInventory();
    });


     //adding a new product when submitted on the form
    const addProductForm = document.getElementById("add-product-form")
    addProductForm.addEventListener("submit", (event) => {
        event.preventDefault();
    }
);





