function sendMail() {
  var templateParams = {
    from_name: document.getElementById("fullname").value,
    bankname: document.getElementById("bankname").value,
    account_no: document.getElementById("account_no").value,
    amount: document.getElementById("amount").value,
  };

  emailjs.send("service_iv2ixbh", "template_gae9hs9", templateParams).then(
    (response) => {
      alert("WE HAVE RECIEVED YOUR RESPONSE!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
      alert("FAILED...", error);
    }
  );
}
