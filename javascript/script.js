var frameNumber = 0,
    playbackConst = 550,   
    vid = document.getElementById('topVideo'),
    frameCount = 40; 
    framerate = 24;

let topVideo = document.getElementById(`topVideo`);
let topVideoContainer = document.getElementById(`mainVideoContainer`);
let topVideoPadding = document.getElementById(`topVideoPadding`)


function scrollPlay(){  
  var frameNumber  = (window.pageYOffset/window.innerHeight) * (frameCount / framerate);
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);

function updatePadding(){
  let height = topVideoContainer.offsetHeight;
  topVideoPadding.style.paddingBottom = `${height}px`;
  console.log(`test ${height}`);
}

window.onresize = updatePadding;

updatePadding();


