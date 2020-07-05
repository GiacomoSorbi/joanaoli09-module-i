document.getElementById("show-modal").addEventListener("click", function() {
  document.querySelector(".modal").style.display = "flex";
});

function closeMe() {
  document.querySelector(".modal").style.display = "none";
}

document.querySelector("#submit").addEventListener("submit", event => {
  event.preventDefault();
  let formData = new FormData(document.querySelector("#submit"));
  console.log(
    "Name:" + formData.get("name"),
    "Email:" + formData.get("email"),
    "Subject:" + formData.get("subject"),
    "Message:" + formData.get("message")
  );
  alert("Thank you for your message!");
  closeMe()
});
