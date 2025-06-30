const quotes = [
  "Hidup adalah anugerah, maka syukurilah.",
  "Kesuksesan adalah hasil dari usaha yang tak pernah menyerah.",
  "Setiap hari adalah kesempatan baru untuk menjadi lebih baik.",
  "Jangan takut gagal, karena gagal adalah bagian dari proses.",
  "Keberanian bukanlah tidak memiliki rasa takut, tetapi mampu mengatasi rasa takut itu."
];

let index = 0;
const quoteElement = document.getElementById('quote');

function showNextQuote() {
  quoteElement.textContent = quotes[index];
  index = (index + 1) % quotes.length;
}

// Tampilkan kutipan pertama
showNextQuote();

// Ganti setiap 5 detik
setInterval(showNextQuote, 5000);
