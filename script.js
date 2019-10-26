
function generate() {


      var lowercase = "abcdefghijklmnopqrstuvwxyz";
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers= "0123456789";
      var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
      var passlenght =document.getElementById("text").value
      var userpassword = "";
      var passwordCharSet = "";

      if (confirm("Do you want to use Lowercase?") == true) {
        passwordCharSet += lowercase;
      }
      if (confirm("Do you want to use Uppercase?") == true) {
        passwordCharSet += uppercase;
      }
       if (confirm("Do you want to use Special Charector?") == true) {
        passwordCharSet += punctuation;
      }
       if (confirm("Do you want to use Number?") == true) {
        passwordCharSet += numbers;
      }
       for (var i = 0; i < passlenght; i++) {
        userpassword += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));}
      
     document.getElementById("display").value= userpassword;
     document.getElementById("lenght").innerHTML = ("Lenght(8-128): ");
     document.getElementById("text").oninput = function(){
      if (document.getElementById("text").value >7){
     document.getElementById("lenght").innerHTML = "lenght:" +document.getElementById("text").value;}
     else{
     document.getElementById("lenght").innerHTML="Lenght: 8";}}}
     function copyPassword(){
     document.getElementById("display").select();
     document.execCommand("copy");
     alert("Password copied to the Clipboard!");}

