/*
    -Se realizeaza cu ajutorul modulelor;
    -Modulele permit ascunderea numelui unei functii in spatiul de nume global;
    -Se pot utiliza biblioteci cu functii identice fara conflicte
*/

const cart = {};

function addItem(product, quantity) {
    if (cart[product] !== undefined) {
        cart[product] += quantity;
    } else {
        cart[product] = quantity;
    }
}

function getItems() {
    return cart;
}

function removeItem(product, quantity) {
    if (cart[product] !== undefined) {
        if (quantity !== undefined) {
            if (quantity <= cart[product]){ 
                cart[product] -= quantity;
            }
        } else {
            delete cart[product];
        }
    }
}

// Modulul exporta un obiect cu proprietati sau o functie care
// pot fi importate si apelate
module.exports = { 
    addItem, removeItem, getItems
}