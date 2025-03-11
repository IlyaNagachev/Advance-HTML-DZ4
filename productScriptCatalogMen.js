//Пока не работает

const dataMen = JSON.parse(dataProductMen);
const cardListMen = document.querySelector(".cardListMen");
const cart = document.querySelector(".cart");

cardListMen.innerHTML = "";

dataMen.forEach((element) => {
    const itemElMen = document.createElement("div");
    itemElMen.classList.add("cardMen");

    const itemImgMen = document.createElement("img");
    itemImgMen.src = element.url;

    const itemHeadingMen = document.createElement("h1");
    itemHeadingMen.textContent = element.name;

    const itemTextMen = document.createElement("p");
    itemTextMen.textContent = element.text;

    const itemPriceMen = document.createElement("h2");
    itemPriceMen.textContent = `$${element.price}`;

    const itemButton = document.createElement("button");
    itemButton.classList.add("add-to-cart");
    itemButton.textContent = "Add to Cart";

    itemButton.setAttribute("data-id", element["product-list"]);

    cardListMen.appendChild(itemElMen);
    itemElMen.appendChild(itemImgMen);
    itemElMen.appendChild(itemHeadingMen);
    itemElMen.appendChild(itemTextMen);
    itemElMen.appendChild(itemPriceMen);
    itemElMen.appendChild(itemButton);
});

function addToCart(productId) {
    const productMen = dataMen.find((item) => item["product-list"] === productId);

    if (productMen) {
        const cartItemMen = document.createElement("li");
        cartItemMen.classList.add("cart-item");
        cartItemMen.setAttribute("data-id", productId);

        const itemImgMen = document.createElement("img");
        itemImgMen.src = productMen.url;
        itemImgMen.alt = productMen.name;
        itemImgMen.width = 50;

        const itemTitleMen = document.createElement("h3");
        itemTitleMen.textContent = productMen.name;

        const itemPriceMen = document.createElement("p");
        itemPriceMen.textContent = `$${productMen.price}`;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-item");
        removeButton.textContent = "X";

        cartItemMen.appendChild(itemImgMen);
        cartItemMen.appendChild(itemTitleMen);
        cartItemMen.appendChild(itemPriceMen);
        cartItemMen.appendChild(removeButton);

        cart.appendChild(cartItemMen);
    }
}

function removeFromCart(event) {
    if (event.target.classList.contains("remove-item")) {
        const cartItem = event.target.closest(".cart-item");
        if (cartItem) {
            cartItem.remove();
        }
    }
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
        const productId = event.target.getAttribute("data-id");
        addToCart(productId);
    }
});

cart.addEventListener("click", removeFromCart);