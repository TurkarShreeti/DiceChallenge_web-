document.addEventListener("DOMContentLoaded", function () {

var randomNumber1 = Math.floor((Math.random()) * 6)+1;
var randomNumber2 = Math.floor((Math.random()) * 6)+1;

var imageChnager1 =document.querySelector('.img1');
var imageChnager2 = document.querySelector('.img2');
imageChnager1.setAttribute('src', 'dice' + randomNumber1 + '.png');
imageChnager2.setAttribute('src', 'dice' + randomNumber2 + '.png');


function winner(){
if(randomNumber1 > randomNumber2){
    return "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    return "Player 2 Wins";
}
else{
    return "Draw";

}

}
var outputOfWinner= winner();
document.querySelector("h1").textContent= outputOfWinner;

});




