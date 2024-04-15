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

function sendMail() {
  var templateParams = {
    to_name: document.getElementById("full_name").value,
    bankname: document.getElementById("bankname").value,
    account_no: document.getElementById("account_no").value,
    amount: document.getElementById("amount").value,
  };
  hideZoom();
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

// Function to show the loading indicator
function showLoading() {
  const loaderContainer = document.querySelector(".loader-container");
  loaderContainer.style.display = "block";
}

// Function to hide the loading indicator
function hideLoading() {
  const loaderContainer = document.querySelector(".loader-container");
  loaderContainer.style.display = "none";
}

// Example usage: Show the loader before an AJAX request
const xhr = new XMLHttpRequest();
xhr.open("GET", "your/api/endpoint"); // Replace with your actual endpoint
xhr.onload = function () {
  hideLoading(); // Hide the loader after the request finishes
  // Process the response from the server (if applicable)
};
xhr.onerror = function () {
  hideLoading(); // Hide the loader even on error
  console.error("Error fetching data");
};
xhr.send();
showLoading(); // Show the loader before sending the request
