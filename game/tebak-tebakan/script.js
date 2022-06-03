// ====================
// ===== SETTINGS =====
// ====================

function pause() {
  document.getElementById("pause").style.display = "block";
}

function x() {
  document.getElementById("Setting").style.display = "none";
  document.getElementById("pause").style.display = "block";
}

// pause menu

function resume() {
  document.getElementById("pause").style.display = "none";
}

function setting() {
  document.getElementById("Setting").style.display = "block";
  document.getElementById("pause").style.display = "none";
}

function quit() {
  const yakin = confirm("Yakin ingin meninggalkan permainan?");
  if (yakin) {
    document.location.href = "../../menu/index.html";
  }
}

// Setting Dark Mode & Light Mode

if (localStorage.getItem("theme") == "light") setLightMode(true);

function setLightMode(isLight) {
  if (isLight) {
    document.body.setAttribute("id", "lightmode");
    localStorage.setItem("theme", "light");
  } else {
    document.body.setAttribute("id", "");
    localStorage.removeItem("theme");
  }
}

// music

var audioPlaying = false;
function music() {
  var audio = document.getElementById("bgMusic");
  if (!audioPlaying) audio.play();
  else audio.pause();
  audioPlaying = !audioPlaying;
}

// ===================
// === GAMES LOGIC ===
// ===================

// db_quiz

const quest = [
  {
    question: "Kasur, kasur apa yang menyeramkan?",
    answer: ["Kasur Mantan", "Kasurupan", "Kasur Bau Ketek Gorila", "Kasur Dukun Santet"],
  },
  {
    question: "Jika kamu kalah argumen, jawab apa?",
    answer: ["Au Ah Gelap", "Ah, Shit! Here we go again", "Iri Bilang Bos!", "Yahaha Hayyuk Bapak kau Salto"],
  },
  {
    question: "Jika kamu mengendarai motor, helmnya dipakai di?",
    answer: ["Siku", "Kepala", "Lutut", "Paru-paru"],
  },
  {
    question: "0 + 1 x 0 = ?",
    answer: ["2", "i", "1", "0"],
  },
  {
    question: "Bebek apa yang kakinya dua?",
    answer: ["Bebek peliharaanku", "Bebek dia", "Bebeknya pak Asep", "Memang takdirnya berkaki dua"],
  },
  {
    question: "Berapa jumlah tangan ayam?",
    answer: ["20cm", "2", "Tidak memiliki tangan", "40, kata mama"],
  },
  {
    question: "Orang yang tinggal di sebelah rumah, disebut?",
    answer: ["Pak Rahmat", "Ronaldo Setiawan", "超级偶像", "Pak RT"],
  },
  {
    question: "Eminem kalau haus, jadi apa?",
    answer: ["Pilot", "Eminum", "Eminta airnya dong", "Iron Man"],
  },
  {
    question: "Mengapa pemanasan global dapat menyebabkan kepunahan spesies?",
    answer: ["Peningkatan suhu menyebabkan kepunahan spesies", "Sama", "Tidak tahu", "Karena adanya efek  rumah kaca"],
  },
  {
    question: "Minuman yang disukai orang-orang di seluruh dunia?",
    answer: ["Teh", "Pop Es", "Belgium chocolate flavored lemon tea", "Kuah mie"],
  },
  {
    question: "Ikan, ikan apa yang suka berhenti?",
    answer: ["Ikan Paus", "Ikan Lele", "Ikan Cupang", "Ikan Kon(Tongkol)"],
  },
  {
    question: "Lama pertandingan bola tenis?",
    answer: ["Ditentukan oleh poin", "2 x 45 menit", "20 menit", "Semua jawaban salah"],
  },
  {
    question: "Lama pertandingan sepak bola?",
    answer: ["2 x 25 menit", "2 x 20 menit", "Sampai Maghrib", "24 jam 24 menit 24 detik"],
  },
  {
    question: "∿♪ naik delman istimewa ku duduk di muka, ku duduk samping..?",
    answer: ["Pak ustad yang pindah agama", "Pak Kusir yang sedang bekerja", "Bocil epep freestyle", "Pak kusir yang tidak menyetir"],
  },
  {
    question: "Monyet termasuk jenis hewan?",
    answer: ["Suka makan pisang", "Hewan Vivipar", "Bisa jadi tujuh", "Hidup di pohon"],
  },
  {
    question: "Jika semangka dipotong 10 potongan maksimal akan dapat berapa potong?",
    answer: ["1024", "23", "10", "1945"],
  },
  {
    question: "Celana, celana apa yang celana?",
    answer: ["celana", "Celana", "celanA", "CELANA"],
  },
  {
    question: "Jika ꧁𒋨𒈞𒍦🕷𒍧𒈞𒋨꧂, kenapa Spider-Man makan rambutan? ",
    answer: ["Karena 🌇🌉🌌👍", "Karena Spider-Man adalah ꧁ҜβŞ༆Ꮪ Ꭺ ᴎ Ꭲ υ Ꮍ࿐꧂", "Mau makan pisang", "Mau makan Nasi Padang"],
  },
  {
    question: "Aku punya kucing kecil, ku beri nama?",
    answer: ["Anjing", "Anjing", "Anak Anjing", "Lupin"],
  },
  {
    question: "🗺 ada berapa benua di dunia ini?",
    answer: ["3", "2", "4", "1"],
  },
  {
    question: "🗾 ini negara?",
    answer: ["Amerika", "Afrika", "Korea", "Jepang"],
  },
  {
    question: "Aku berada di ujung api, dan di tengah-tengah air. Apakah aku?",
    answer: ["i", "r", "a", "Api dan Air"],
  },
  {
    question: "Ibu ingin membuat kue, tapi tidak ingin telurnya habis. Bagaimana caranya supaya telurnya tidak habis?",
    answer: ["Tidak usah membikin kue", "Membeli telur lagi", "Membuat telur sendiri", "Membeli kue di toko terdekat"],
  },
  {
    question: "Tata cara memasak mie rasa mie!",
    answer: ["1. Masukkan mie, 2. Aduk, 3. Tiriskan", "1. Buang airnya, 2. Masukkan mie, 3. Tiriskan", "1. Tuang air susu, 2. Masukkan mie, 3. Tiriskan", "1. Masukkan mie, 2. Tiriskan, 3. Anjir laper.."],
  },
];

const CORRECT_ANSWER = [1, 2, 0, 3, 3, 2, 0, 1, 1, 0, 0, 0, 2, 0, 2, 0, 0, 1, 3, 2, 3, 0, 0, 3];

// =======================
// === SETUP QUESTIONS ===
// =======================

let current_q = 0;
let total_score = 0;
let saved_answer = [];

document.addEventListener("DOMContentLoaded", function (event) {
  setupQuestion();
});

function setupQuestion() {
  document.getElementById("question").innerText = quest[current_q]["question"];
  document.getElementById("choiceText0").innerText = quest[current_q]["answer"][0];
  document.getElementById("choiceText1").innerText = quest[current_q]["answer"][1];
  document.getElementById("choiceText2").innerText = quest[current_q]["answer"][2];
  document.getElementById("choiceText3").innerText = quest[current_q]["answer"][3];
}

function nextQuestions() {
  current_q++;

  saveAnswer();

  if (current_q > quest.length - 1) stopQuiz();

  resetState();
  setupQuestion();
}

function resetState() {
  const choosedAnswer = document.querySelector('input[name="choices"]:checked');
  if (choosedAnswer != null) {
    choosedAnswer.checked = false;
  }
}

function stopQuiz() {
  startConfetti();
  checkScore();

  document.getElementById("questions-play").style.display = "none";
  document.getElementById("end-game").style.display = "block";

  document.getElementById("scoreText").innerHTML = "Score kamu " + total_score + ". Selamat!";

  return;
}

function saveAnswer() {
  const answer = document.querySelector('input[name="choices"]:checked');
  if (answer != null) {
    saved_answer.push(parseInt(answer.getAttribute("data-id")));
    console.log(saved_answer);
  } else {
    // // // // // // // // //
    saved_answer.push(0);
  }
}

function checkScore() {
  for (i = 0; i < saved_answer.length; i++) {
    if (saved_answer[i] === CORRECT_ANSWER[i]) total_score += 100;
  }
}

// penutup
function thanks() {
  alert("Selamat Kamu telah memenangkan permainan ini!");
  alert("Mainkan game lainnya di KNTL - The Game, dan akan ada game baru lagi selanjutnya.");
  alert("Terima Kasih");
  document.location.href = "../../menu/index.html";
}
