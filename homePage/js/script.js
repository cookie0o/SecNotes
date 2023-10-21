// import needed shared functions
import {
  encrypt, // (str)
  decrypt  // (str)
} from "../../shared/js/functions.js";


// input element
const notes_input = document.getElementById("notes-input");

// delete btn
const delete_btn = document.getElementById("delete-btn");

// delete notes
function del() {
  localStorage.setItem("notes", "");
  notes_input.value = "";
}
// listen for a delete btn click and delete
delete_btn.addEventListener("click", del);


// listen for input and save it after encrypting
function notes() {
  // encrypt if checked
  var encrypted_notes = encrypt(notes_input.value);
  // store notes encrypted or plain (settings)
  localStorage.setItem("notes", encrypted_notes);
}
// run function every time notes input is changed
notes_input.addEventListener("input", notes);


// load notes
var enc_notes = localStorage.getItem("notes");
if (enc_notes != null) {
  notes_input.value = decrypt(enc_notes);
}