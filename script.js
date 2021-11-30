
// Inputs
const addItemNameInput = document.getElementById("addItemNameInput");
const addItemQtyInput = document.getElementById("addItemQtyInput");
const removeItemNameInput = document.getElementById("removeItemNameInput");
const updateItemNameInput = document.getElementById("updateItemNameInput");
const updateItemQtyInput = document.getElementById("updateItemQtyInput");


// Buttons
const addItemButton = document.getElementById("addItemButton");
const removeItemButton = document.getElementById("removeItemButton");
const updateItemButton = document.getElementById("updateItemButton");


// Shopping List HTML
const shoppingListHtml = document.getElementById("shoppingListContainer");

// Shopping List Array
const shoppingList = [];







// Method for creating list of shopping items to display in HTML
const updateHtml = () => {

    // Remove the previous HTML
    shoppingListHtml.innerHTML = "";

    // Loop through the Shopping List Array
    for (let i = 0; i < shoppingList.length; i++) {
        
        // Ceate a List Item
        let listItem = document.createElement("li");

        // Set HTML of List Item
        listItem.innerHTML = `${shoppingList[i].name} -- ${shoppingList[i].qty}`;

        // Add List Item to Unordered List
        shoppingListHtml.append(listItem);
    };
};






// Add an Item to the Shopping List
addItemButton.addEventListener("click", e => {

    // Prevent page from refreshing
    e.preventDefault();

    // Check a Qty has been input
    if (addItemQtyInput.value) {

        // Create an Item
        let newItem = {
            name: addItemNameInput.value,
            qty: parseInt(addItemQtyInput.value)
        };

        // Add Item to Shopping List Array
        shoppingList.push(newItem);

        // Clear Input fields
        addItemNameInput.value = "";
        addItemQtyInput.value = "";

        // Update the HTML
        updateHtml();
    
    } else {
        // Alert if no Qty entered
        alert("You have to enter a Quantity");
    }
});






// Remove an Item from the Shopping List
removeItemButton.addEventListener("click", e => {

    // Prevent page from refreshing
    e.preventDefault();

    // Get Index of Item in Shopping List array
    let itemIndex = shoppingList.findIndex(item => item.name === removeItemNameInput.value);

    // Check Item Index Exists
    if (itemIndex !== -1) {

        // Remove Item from Shopping List Array
        shoppingList.splice(itemIndex, 1);

        // Clear Input field
        removeItemNameInput.value = "";
        
        // Update the HTML
        updateHtml();

    } else {
        // Alert if Item not found in Shopping List
        alert("Name not found in Shopping List");
    }
});





// Update the quantity of an Item in the Shopping List
updateItemButton.addEventListener("click", e => {

    // Prevent page from refreshing
    e.preventDefault();

    // Check a Qty has been input
    if (updateItemQtyInput.value) {

        // Get Index of Item in Shopping List array
        let itemIndex = shoppingList.findIndex(item => item.name === updateItemNameInput.value);

        // Check Item Index Exists
        if (itemIndex !== -1) {

            // Update Qty of Item in Shopping List array
            shoppingList[itemIndex].qty = parseInt(updateItemQtyInput.value);

            // Clear Input field
            updateItemNameInput.value = "";
            updateItemQtyInput.value = "";

            // Update the HTML
            updateHtml();
            
        } else {
            // Alert if Item not found in Shopping List
            alert("Name not found in Shopping List");
        }

    } else {
        // Alert if no Qty entered
        alert("You have to enter a Quantity");
    }
});
