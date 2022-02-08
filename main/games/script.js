// =====================
// ======= Games =======
// =====================

// Audio Setting

var audioPlaying = false;
function music() {
  var audio = document.getElementById("bgMusic");
  if (!audioPlaying) audio.play();
  else audio.pause();
  audioPlaying = !audioPlaying;
}

// Tebak - Tebakan
