// input elements
const encrypt_messages_checkBox = document.getElementById("encrypt-checkbox");
const password_input = document.getElementById("encryption-password");

// save btn
const save_settings_btn = document.getElementById("save-btn");


// save everything
function save() {
  var encrypt_messages = encrypt_messages_checkBox.checked
  var password = password_input.value

  localStorage.setItem("encrypt-notes", encrypt_messages);
  localStorage.setItem("encryption-password", password);
}
// listen for a save btn click and save
save_settings_btn.addEventListener("click", save);


// check if values are set if yes apply them
if (localStorage.getItem("encrypt-notes") != null) {
  if (localStorage.getItem("encrypt-notes") == "true") {
    encrypt_messages_checkBox.checked = true
  }
}
if (localStorage.getItem("encryption-password") != null) {
  password_input.value = localStorage.getItem("encryption-password")
}