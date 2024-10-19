



    const priceElement = document.getElementById("product-price");
    const sizeSelector = document.getElementById("size-selector");
    const inventoryCount = document.getElementById("inventory-count");
    const addToPurchaseButton = document.getElementById("purchase-product");

    const products = {
        small: {price: 50, stock: 6},
        medium: {price: 60, stock:5},
        large: {price: 70, stock: 7}
    };

    function updateInventory() {
       const pickedSize = sizeSelector.value;
       const product = products[pickedSize];
       priceElement.textContent = `$${product.price}` 
       inventoryCount.textContent = product.stock > 0? `In stock: ${product.stock}` : "out of stock";
       addToPurchaseButton.disabled = product.stock <= 0;

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


   

