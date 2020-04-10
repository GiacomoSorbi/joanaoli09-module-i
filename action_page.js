/*const toggleModal = () => {
  document.querySelector(".modal").classList.toggle("modal--hidden");
};

document.querySelector("#show-modal").addEventListener("click", toggleModal);

document.querySelector("#submit").addEventListener("submit", event => {
  event.preventDefault();
  toggleModal();
});

document
  .querySelector(".modal_close-bar span")
  .addEventListener("click", toggleModal);
*/

document.getElementById("show-modal").addEventListener("click", function() {
  document.querySelector(".modal").style.display = "flex";
});
document.querySelector(".fas fa-times").addEventListener("click", function() {
  document.querySelector(".modal").style.dispay = "none";
});
