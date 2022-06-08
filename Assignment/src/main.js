const ListProduct = [
    {
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/home/popular-item-1.png",
        category: 4
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/home/popular-item-2.png",
        category: 1
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/home/popular-item-1.png",
        category: 3
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/home/popular-item-2.png",
        category: 4
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/home/popular-item-1.png",
        category: 5
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./image/home/popular-item-2.png",
        category: 6
    }
]
const ListCategory = [
    {
        id: 1,
        name: "breakfast",
        image: "./image/home/breakfast.png"
    },
    {
        id: 2,
        name: "vegan",
        image: "./image/home/breakfast.png"
    },
    {
        id: 3,
        name: "meat",
        image: "./image/home/breakfast.png"
    },
    {
        id: 4,
        name: "dessert",
        image: "./image/home/breakfast.png"
    },
    {
        id: 5,
        name: "lunch",
        image: "./image/home/breakfast.png"
    },
    {
        id: 6,
        name: "chocolate",
        image: "./image/home/breakfast.png"
    },
    {
        id: 7,
        name: "uncategory",
        image: "./image/home/breakfast.png"
    }
]

function showProduct(data) {
    const popularList = document.querySelector(".popular-list")
    if (popularList) {
        popularList.innerHTML = "";
        for (let item of data) {
            popularList.innerHTML += `
            <div class="popular__item">
                <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
                <h3><a href="./detail.html">${item.name}</a></h3>
                <p>
                    <img src="./image/home/Timer.png" alt="">
                    <span>30 Minutes</span>
                    <img src="./image/home/ForkKnife.png" alt="">
                    <span>Snack</span>
                </p>
            </div>
        `
        }
    }

}
showProduct(ListProduct)

function showCategory() {

}

const filterSelect = document.querySelector("#filter-select")
function filterProduct() {
    const over30 = ListProduct.filter(function (item) {
        return item.price > 30
    })
    const under30 = ListProduct.filter(function (item) {
        return item.price <= 30
    })
    if (filterSelect.value == 'over30') {
        showProduct(over30)
    }
    if (filterSelect.value == 'under30') {
        showProduct(under30)
    }
    if (filterSelect.value == 'all') {
        showProduct(ListProduct)
    }
}
if(filterSelect){
    filterSelect.addEventListener("change", filterProduct)
}

function detailProduct() {
    const prdId = new URLSearchParams(window.location.search).get('id')
    const product = ListProduct.find(function(item){
        return item.id == prdId
    })
    // console.log(product);
    const detailProductDiv = document.querySelector('.detail-product')
    // console.log(detailProductDiv);
    if(detailProductDiv){
        detailProductDiv.innerHTML = `
            <div class="product-info">
                <h2>${product.name}</h2>
                <p class="price">$ ${product.price}</p>
                <p class="desc">${product.desc}</p>
                <form action="">
                    <input type="text" placeholder="Quantity">
                    <button type="submit">Add To Cart</button>
                </form>
            </div>
            <div class="product-img">
                <img src="${product.image}" alt="">
            </div>
        `
    }
    
}
detailProduct()

function listCategory(){
    for(let item of ListCategory){
        document.querySelector("#cate-list").innerHTML += `
            <li><a href="./products.html?cateId=${item.id}">${item.name}</a></li>
        `
    }
}
listCategory()

function listProductPage(data){
    const listProductDiv = document.querySelector('#list-product')
    if (listProductDiv) {
        listProductDiv.innerHTML = "";
        for (let item of data) {
            listProductDiv.innerHTML += `
            <div class="popular__item">
                <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
                <h3><a href="./detail.html">${item.name}</a></h3>
                <p>
                    <img src="./image/home/Timer.png" alt="">
                    <span>30 Minutes</span>
                    <img src="./image/home/ForkKnife.png" alt="">
                    <span>Snack</span>
                </p>
            </div>
        `
        }
    }
}
listProductPage(ListProduct)

function reRender(){
    const cateId = new URLSearchParams(window.location.search).get('cateId')
    const filterCategory = ListProduct.filter(function(item){
        return item.category == cateId
    })
    // console.log(filterCategory);
    listProductPage(filterCategory)
}

