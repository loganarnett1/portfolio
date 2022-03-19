var frameNumber = 0,
    playbackConst = 500,   
    vid = document.getElementById('topVideo'),
    frameCount = 40; 

function scrollPlay(){  
  //var frameNumber  = window.pageYOffset/playbackConst;
  var frameNumber  = window.pageYOffset/window.innerHeight;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);

