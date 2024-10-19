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
    if (stock > "0") { 
        alert(`Purchase confirmed for ${sizeSelector.value}.`);
    } else {
        alert("This product is out of stock.");
    }
});

    updateInventory();

    

    sizeSelector.addEventListener("change", (event) => {
        const selectedPrice = event.target.value;
        priceElement.textContent = `$${selectedPrice}`; 
        updateInventory();
    });


     //adding a new product when submitted on the form
     addProductForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("product-name").value;
        const price = document.getElementById("product-price").value;
        const stock = document.getElementById("product-stock").value;
        createProductElement(name, price, stock);
        addProductForm.reset();
    });

    //new product example
    createProductElement("shirt", 20, 3);