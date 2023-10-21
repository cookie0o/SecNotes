// input elements
const password_input = document.getElementById("login-password");

// text element
const wrong_pass = document.getElementById("wrong-pass")

// login btn
const login_btn = document.getElementById("login-btn");


// save everything
function save() {
  // compare login password and saved password
  if (localStorage.getItem("encryption-password") == password_input.value) {
    window.open("./homePage/homePage.html", "_self");
  } else {
    wrong_pass.style.color = "red"
    password_input.value = ""
  }
}
// listen for a save btn click and save
login_btn.addEventListener("click", save);


// check if the user is new if yes redirect to the welcome page
if (localStorage.getItem("new") == null) {
  window.open("../../welcomePage/welcomePage.html", "_self");
}