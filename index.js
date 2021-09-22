var player1 = Math.floor(1 + Math.random() * 6);
var player2 = Math.floor(1 + Math.random() * 6);

var image1 = "images/dice" + player1 + ".png";
var image2 = "images/dice" + player2 + ".png"; 

if (player2 > player1){
    var text = "Player 2 Wins! 🚩";
}else if (player1 > player2){
     var text = "🚩Player 1 Wins!";
}else {
    var text = "Draw!";
}

// document.querySelector("#main-text h1").textContent = text;
document.querySelector("#player1-image").src = image1;
document.querySelector("#player2-image").src = image2;

if (text === "Draw!"){
    document.querySelector("#main-text h1").innerHTML = text;
}
else{
    document.querySelector("#main-text h1").textContent = text;
}

// Deskop Mode

var viewMode = getCookie("view-mode");
if(viewMode == "desktop"){
    viewport.setAttribute('content', 'width=1024');
}else if (viewMode == "mobile"){
    viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
}
