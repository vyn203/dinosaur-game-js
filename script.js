game = document.querySelector('.game')
dino = document.querySelector('.dino')
cactus = document.querySelector('.cactus')
score = document.querySelector('.score span')
h5 = document.querySelector('h5')

function jump(){
    dino.classList.add('jump')
    setInterval(() => {
        dino.classList.remove('jump')

       leftCactus = window.getComputedStyle(cactus).getPropertyValue('left')
    }, 500);
}

win = 0;

GameOver = setInterval(() => {
    win++;
    score.innerText = win
    leftCactus = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    topDino = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    if(leftCactus<100 && leftCactus>50 && topDino>220){
        alert('Game Over! Score is ' + win)
        clearInterval(GameOver)
        cactus.style.animation = 'none';
        h5.innerText = "Refresh to restart the game."
    }
}, 100);