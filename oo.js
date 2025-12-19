var user = {
    name: 'Kevin Durant',
    age: '37',
    showMsg: function () {
        alert("你好，我是" + this.name + ", 今年" + this.age + "歲");
    }
};

//user.name = "Curry";
//user.age = "37";

document.getElementById("name").placeholder = user.name;
document.getElementById("age").placeholder = user.age;

document.getElementById("user").innerHTML = user.name + "<br>" + user.age + "歲<br>";

//alert(user.name + user.age);


var score = {
    history: 80,
    music: 90,
    pe: 95,
    showMsg: function () {
        alert("歷史" + this.history + "，音樂" + this.music + "，體育" + this.pe);
    }
};