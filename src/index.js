/* Acá va tu código */

const btn_cipher = document.getElementById ("cipher");
const btn_decipher = document.getElementById ("decipher");
let solution = document.getElementById ("root");
btn_cipher.addEventListener("click", () => {
  let string = document.getElementById ("message").value;
  let offset = document.getElementById ("displace").value;
  let exit = window.cipher.encode(string, offset);
   solution.innerHTML = exit;
})
btn_decipher.addEventListener("click", () => {
  let string = document.getElementById ("message").value;
  let offset = document.getElementById ("displace").value;
  let exit = window.cipher.decode(string, offset);
   solution.innerHTML = exit;
 })