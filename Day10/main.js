/*
    Object + template string
*/ 
// let car = {
//     id:1,
//     name: "iphone",
//     price: 500,
//     driving: function(){
//         console.log("Bạn đang lái xe");
//     }
// }
// console.log(car.driving());

/*
    table: products
    id      name        price
    1       iphone      500
    2       xiaomi      300
    3       samsung     400

*/ 
// const products = [
//     {
//         id:1,
//         name:"iphone",
//         price:500
//     },
//     {
//         id:2,
//         name:"xiaomi",
//         price:300
//     },
//     {
//         id:3,
//         name:"samsung",
//         price:400
//     }
// ]

// function showProduct(){
//     const productDiv = document.querySelector(".product")
//     for(let item of products){
//         // console.log(item.name);
//         // console.log(item.price);
//         // productDiv.innerHTML += '<div class="item"> <h2>' + item.name + '</h2><p>' + item.price + '</p></div>'
//         productDiv.innerHTML += /*html*/`
//             <div class="item">
//                 <h2>${item.name}</h2>
//                 <p>${item.price}</p>
//             </div>
//         `
//     }
// }
/*
    viết 1 hàm lấy ra toàn bộ tên sản phẩm và giá sản phẩm
    thực hiện hiển thị tên sản phẩm và giá sản phẩm ra HTML
*/ 
// console.log(products);

// for(let item of products){
//     // console.log(item.id);
//     if(item.id == 1){
//         console.log(item.name);
//     }
// }
// const price = 500;
// // const str = "Hello" + price
// const str = `
//     Hello ${price}
// `
// console.log(str);


const products = [
    {
        id: 1,
        name: "iPhone 13 Pro Max",
        image: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
        price: 400,
        status: true,
    },
    {
        id: 2,
        name: "Xiaomi Mi 11 Lite",
        image: "https://cdn.tgdd.vn/Products/Images/42/233241/xiaomi-mi-11-lite-4g-black-1-200x200.jpg",
        price: 300,
        status: true,
    },
    {
        id: 3,
        name: "Samsung Galaxy S21",
        image: "https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-200x200.jpg",
        price: 300,
        status: false,
    }
]

function showProduct(){
    const tbody = document.querySelector("tbody")
    for(let item of products){
        tbody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>
                    <img src="${item.image}" alt="">
                </td>
                <td>${item.price}</td>
                <td>${item.status? "Còn hàng":"Hết hàng"}</td>
            </tr>
        `
    }
}
showProduct()