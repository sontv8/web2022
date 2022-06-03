/* ---- DOM ---- */ 
// console.log(document)
// const title = document.getElementById("title")
// console.log(title);

// const h2Tag = document.getElementsByTagName("h2")
// console.log(h2Tag[0]);

// const mainTitle = document.getElementsByClassName("main-title")
// console.log(mainTitle);

// const tag = document.querySelectorAll(".box .main-title")
// console.log(tag);

// const btnGet = document.querySelector("#btn-get")
// const quantity = document.querySelector("#quantity")


// btnGet.onclick = function(e){
//     e.preventDefault()
//     console.log(quantity.value);    
// }

// btnGet.addEventListener("click",function(e){
//     e.preventDefault()
//     console.log(quantity.value); 
// })

const username = document.querySelector("#username")
const password = document.querySelector("#password")
const btnLogin = document.querySelector("#btn-login")
const showError = document.querySelector(".show-error")

function showErrorMessage(message){
    showError.innerHTML = message
}
btnLogin.onclick = function(e){
    e.preventDefault()
    // console.log(username.value.length)
    if(username.value == ""){
        // showError.innerHTML = "Không được để trống username"
        showErrorMessage("Không được để trống username")
        // username.value = "Không được để trống username"
        return false;
    }
    if(username.value.length < 5){
        showErrorMessage("Username không được nhỏ hơn 5 ký tự")
        return false
    }
    if(password.value == ""){
        // showError.innerHTML = "Không được để trống password"
        showErrorMessage("Không được để trống password")
        return false;
    }
    console.log(username.value)
    console.log(password.value)
}