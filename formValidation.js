function validateForm(event) {
  let ok = true;
  const date = new Date(document.querySelector("#date").value);
  const now = new Date();
  if (date > now) {
    document.querySelector("#date-warning").innerHTML =
      "Invalid date - not in the future";
    document.querySelector("#date-warning").style.visibility = "visible";
    ok = false;
  } else {
    document.querySelector("#date-warning").style.visibility = "hidden";
  }

  const clubNum = document.querySelector("#club-num").value;
  const clubNumPattern = /^K[A-Z0-9]{3}/;
  if (!clubNumPattern.test(clubNum)) {
    document.querySelector("#club-num-warning").innerHTML = "Invalid club #";
    document.querySelector("#club-num-warning").style.visibility = "visible";
    ok = false;
  } else {
    document.querySelector("#club-num-warning").style.visibility = "hidden";
  }

  const postcode = document.querySelector("#postcode").value;
  const postcodePattern = /[0-9]{4}/;
  if (!postcodePattern.test(postcode)) {
    document.querySelector("#postcode-warning").innerHTML = "Invalid Post Code";
    document.querySelector("#postcode-warning").style.visibility = "visible";
    ok = false;
  } else {
    document.querySelector("#postcode-warning").style.visibility = "hidden";
  }

  const contactName = document.querySelector("#contact-name").value;
  const namePattern = /[A-Za-z- ]+/;
  if (!namePattern.test(contactName)) {
    document.querySelector("#contact-name-warning").innerHTML =
      "Invalid Contact Name";
    document.querySelector("#contact-name-warning").style.visibility =
      "visible";
    ok = false;
  } else {
    document.querySelector("#contact-name-warning").style.visibility = "hidden";
  }

  const phone = document.querySelector("#phone").value;
  const phonePattern = /[0-9]{10}/;
  if (!phonePattern.test(phone)) {
    document.querySelector("#phone-warning").innerHTML = "Invalid Phone Number";
    document.querySelector("#phone-warning").style.visibility = "visible";
    ok = false;
  } else {
    document.querySelector("#phone-warning").style.visibility = "hidden";
  }

  const numChild = document.querySelector(
    "input[name='num-child']:checked"
  ).value;
  for (let childNo = 1; childNo < parseInt(numChild) + 1; childNo++) {
    const fname = document.querySelector("#first-name-child-" + childNo).value;
    if (!namePattern.test(fname)) {
      document.querySelector(`#child-${childNo}-first-name-warning`).innerHTML =
        "Invalid First Name";
      document.querySelector(
        `#child-${childNo}-first-name-warning`
      ).style.visibility = "visible";
      ok = false;
    } else {
      document.querySelector(
        `#child-${childNo}-first-name-warning`
      ).style.visibility = "hidden";
    }

    const lname = document.querySelector("#last-name-child-" + childNo).value;
    if (!namePattern.test(lname)) {
      document.querySelector(`#child-${childNo}-last-name-warning`).innerHTML =
        "Invalid Last Name";
      document.querySelector(
        `#child-${childNo}-last-name-warning`
      ).style.visibility = "visible";
      ok = false;
    } else {
      document.querySelector(
        `#child-${childNo}-last-name-warning`
      ).style.visibility = "hidden";
    }
  }

  if (ok) {
    event.preventDefault();
    let total = 0;
    for (let childNo = 1; childNo < parseInt(numChild) + 1; childNo++) {
      let rego = 0;
      switch (document.querySelector("#membership-child-" + childNo).value) {
        case "3":
          rego = 220;
          break;
        case "6":
          rego = 400;
          break;
        case "12":
          rego = 700;
          break;
      }
      document.querySelector("#rego-child-" + childNo).value = "$" + rego;

      let gi = 0;
      if (document.querySelector(`#gi-purchase-child-${childNo}-yes`).checked) {
        switch (document.querySelector(`#child-${childNo}-gi-size`).value) {
          case "S":
            gi = 110;
            break;
          case "M":
            gi = 120;
            break;
          case "L":
          case "XL":
            gi = 130;
            break;
        }
      }
      document.querySelector("#gi-child-" + childNo).value = "$" + gi;

      const totalChild = rego + gi;
      document.querySelector("total-child-" + childNo).value = "$" + totalChild;
      total += totalChild;
    }

    document.querySelector("#total-total").value = "$" + total;
  } else {
    alert("Invalid input");
  }
}

function submitForm() {
  document.myForm.date.type = "text";
  document.myForm.date.value = date.toLocaleDateString("en-GB");

  for (let childNo = parseInt(numChild) + 1; childNo < 5; childNo++) {
    const element = document.querySelector("#child-details-" + childNo);
    element.parentNode.removeChild(element);
  }

  return true;
}
