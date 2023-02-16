// for coffee card
document.getElementById("card-coffee").addEventListener("click", function () {
    // get product data using by id
    const productName = document.getElementById('coffee-name').innerText;
    const productPrice = document.getElementById('coffee-price').innerText;
    const productQuantity = document.getElementById('coffee-quantity').innerText;
    const productCost = Number(productPrice) * Number(productQuantity);
    // disabled button
    disableButton('card-coffee');
    // display product information
    displayData(productName, productPrice, productQuantity, productCost);
    
});

// for heard card
document.getElementById('card-heart').addEventListener('click', function (event) {
    const productInfo = event.target.parentNode.parentNode.children;
    const productName = productInfo[0].innerText;
    const productPrice = productInfo[2].children[0].innerText;
    const productQuantity = productInfo[3].children[0].innerText;
    const productCost = Number(productPrice) * Number(productQuantity);
        // disabled button
        disableButton('card-heart');
    // display product information
    displayData(productName, productPrice, productQuantity, productCost);
})

// for panda card
document.getElementById('card-panda').addEventListener('click', function (event) {
    const productInfo = event.target.parentNode.parentNode.children;
    const productName = productInfo[0].innerText;
    const productPrice = productInfo[2].children[0].innerText;
    const productQuantity = productInfo[3].children[0].innerText;
    const productCost = Number(productPrice) * Number(productQuantity);
        // disabled button
        disableButton('card-panda');
    // display product information
    displayData(productName, productPrice, productQuantity, productCost);
})
// for umbrella card
document.getElementById('card-umbrella').addEventListener('click', function (event) {
    const productInfo = event.target.parentNode.parentNode.children;
    const productName = productInfo[0].innerText;
    const productPrice = productInfo[2].children[0].innerText;
    const productQuantity = productInfo[3].children[0].innerText;
    const productCost = (Number(productPrice) * Number(productQuantity)).toFixed(2);
        // disabled button
        disableButton('card-umbrella');
    // display product information
    displayData(productName, productPrice, productQuantity, productCost);
})

// for vue card
document.getElementById('card-vue').addEventListener('click', function (event) {
    const productInfo = event.target.parentNode.parentNode.children;
    const productName = productInfo[0].innerText;
    const productPrice = productInfo[2].value;
    const productQuantity = productInfo[3].value;
    const productCost = Number(productPrice) * Number(productQuantity);
    if (isNaN(productCost) || productCost <= 0) {
        return alert('please input valid integer');
    }
    // disabled button
    disableButton('card-vue');
    // display product information
    displayData(productName, productPrice, productQuantity, productCost);
})



// display data
let serial = 1;
let totalCost = 0;
function displayData (name, price, quantity, cost) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    totalCost += cost;
    tr.innerHTML = `
        <td>${serial++}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>${cost}</td>
    `;
    container.appendChild(tr);
}

// disabled button
function disableButton (id) {
    document.getElementById(id).setAttribute('disabled', true);
}