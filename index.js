var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1 += 1);
var randomDiceImg1 = "dice" + randomNumber1 +".png" ;
var randomDiceImgSrc1 = "./images/" + randomDiceImg1 ;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2 += 1);
var randomDiceImg2 = "dice" + randomNumber2 +".png" ;
var randomDiceImgSrc2 = "./images/" + randomDiceImg2 ;

document.querySelector(".img1").setAttribute("src" , randomDiceImgSrc1)
document.querySelector(".img2").setAttribute("src" , randomDiceImgSrc2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!🏁";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent="Player 2 Wins🏁";
}else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent="Match Tied!";
}