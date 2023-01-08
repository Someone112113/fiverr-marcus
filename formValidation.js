function validateForm() {
  const date = new Date(document.querySelector("#date").value);
  const now = new Date();
  if (date > now) {
    document.querySelector("#date-warning").innerHTML =
      "Invalid date - not in the future";
    document.querySelector("#date-warning").style.visibility = "visible";
    return;
  } else {
    document.querySelector("#date-warning").style.visibility = "hidden";
  }

  const clubNum = document.querySelector("#club-num").value;
  const clubNumPattern = /^K[A-Z0-9]{3}/;
  if (!clubNumPattern.test(clubNum)) {
    document.querySelector("#club-num-warning").innerHTML = "Invalid club #";
    document.querySelector("#club-num-warning").style.visibility = "visible";
    return;
  } else {
    document.querySelector("#club-num-warning").style.visibility = "hidden";
  }

  const postcode = document.querySelector("#postcode").value;
  const postcodePattern = /[0-9]{4}/;
  if (!postcodePattern.test(postcode)) {
    document.querySelector("#postcode-warning").innerHTML = "Invalid Post Code";
    document.querySelector("#postcode-warning").style.visibility = "visible";
    return;
  } else {
    document.querySelector("#postcode-warning").style.visibility = "hidden";
  }

  const phone = document.querySelector("#club-num").value;
  const phonePattern = /[0-9]{10}/;
  if (!phonePattern.test(phone)) {
    document.querySelector("#phone-warning").innerHTML = "Invalid Phone Number";
    document.querySelector("#phone-warning").style.visibility = "visible";
    return;
  } else {
    document.querySelector("#phone-warning").style.visibility = "hidden";
  }

  var body = new URLSearchParams({
    date: date.toLocaleDateString("en-GB"),
    "club-name": document.querySelector("#club-name").value,
    "club-num": clubNum,
    address: document.querySelector("#address").value,
    postcode: document.querySelector("#postcode").value,
    "contact-name": document.querySelector("#contact-name").value,
    phone: phone,
  });
  fetch("https://twasum.cdms.westernsydney.edu.au/twainfo/echo.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  }).then(alert("Submitted!"));
}
