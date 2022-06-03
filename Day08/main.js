// const userList = new Array()
// const userList = ["sontv","thienth","datlt"];
// userList[0] = "sontv";
// console.log(userList);
// for(let item of userList){
//     console.log(item);
// }

// userList.push("tiennh"); //thêm phần tử vào cuối mảng
// userList.unshift("huynh"); //thêm phần tử vào đầu mảng
// userList.pop(); // xóa phần tử cuối mảng
// userList.shift();// xóa phần tử đầu mảng
// userList.splice(0,0,"tiennh"); 
/*
    thêm phần tử sử dụng hàm splice()
    trong hàm splice nhận vào 3 tham số
        tham số 1: vị trí index của phần tử muốn thêm vào
        tham số 2: deleteCount - tham số này được sử dụng để 
            quyết định xem có giữ nguyên hay xóa phần tử ở vị trí
            index ở tham số 1 đi hay không (nếu không muốn xóa đi gì thì để 0)
        tham số 3: giá trị muốn thêm mới vào vị trí index ở tham số 1
*/ 

// console.log(userList);
// userList.splice(1,1,"huynh");
/*
    cập nhật giá trị phần tử sử dụng splice()
        tham số 1: vị trí index của phần tử muốn thêm vào
        tham số 2: muốn cập nhật phần tử ở vị trí index
            truyền vào ở tham số 1 thì để vào giá trị là 1,
            nó sẽ xóa đi giá trị hiện tại và thay vào đó 
            là giá trị ở tham số thứ 3
        tham số 3: giá trị cần cập nhật
*/ 

// console.log(userList);

// const user = prompt("Nhap vao ten user"); //nhập giá trị từ bàn phím sử dụng hàm prompt
// // for(let item of userList){ //lặp qua mảng userList
// //     if(item == user){ //kiểm tra xem giá trị nhập vào ở biến user có trùng với phần tử nào trong mảng hay không
// //         console.log("user co ton tai trong mang")
//             //nếu có thì log ra dòng bên trên
// //     }
// // }
// console.log(userList)

// if(userList.includes(user)){ 
//     //sử dụng hàm includes() để kiểm tra xem trong mảng 
//     //userList có tồn tại giá trị nhập vào trong biến user hay không
//     const userIndex = userList.indexOf(user) 
//     // sử dụng hàm indexOf() để lấy ra vị trí của user trong mảng userList
//     console.log(userIndex); //log ra vị trí của user
//     console.log("user co ton tai trong mang")
// }

/*
    Tạo 1 mảng số nguyên
    Viết chương trình thực hiện yêu cầu sau
    Nếu tất cả các phần từ của mảng là số chẵn thì in ra "Yes" 
    Nếu không in ra "No"
*/

// const numberList = [2,4,6,8,24];
// let count = 0;
// for(let item of numberList){
//     if(item %2 != 0){
//         count++;
//     }
// }
// if(count != 0){
//     console.log("No")
// }else{
//     console.log("Yes")
// }

/*
    Bài 3:
    Tạo 1 mảng numbers (mảng ban đầu là mảng rỗng)
    Sử dụng vòng lặp để thêm 5  số vào mảng (số nhập vào từ bàn phím)
    Hiển thị ra giá trị của mảng
*/ 

const numberList = [];
for(let i = 1; i<= 5;i++){
    let numberValue = Number(prompt("Nhap vao so"))
    numberList.push(numberValue);
}
console.log(numberList)