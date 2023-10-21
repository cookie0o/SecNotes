// local-storage elements
var encrypt_notes = localStorage.getItem("encrypt-notes")
const encryption_pass = localStorage.getItem("encryption-password")


function encrypt(str) {
  if (encrypt_notes == "true") {
    return CryptoJS.AES.encrypt(str, encryption_pass.toString()).toString();
  } else {
    return str
  }
}


function decrypt(str) {
  if (encrypt_notes == "true") {
    const bytes = CryptoJS.AES.decrypt(str, encryption_pass.toString());
    return bytes.toString(CryptoJS.enc.Utf8);
  } else {
    return str
  }
}


export {
  encrypt,
  decrypt
}