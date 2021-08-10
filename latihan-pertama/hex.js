// Algoritmanya
// Buat dulu nilai berupa variabel yang mau dirubah
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Buat sebuah metod untuk merubah nilai dan menambahkan fungsi button
btn.addEventListener("click", function () {
  let hexColor = "#";
  // fungsi perulangan untuk mengulangi warna
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// Buat sebuah fungsi acak untuk menampilkan nilai
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
