// input element
const password_input = document.getElementById("encryption-password");

// text element
const wrong_pass = document.getElementById("wrong-pass")

// save btn
const save_settings_btn = document.getElementById("save-btn");


// save everything and href to main page
function save() {
  var password = password_input.value
  if (password == "" || password == null) {
    wrong_pass.style.color = "red"
    password_input.value = ""
    return
  }

  localStorage.setItem("encryption-password", password);

  localStorage.setItem("new", false);

  window.open("../../index.html", "_self");
}
// listen for a save btn click and save
save_settings_btn.addEventListener("click", save);