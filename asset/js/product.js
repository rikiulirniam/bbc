const altu = document.getElementById("altu");
const alga = document.getElementById("alga");
const buku = document.getElementById("buku");
const kertas = document.getElementById("kertas");
const perle = document.getElementById("perle");
const lainnya = document.getElementById("lainnya");

const tulis = document.getElementById("tulis");
const gambar = document.getElementById("gambar");
const bukuh = document.getElementById("bukuh");
const tass = document.getElementById("tass");
const lengkapan = document.getElementById("lengkapan");
const lain = document.getElementById("lain");

function altul() {
  altu.style.display = "grid";
  alga.style.display = "none";
  buku.style.display = "none";
  kertas.style.display = "none";
  perle.style.display = "none";
  lainnya.style.display = "none";
}

function algam() {
  alga.style.display = "grid";
  altu.style.display = "none";
  buku.style.display = "none";
  kertas.style.display = "none";
  perle.style.display = "none";
  lainnya.style.display = "none";
}

function bukuu() {
  buku.style.display = "grid";
  alga.style.display = "none";
  altu.style.display = "none";
  kertas.style.display = "none";
  perle.style.display = "none";
  lainnya.style.display = "none";
}

function kertass() {
  kertas.style.display = "grid";
  alga.style.display = "none";
  altu.style.display = "none";
  buku.style.display = "none";
  perle.style.display = "none";
  lainnya.style.display = "none";
}

function perlen() {
  perle.style.display = "grid";
  alga.style.display = "none";
  altu.style.display = "none";
  buku.style.display = "none";
  kertas.style.display = "none";
  lainnya.style.display = "none";
}

function lainnyaa() {
  lainnya.style.display = "grid";
  alga.style.display = "none";
  altu.style.display = "none";
  buku.style.display = "none";
  kertas.style.display = "none";
  perle.style.display = "none";
}
