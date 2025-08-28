var player1 = Math.floor(Math.random() * 6) + 1;

var randomimg = "images/dice" + player1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimg);

var player2 = Math.floor(Math.random() * 6) + 1;

var secondimg = "images/dice" + player2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", secondimg);

if (player1 > player2) {
  document.querySelector("h1").innerHTML = "player 1 win this match";
} else if (player2 > player1) {
  document.querySelector("h1").innerHTML = "player 2 win this match";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
