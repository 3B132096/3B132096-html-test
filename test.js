// 匿名函式
var sum = function (a, b) {
    return a + b
};

//alert(sum(10, 20));
//window.alert(sum(10, 20));


// 自定義function
function greet() {
    const name = document.getElementById("userName").value;
    console.log(name);
} // 結尾沒有分號；


// 標準Function製作
function greetUser() {
    const name = document.getElementById("userName").value;
    document.getElementById("resultUser").textContent = name + "，你好你好！";
}


// 模組化function 
function getUserName() {
    const name = document.getElementById("userName").value;


    showMessage(name);
}


function showMessage(name) {
    document.getElementById("resultUser").textContent = name + "，你好你好！";
}