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

function closeMe() {
  document.querySelector(".modal").style.display = "none";
}

document.querySelector("#show-modal").addEventListener("submit", event => {
  event.preventDefault();
  toggleModal();
  var formData = new FormData(document.querySelector("#show-modal"));
  console.log(
    "Name:" + formData.get("name"),
    "Email:" + formData.get("email"),
    "Subject:" + formData.get("subject"),
    "Message:" + formData.get("message")
  );
});
