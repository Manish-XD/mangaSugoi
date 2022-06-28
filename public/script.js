console.log("hello")

const shop = document.getElementById("shop");
const nav = document.getElementById("nav");

document.getElementById("shop-link").addEventListener("mouseover", displayShopDiv);
document.getElementById("shop-link").addEventListener("click", closeShopDiv);
document.getElementById("shop-link").addEventListener("mouseover", hideSearch);
document.getElementById("shop-link").addEventListener("mouseover", hideAccount);
// document.getElementById("home").addEventListener("mouseover", closeShopDiv);
document.getElementById("trending-link").addEventListener("mouseover", closeShopDiv);
document.getElementById("trending-link").addEventListener("mouseover", hideSearch);
document.getElementById("trending-link").addEventListener("mouseover", hideAccount);
document.getElementById("latest-link").addEventListener("mouseover", closeShopDiv);
document.getElementById("latest-link").addEventListener("mouseover", hideSearch);
document.getElementById("latest-link").addEventListener("mouseover", hideAccount);
document.getElementById("search-link").addEventListener("mouseover", closeShopDiv);
document.getElementById("search-link").addEventListener("mouseover", hideAccount);
document.getElementById("account-link").addEventListener("mouseover", closeShopDiv);
document.getElementById("account-link").addEventListener("mouseover", hideSearch);
document.getElementById("account-link").addEventListener("click", showAccount);
document.getElementById("login_btn").addEventListener("click", hideAccount);
document.getElementById("account_btn").addEventListener("click", hideAccount);
// shop.addEventListener("mouseout", closeShopDiv);

function showAccount()
{
    document.getElementById("account").style.display = "block";
}
function hideAccount()
{
    document.getElementById("account").style.display = "none";
}


function displayShopDiv()
{
    shop.style.display = "flex";
}
function closeShopDiv()
{
    shop.style.display = "none";
}

document.getElementById("solo-img").addEventListener("mouseover", underlineSoloLink);
document.getElementById("solo-img").addEventListener("mouseout", normalSoloLink);

function underlineSoloLink()
{
    document.getElementById("solo-link").style.textDecoration = "underline";
}
function normalSoloLink()
{
    document.getElementById("solo-link").style.textDecoration = "none";
}

document.getElementById("beg-img").addEventListener("mouseover", underlineBegLink);
document.getElementById("beg-img").addEventListener("mouseout", normalBegLink);

function underlineBegLink()
{
    document.getElementById("beg-link").style.textDecoration = "underline";
}
function normalBegLink()
{
    document.getElementById("beg-link").style.textDecoration = "none";
}

document.getElementById("nano-img").addEventListener("mouseover", underlineNanoLink);
document.getElementById("nano-img").addEventListener("mouseout", normalNanoLink);

function underlineNanoLink()
{
    document.getElementById("nano-link").style.textDecoration = "underline";
}
function normalNanoLink()
{
    document.getElementById("nano-link").style.textDecoration = "none";
}

document.getElementById("sec-img").addEventListener("mouseover", underlineSecLink);
document.getElementById("sec-img").addEventListener("mouseout", normalSecLink);

function underlineSecLink()
{
    document.getElementById("sec-link").style.textDecoration = "underline";
}
function normalSecLink()
{
    document.getElementById("sec-link").style.textDecoration = "none";
}

document.getElementById("search-link").addEventListener("click", showSearch);

function showSearch()
{
    document.getElementById("search").style.display = "block";
}
function hideSearch()
{
    document.getElementById("search").style.display = "none";
}

document.getElementById("cart_btn").addEventListener("click", showCartMenu);
document.getElementById("close_btn").addEventListener("click", closeCartMenu);

function showCartMenu()
{
    document.getElementById("cart_menu").style.transform = "translateX(0)";
}

function closeCartMenu()
{
    document.getElementById("cart_menu").style.transform = "translateX(100rem)";
}