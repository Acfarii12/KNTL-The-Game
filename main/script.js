function play_ganda() {
  document.location.href = "tebak.html";
}

function play_tikus() {
  document.location.href = "tikus.html";
}

function play_ular() {
  document.location.href = "ular.html";
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

// ===================
// ====== Games ======
// ===================

// Pause

function pause() {
  document.getElementById("pause-menu").style.display = "block";
  document.getElementById("games-area").style.display = "none";
  document.getElementById("button-open-the-pause-menu").style.display = "none";
}

// Tebak - Tebakan

function resume_tebak() {
  document.getElementById("pause-menu").style.display = "none";
  document.getElementById("games-area").style.display = "block";
  document.getElementById("button-open-the-pause-menu").style.display = "block";
}

function quit() {
  const yakin = confirm("Yakin kamu mau keluar?");
  if (yakin) {
    document.location.href = "lobby.html";
  }
}

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

function back_audi() {
  document.getElementById("setting").style.display = "none";
  document.getElementById("button-open-the-pause-menu").style.display = "block";
  document.getElementById("games-area").style.display = "block";
}

function back_setting() {
  document.getElementById("setting2").style.display = "none";
  document.getElementById("button-open-the-pause-menu").style.display = "none";
  document.getElementById("pause-menu").style.display = "block";
  document.getElementById("games-area").style.display = "none";
}

function open_setting() {
  document.getElementById("setting2").style.display = "block";
  document.getElementById("button-open-the-pause-menu").style.display = "none";
  document.getElementById("pause-menu").style.display = "none";
  document.getElementById("games-area").style.display = "none";
}

// ====================
// ======= DATA =======
// ====================

const QUIZ = [
  {
    question: "Kasur, kasur apa yang mengerikan?",
    answer: ["Kasur Mantan", "Kasurupan", "Kasur Bau Ketek Gorila", "Kasur Ilmu Hitam"],
  },
  {
    question: "Jika kamu kalah argumen jawab apa?",
    answer: ["Au Ah Gelap", "Ah shit, here we go again!", "Iri Bilang Bos!", "Yahaha Hayyuk Bapak kau Salto"],
  },
  {
    question: "Jika kamu mengendarai sepeda motor, helmnya dipakai di?",
    answer: ["Siku", "Kepala", "Lutut", "Paru-paru"],
  },
  {
    question: "0 + 1 x 0 = ?",
    answer: ["2", "i", "1", "0"],
  },
  {
    question: "Bebek apa yang kakinya dua?",
    answer: ["Bebek peliharaanku", "Bebek dia", "Bebeknya Pak Asep", "Memang takdirnya berkaki dua"],
  },
  {
    question: "Jumlah tangan ayam sebanyak?",
    answer: ["20cm", "2", "Tidak memiliki tangan", "40, kata mama"],
  },
  {
    question: "Orang yang tinggal disebelah rumah, disebut?",
    answer: ["Pak Rahmat", "Ronaldo Setiwan", "YouTuber", "Pak RT"],
  },
  {
    question: "Eminem kalau haus jadi apa?",
    answer: ["Eminta uang buat beli minum", "Eminum", "Emikir dulu", "Eminem puasa"],
  },
  {
    question: "Mengapa pemanasan global dapat menyebabkan kepunahan spesies? Jelaskan!",
    answer: ["Peningkatan suhu menyebabkan kepunahan spesies", "Sama", "Tidak tahu", "Karena adanya efek rumah kaca"],
  },
  {
    question: "Minuman paling disukai oleh orang-orang diseluruh dunia?",
    answer: ["Teh", "Pop Es", "Belgium chocolate flavored lemon tea", "Kopi Kapal Api"],
  },
  {
    question: "Ikan, ikan apa yang suka berhenti?",
    answer: ["Ikan Paus", "Ikan Tongkol", "Ikan Teri", "Ikan Pause"],
  },
  {
    question: "Lama permainan bola tenis?",
    answer: ["Ditentukan oleh poin", "2 × 45 menit", "20 menit", " 4 × 10 menit"],
  },
];

const CORRECT_ANSWER = [1, 2, 0, 3, 3, 3, 1, 1, 1, 0, 3, 0];

// =========================
// ==== SETUP QUESTIONS ====
// =========================

let current_q = 0;
let total_score = 0;
let saved_answer = [];

document.addEventListener("DOMContentLoaded", function (event) {
  setupQuestion();
});

function setupQuestion() {
  document.getElementById("question").innerText = QUIZ[current_q]["question"];
  document.getElementById("choiceText0").innerText = QUIZ[current_q]["answer"][0];
  document.getElementById("choiceText1").innerText = QUIZ[current_q]["answer"][1];
  document.getElementById("choiceText2").innerText = QUIZ[current_q]["answer"][2];
  document.getElementById("choiceText3").innerText = QUIZ[current_q]["answer"][3];
}

function nextQuestion() {
  current_q++;

  saveAnswer();

  if (current_q > QUIZ.length - 1) stopQuiz();

  resetState();
  setupQuestion();
}

function resetState() {
  const choosedAnswer = document.querySelector("input[type='radio']:checked");
  if (choosedAnswer != null) choosedAnswer.checked = false;
}

function stopQuiz() {
  checkScore();

  document.getElementById("games-area").style.display = "none";
  document.getElementById("game-end").style.display = "block";

  document.getElementById("scoreText").innerHTML = "Score kamu " + total_score;

  startConfetti();
  return;
}

function saveAnswer() {
  const answer = document.querySelector("input[type='radio']:checked");
  if (answer != null) {
    saved_answer.push(parseInt(answer.getAttribute("data-id")));
  } else {
    saved_answer.push(0);
  }
}

function checkScore() {
  for (i = 0; i < saved_answer.length; i++) {
    if (saved_answer[i] == CORRECT_ANSWER[i]) total_score += 100;
  }
}

function endgame() {
  alert("Terima kasih telah memainkan game Tebak-tebakan!");
  alert("Mainkan game yang lainnya!");
  alert("Dan tunggu game-game baru selanjutnya!");
  document.location.href = "lobby.html";
}
