/* Shawn Christopher */

/* global stict mode */
"use strict";

/* DARK MODE */
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

/*  PRODUCT SWITCHER */
/* ---- Product 1 */
function viewProduct1() {
    document.getElementById("productTitle").innerHTML="Impeccable Fanner Waffle Iron";
    document.getElementById("productImage").src="waffleIron.jpeg";
    document.getElementById("productDescription").innerHTML="Make waffles like your grandparents or great-grandparents did when they were kids.  This rare Fanner Mfg. Co. waffle iron makes outstanding waffles and can be passed down for generations to come.  The nonstick surface is perfectly seasoned.  No need to deal with electronic parts that give out on modern waffle irons."
}
/* ---- Product 2 */
function viewProduct2() {
    document.getElementById("productTitle").innerHTML="Classic Griswold No. 8 Skillet";
    document.getElementById("productImage").src="skillet.jpeg";
    document.getElementById("productDescription").innerHTML="This is an all-time classic Griswold No. 8 skillet.  Impeccably restored and ready to use.  Great for home and outdoor use.  This is the workhorse of cast iron cookware.  These skillets are great for making a variety of your favorites."
}

/* ---- Product 3 */
function viewProduct3() {
    document.getElementById("productTitle").innerHTML="Lodge No. 8 Dutch Oven";
    document.getElementById("productImage").src="lodgeDutchOven.jpeg";
    document.getElementById("productDescription3").innerHTML="Lodge may be the prominent modern cast iron manufacturer, but this vintage No. 8 Dutch Oven shows that they have been around and making great cookware for decades."
}

/* GAME */ 
/* -- make function */
function guessGame(){
/* -- get user input between 1 and 10 */
    let userInput = document.getElementById("numGuess").value;
/* -- generate random number between 1 and 10 */
    let randomNum = Math.floor(Math.random() * 10);
   //  console.log(userInput);
   /* let randomNum = 5; */
/* -- compare userInput and randomNumber */ 
/*  -- if same, WIN */  
    if(userInput == randomNum){
        gameOutput.innerHTML = "Winner, Winner, Chicken Dinner!";
    }
/* -- else, LOSE */ 
    else {
        gameOutput.innerHTML = "OOF! You're a Loser Baby, Try Again.";
    }
}




