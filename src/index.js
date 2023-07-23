alert("Welcome to Prestige Guest Lodge and Restaurant Website");

function contactUs() {
  let name = prompt("What is your first name?");
  let email = prompt("What is your email address?");
  let h1 = document.querySelector("h1");
  if (name !== null) {
    h1.innerHTML =
      "Thank you " +
      name +
      ", we'll be in touch via email and again, welcome to Prestige Guest lodge and Restuarant";
  } else {
    h1.innerHTML =
      "Thank you our esteemed customer" +
      " and again, welcome to Prestige Guest lodge and Restaurant Embu";
  }
}
let contactUsButton = document.querySelector("button");
contactUsButton.addEventListener("click", contactUs);
