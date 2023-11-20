/************CART EMPTYING************/


let remove = document.getElementById('remove');
// let item = document.getElementById('cart');
const item = document.querySelector("#cart");
console.log(item);
let payment = document.getElementById('payment');

function removeFromCart(){
        item.classList.add('removed');
        payment.classList.add('removed');

    if (item.className === 'removed' && payment.className === 'removed'){
    let empty = document.createElement('div');
    let btn = document.createElement('button');
    btn.textContent = "Go to shop"
    btn.id = "addItems"
    btn.style.marginBottom = "18px"
    btn.addEventListener("click", ()=>{
        window.location.href="shop.html";
    })
    item.innerHTML = "Cart is empty <i class='fa-solid fa-heart-crack'></i> <br> Add your favourite instrument <br> Let the joy of music & Harmony in your life!"
    item.style.textAlign = "center";
    item.style.fontWeight = "bold";
    item.style.padding = "10px";
    item.appendChild(empty);
    payment.textContent = ""
    payment.appendChild(btn);
}};

/**********CART ARETHMETICS***********/

let total = document.getElementById("total");
let counter = document.getElementById("quantity");
let quantity = parseInt(document.getElementById("quantity").value);
let subtotal = document.getElementById('prosub');
let subtotall = document.getElementById('sub');
let price = parseFloat(document.getElementById('price').textContent.replace("$", ""));



counter.addEventListener("change", (e)=>{
    quantity = Number(e.target.value);
    countCost();
})

counter.addEventListener("input", (e)=>{
    quantity = Number(e.target.value);
    countCost();
})

function countCost(){
    let cost = (quantity * price).toFixed(2)
    subtotal.textContent = `$ ${cost}`;
    subtotall.textContent = `$ ${cost}`;
    total.textContent = `$ ${cost}`;
}
