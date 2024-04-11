function sendMail() {
  var params = {
    from_name: document.getElementById("fullname").value,
    bankname: document.getElementById("bankname").value,
    account_no: document.getElementById("account_no").value,
    amount: document.getElementById("amount").value,
  };
  emailjs
    .send("service_tb68ebs", "template_gae9hs9", params)
    .then(function (res) {
      alert("Success!" + res.status);
    });
}

document.write("HHHHEEEEEE");
