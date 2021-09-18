//Buat variabel untuk mengambil
//class css yang menjadi komponen untuk membuka dan menutup halaman modal.
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
// Buat fungsi Addeventistener dan method .add
// untuk membuka modal, dimana komponen modal terdapat pada class .open-modal
modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
// Buat juga fungsi penutup modal menggunakan AddEventListiner,
// yang membedakann adalah penggunaan method .remove
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
