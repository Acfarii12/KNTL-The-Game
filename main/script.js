function play_ganda() {
  document.location.href = "games/tebak.html";
}

function play_tikus() {
  document.location.href = "games/tikus.html";
}

function play_ular() {
  document.location.href = "games/ular.html";
}

// ==============================
// === DESKTOP VERSION / DP-V ===
// ==============================

// Navbar Script

function main() {
  document.getElementById("back").style.display = "block";
  document.getElementById("play").style.display = "none";
  document.getElementById("games-cate").style.display = "block";
  document.getElementById("title").style.display = "none";
}

function back() {
  document.getElementById("back").style.display = "none";
  document.getElementById("play").style.display = "block";
  document.getElementById("games-cate").style.display = "none";
  document.getElementById("title").style.display = "block";
  document.getElementById("no-game-selected").style.display = "block";
  document.getElementById("main-title-games-cate").style.display = "block";
  document.getElementById("title-game-pukul-tikus-tanah").style.display = "none";
  document.getElementById("title-game-snake-xenzia").style.display = "none";
  document.getElementById("title-game-pilihan-ganda").style.display = "none";
  document.getElementById("pilihan-ganda").style.display = "none";
  document.getElementById("pukul-tikus-tanah").style.display = "none";
  document.getElementById("snake-xenzia").style.display = "none";
}

function info() {
  document.location.href = "info.html";
}

// Pilihan Game

function mge_play() {
  document.getElementById("no-game-selected").style.display = "none";
  document.getElementById("main-title-games-cate").style.display = "none";
  document.getElementById("title-game-pukul-tikus-tanah").style.display = "none";
  document.getElementById("title-game-snake-xenzia").style.display = "none";
  document.getElementById("title-game-pilihan-ganda").style.display = "block";
  document.getElementById("pilihan-ganda").style.display = "block";
  document.getElementById("pukul-tikus-tanah").style.display = "none";
  document.getElementById("snake-xenzia").style.display = "none";
}

function ptt_play() {
  document.getElementById("no-game-selected").style.display = "none";
  document.getElementById("main-title-games-cate").style.display = "none";
  document.getElementById("title-game-snake-xenzia").style.display = "none";
  document.getElementById("title-game-pilihan-ganda").style.display = "none";
  document.getElementById("title-game-pukul-tikus-tanah").style.display = "block";
  document.getElementById("pilihan-ganda").style.display = "none";
  document.getElementById("pukul-tikus-tanah").style.display = "block";
  document.getElementById("snake-xenzia").style.display = "none";
}

function ukk_play() {
  document.getElementById("no-game-selected").style.display = "none";
  document.getElementById("main-title-games-cate").style.display = "none";
  document.getElementById("title-game-pilihan-ganda").style.display = "none";
  document.getElementById("title-game-pukul-tikus-tanah").style.display = "none";
  document.getElementById("title-game-snake-xenzia").style.display = "block";
  document.getElementById("pilihan-ganda").style.display = "none";
  document.getElementById("pukul-tikus-tanah").style.display = "none";
  document.getElementById("snake-xenzia").style.display = "block";
}

// =============================
// === MOBILE VERSION / ML-V ===
// =============================

// Mobile Navbar Script

function main_ml() {
  document.getElementById("back-ml").style.display = "block";
  document.getElementById("play-ml").style.display = "none";
  document.getElementById("games-cate-ml").style.display = "block";
  document.getElementById("title").style.display = "none";
}

function back_ml() {
  document.getElementById("back-ml").style.display = "none";
  document.getElementById("play-ml").style.display = "block";
  document.getElementById("title").style.display = "block";
  document.getElementById("games-cate-ml").style.display = "none";
}

// Next Button

function next_tebak() {
  document.getElementById("tebak-tebakan").style.display = "block";
  document.getElementById("ular-kesepian").style.display = "none";
}

function next_tikus() {
  document.getElementById("tikus-tanah").style.display = "block";
  document.getElementById("tebak-tebakan").style.display = "none";
}

function next_snake() {
  document.getElementById("tikus-tanah").style.display = "none";
  document.getElementById("ular-kesepian").style.display = "block";
}

// Previous Button

function prev_snake() {
  document.getElementById("ular-kesepian").style.display = "block";
  document.getElementById("tebak-tebakan").style.display = "none";
}

function prev_tikus() {
  document.getElementById("tikus-tanah").style.display = "block";
  document.getElementById("ular-kesepian").style.display = "none";
}

function prev_tebak() {
  document.getElementById("tikus-tanah").style.display = "none";
  document.getElementById("tebak-tebakan").style.display = "block";
}

// =====================
// ===== info.html =====
// =====================

function back() {
  document.location.href = "lobby.html";
}
