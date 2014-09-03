var movePixels = 1;
var delayMs = 5;
var catTimer = null;
var direction = 'left';
var img = document.getElementsByTagName('img')[0];
var stop_image = 'http://i.imgur.com/9PTzo3A.png?1';
var moving_image = 'http://i.imgur.com/5yfmSBS.gif';


function catWalk() {
  var currentLeft = parseInt(img.style.left);

  if (direction === 'left') {
    img.style.left = (currentLeft + movePixels) + 'px';
    if (currentLeft > (window.innerWidth-img.width)) {
      direction = 'right';
      img.className = 'flip';
    };
  } else if (direction === 'right') {
    img.style.left = (currentLeft - movePixels) + 'px';
    if (currentLeft <= 0) {
      direction = 'left';
      img.className = '';
    };
  };

  if (currentLeft === (window.innerWidth-img.width)/2) {
    img.src = stop_image;
    pauseSpeed = movePixels;
    movePixels = 0;
    setTimeout(function() {
      img.src = moving_image;
      movePixels = pauseSpeed;
    }, 2000);
  };

};


function startCatWalk() {
  img.src = moving_image;
  catTimer = window.clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, delayMs);
};

function stopCatWalk() {
  img.src = stop_image;
  movePixels = 1;
  delayMs = 5;
  catTimer = window.clearInterval(catTimer);
};

function speedCatWalk() {
  movePixels = movePixels + 1;
};


var startButton = document.getElementById('start-button');
startButton.addEventListener('click', startCatWalk);

var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', stopCatWalk);

var speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', speedCatWalk);