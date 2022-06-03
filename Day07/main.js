// comment 1 dòng
/*
    comment nhiều dòng 
*/
/*
    1. Biến: là đại lượng sinh ra để chứa giá trị (dữ liệu)
        khai báo biến trong Js
            var 
            let 
            const
*/ 

// {
//     let chieuDai = 10;
// }
// const chieuDai = 10;
// // chieuDai = 30;

// console.log("Chieu dai: "+chieuDai);

// let a = 10.5;

/*
    Toán tử và biểu thức
    Trong biểu thức bao gồm toán hạng và toán tử
    a = b + c
    toán hạng: a, b, c
    toán tử: + =

    toán tử gán: += -= *= /= = %=
    toán tử số học: + - * / % ++ --
    toán tử logic: && || !
    toán tử so sánh: > < >= <= == === != 
*/ 
/*
    Câu lệnh rẽ nhánh
        If ... else
            if
            if ... else
            if ... else if
*/ 
// let a = 11;
// if(a == 10){
//     console.log("A bang 10");
// }else{
//     console.log("A khong bang 10");
// }

// let diemThi = -10;
// if(diemThi < 5 && diemThi >= 0){
//     console.log("Truot bo roi");
// }else if (diemThi > 5 && diemThi <=10){
//     console.log("Ngon qua, qua mon roi :v");
// }else if(diemThi < 0 || diemThi > 10){
//     console.log("Thich nhap bo lao khong?");
// }

/*
    for 
    for of
    for each
*/ 
// const users = ["sontv","thienth","datlt"]
// // console.log(users[0])
// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }

// for(let item of users){
//     console.log(item);
// }
// console.log("-------- Foreach --------");
// users.forEach(function(item){
//     console.log(item);
// })

/*
    Các cách khai báo hàm
    Hàm có giá trị trả về và không có giá trị trả về
    Hàm có tham số và không có tham số
    Tham số: 
        giống như biến, được truyền vào hàm khi khởi tạo
    Đối số:
        là giá trị đưa vào hàm khi gọi hàm ra thực thi
*/



// function tinhTong(){
//     // console.log(arguments);
//     let sum = 0;
//     for(let i of arguments){
//         sum += i;
//         // sum = sum + i
//         //v1 sum = sum + 10 ->  10 
//         //v2 sum = sum + 20 -> 30
//     }
//     console.log(sum);
// }
// const tienDanhDe = tinhTong() + 50;
// console.log(tienDanhDe);
// // const tinhTong2 = function(){}

const userList = ["sontv8","datlt34","thienth","tiennh21","minhdq8"]
console.log(userList);
const user = prompt("Nhap vao ten user")
console.log(user);
for(let item of userList){
    if(user == item){
        console.log("User co ton tai trong mang")
    }
}