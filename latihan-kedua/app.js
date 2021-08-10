// Set nilai menjadi 0 terlebih dahulu
let count = 0;
// Ambil DOM untuk tombol dan hasil
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// Cara tombol bekerja
// Gunakan metode forEach untuk memecah nilai
btns.forEach(function (btn) {
  // Tambahkan event addEventListener untuk membuat click
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // Rumus if + operator "++" dan "--" untuk menentukan nilai yang di klik pada sasaran span
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // Rumus if dengan memanfaatkan DOM untuk memanipulasi warna tombol
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }

    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
