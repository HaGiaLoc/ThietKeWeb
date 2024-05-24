var stt = 0;
var tong = 0;

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: name, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("'" + name + "' đã được thêm vào giỏ hàng");
}

function updateCart(stt, name, price) {
    if (stt == 0) {
        alert("Không có sản phẩm nào trong giỏ hàng.");
    } else {
        let tableInfo = document.getElementById('cart-items');
        let newRow = "<tr> <td>" + stt + "</td> <td>" + name + "</td> <td class='tien'>" + formatNumber(price) + " VND</td> </tr>";
        tableInfo.innerHTML += newRow;
    }
}

function clearCart()
{
    localStorage.clear();
    location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    let totalPriceContainer = document.getElementById('sum');
    let totalPrice = 0;

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            stt = index + 1;
            updateCart(stt, item.name, item.price);
            totalPrice += Number(item.price);
        });
        totalPriceContainer.textContent = "Tổng tiền: " + formatNumber(totalPrice) + " VND";
    } else {
        cartItemsContainer.innerHTML = "<tr><td colspan='3'>Your cart is empty.</td></tr>";
    }
});