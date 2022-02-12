function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
// Dark mode
var icon=document.getElementById("moontosun");
icon.onclick=function(){
  console.log("Dark mode on");
  document.body.classList.toggle("dark-mode");
}