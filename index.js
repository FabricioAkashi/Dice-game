

var num = Math.floor((Math.random() * 6)+1);
var randomImage = "images/dice" + num + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage); 


var num1 = Math.floor((Math.random() * 6)+1);
var randomImage1 = "images/dice" + num1 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage1);


if (num1 === num){
    document.querySelector("h1").innerText = "Draw";
}else if (num > num1) {
    document.querySelector("h1").innerText = "Player 1 wins!";
} else {
    document.querySelector("h1").innerText = "Player 2 wins!";
}