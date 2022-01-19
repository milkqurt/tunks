let tank = document.querySelector('.tank'),
    soundMove = document.querySelector('.sound-move'),
    soundStop = document.querySelector('.sound-stop'),
    w = document.body.clientWidth,
    h = document.body.clientHeight;
soundStop.volume = 0.1;
soundMove.volume = 0.1;

window.addEventListener('resize', function(){
    w = document.body.clientWidth,
    h = document.body.clientHeight;
});

document.addEventListener('keydown', move);
document.addEventListener('keyup', stop);

function stop(e) {
 soundMove.pause();
 soundStop.currentTime = 0;
 soundStop.play();
}
function move(e) {
 soundStop.pause();
 soundMove.play();
 let key = e.key;
 let x = tank.offsetLeft;
 let y = tank.offsetTop;
 
 if(key == 'ArrowRight') {
  tank.className = 'tank';
  tank.classList.add('right');
  if(x < w-150) tank.style.left = x+10+'px';
 }
 if(key == 'ArrowLeft') {
  tank.className = 'tank';
  tank.classList.add('left');
  if(x > 0) tank.style.left = x-10+'px';
 }
 if(key == 'ArrowDown') {
  tank.className = 'tank';
  tank.classList.add('down');
  if(y < h-150) tank.style.top = y+10+'px';
 }
 if(key == 'ArrowUp') {
  tank.className = 'tank';
  tank.classList.add('up');
  if(y > 0) tank.style.top = y-10+'px';
 }
}