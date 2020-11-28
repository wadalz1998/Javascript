// console.log("console A");

// /**
//  * Bien
//  */
// var usename = "Sthing like that";
// var address = "112 CT";
// console.log("Ten: " + usename, "Dia chi: " + address);
// // console.log("Dia chi: "+address);

// var age = 18;

// // Hoisting
// // fullname : undefine !!!
// console.log("fullname: " + fullName);
// var fullName = "NG Van A";

// isLogin = true;
// console.log("ISLL:", isLogin);


// // Hằng số const
// const PI = 3.14;

// // Cau lenh Đ Kiện

// if (1 === "1") {
//     console.log("True !!!");
// } else
//     console.log("DK sai");

// // Cú pháp 
// // Đ.Kiện ? "Đúng" : "Sai"
// 1 === "1" ? console.log("True !!!") : console.log("false !!!")

// var btA = true;
// var btB = false;

// console.log("KQ: &&: ", btA && btB, btA || btB, !btA);

// // Switch- case

// switch (0) {
//     case 0:
//         console.log("So 0");
//         break;
//     case 1:
//         console.log("So 1");
//         break;
//     default:
//         break;
// }

// // Arraylist

// var list = ["Nguyen", "Ta", "Tan"];
// console.log(list);

// // for

// for (var i = 0; i < list.length; i++) {
//     console.log(list[i]);
// }


// var number_1 = 10;
// var number_2 = 6;

// var total = number_1 + number_2;
// console.log(total);

// // Ham` (sum() dat tren or duoi function deu dc)
// // sum();
// function sum(a, b) {
//     var totalSum = a + b;
//     return totalSum;
//     // console.log("Sum : ",totalSum);
// }
// // var total= sum(number_1,number_2);
// console.log(sum(number_1, number_2) + 50);


// // BT
// function aveng(a, b, c) {
//     return (a + b + c) / 3;
// }
// function rank(a) {
//     var xl;
//     if (a >= 9)
//         xl = "X.Xac";
//     else if (a >= 8)
//         xl = "Gioi";
//     else if (a >= 7) {
//         xl = "kha";
//     }
//     else if (a >= 6)
//         xl = "TB";
//     else
//         xl = "yeu";

//     return xl;
// }

// var t = 8, l = 7, h = 9;

// console.log(rank(aveng(t, l, h)));

// // DOM


var textInput = document.getElementById("txtInput").value;
console.log(textInput);

var _pText = document.getElementById("pText").innerText;
console.log(_pText);



//     // Cach 1
// function eventClick() {
//     var txtValue2 = document.getElementById("txtInput").value;
//     console.log(txtValue2);
// }

//     // Cach 2
// document.getElementById("bttnClick").onclick = function(){
//     var txtValueC2= document.getElementById("txtInput").value;
//     console.log(txtValueC2);
// }

//     // Cach 3 -callback Function
// Ex: 1
// document.getElementById("bttnClick").addEventListener("click",function(){
//     var txtTxtValueC3=document.getElementById("txtInput").value;
//     console.log(txtTxtValueC3);
// })
// Ex: 2
function demoClick() {
    var txtTxtValueEx = document.getElementById("txtInput").value;
    console.log(txtTxtValueEx);
}
document.getElementById("bttnClick").addEventListener("click", demoClick);


document.getElementById("btnClickMeDiv").addEventListener("click", function () {
    document.getElementById("txtDau").innerText = "Noi Dung Sau";
    document.getElementById("txtDau").style.backgroundColor = "aqua";
})
document.getElementById("btnHide").addEventListener("click", function () {
    document.getElementById("txtDau").style.display = "none";
})
document.getElementById("btnShow").addEventListener("click", function () {
    document.getElementById("txtDau").style.display = "block";
})
document.getElementById("btnDisable").addEventListener("click", function () {
    document.getElementById("btnClickMeDiv").disabled = true;
})
document.getElementById("btnAvailable").addEventListener("click", function () {
    // ex1
    // document.getElementById("btnClickMeDiv").disabled = false;
    // ex2
    document.getElementById("btnClickMeDiv").removeAttribute("disabled");
})

document.getElementById("btnBulbOn").addEventListener("click", function () {
    document.getElementById("imgBulb").src = "./img/pic_bulbon.gif";
})
document.getElementById("btnBulbOff").addEventListener("click", function () {
    document.getElementById("imgBulb").src = "./img/pic_bulboff.gif";
})

// -------------

document.getElementById("btnLogin").addEventListener("click", function () {
    var userName = document.getElementById("inputUserName").value;
    var userPassWord = document.getElementById("inputPassWord").value;
    if (userName === "cybersoft" && userPassWord === "cybersoft") {
        changeColor("login Thanh Cong !!!", "alert alert-success");
        // document.getElementById("txtThongBao").innerText = "login Thanh Cong !!!";
        // document.getElementById("txtThongBao").style.display = "block";
        // document.getElementById("txtThongBao").className = "text-success";
        // alert("Đăng Nhập Thành Công !!!");
    }
    else {
        changeColor("login that bai !!!", "alert alert-danger")
        // document.getElementById("txtThongBao").innerText = "login That Bai !!!";
        // document.getElementById("txtThongBao").style.display = "block";
        // document.getElementById("txtThongBao").className = "text-danger";
    }
})

function changeColor(mess, className) {
    document.getElementById("txtThongBao").innerText = mess;
    document.getElementById("txtThongBao").style.display = "block";
    document.getElementById("txtThongBao").className = className;
}

// DOM TagName / className

var tagName = document.getElementsByTagName("button")[1];
console.log(tagName);

var _className = document.getElementsByClassName("btn")[0];
console.log(_className);

// DOM querySelector

var _querySelector = document.querySelector(".container #txtThongBao");
console.log(_querySelector);

// DOM querySelectorALL
var _querySelectorAll = document.querySelectorAll(".container .form-group")[0];
console.log(_querySelectorAll);


// BT Tien TIP
function tienTip(a, b, c) {
    return (a * b * 0.01) / c;
}
document.getElementById("btnTinhTienTip").addEventListener("click", function () {
    var totalMoney = document.getElementById("txtTongTien").value;
    var perTip = document.getElementById("slPhanTramTip").value;
    var countPerson = document.getElementById("txtSoNguoi").value;
  
    var showText = tienTip(totalMoney, perTip, countPerson);
    document.getElementById("txtThongBaoTienTip").style.display = "block";
    document.getElementById("txtThongBaoTienTip").innerText =showText+ " $ mỗi người"  ;
    document.getElementById("txtThongBaoTienTip").className="alert alert-success";
    // console.log(perTip);
})





