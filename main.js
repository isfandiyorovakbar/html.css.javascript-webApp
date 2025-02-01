
window.addEventListener("DOMContentLoaded", function () {
    const btnX = document.querySelector(".btnX");
    const modal = document.querySelector(".slide");
    const btnclik = document.querySelector(".btnclik");
  
    btnclik.addEventListener("click", function () {
      modal.style.display = "block";
    });
  
    btnX.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });
  