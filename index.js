// Rndom Number Generator
var randomNumber_1 = Math.floor(Math.random() * 6) + 1;
var randomNumber_2 = Math.floor(Math.random() * 6) + 1;


// Image Selection and Setting Attributes For 1st Image
var random_image_1 = "images/dice" + randomNumber_1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", random_image_1);


// Image Selection and Setting Attributes For 2nd Image
var random_image_2 = "images/dice" + randomNumber_2 + ".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", random_image_2);


// Changing Text  After Win

if (randomNumber_1 > randomNumber_2) {
    document.querySelector("h1").innerHTML = ("🚩 Play 1 Wins!")
} else if (randomNumber_1 < randomNumber_2) {
    document.querySelector("h1").innerHTML = ("Play 2 Wins! 🚩")
} else {
    document.querySelector("h1").innerHTML = ("🚩 Draw!");
}