var rand1 = Math.floor(Math.random() * 6)+1;
var rand2 = Math.floor(Math.random() * 6)+1;
document.querySelector('.img1').setAttribute('src','./images/dice'+rand1+'.png');
document.querySelector('.img2').setAttribute('src','./images/dice'+rand2+'.png');

if (rand1 > rand2){
    document.querySelector('h1').innerHTML = 'Player 1 Wins!';
} else if (rand2 > rand1){
    document.querySelector('h1').innerHTML = 'Player 2 Wins!';
} else {
    document.querySelector('h1').innerHTML = 'It\'s a Draw!';
}

document.querySelector('button').onclick = function(){
    window.location.reload();
}