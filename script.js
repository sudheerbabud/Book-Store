document.getElementById("btnn").addEventListener("click",show);
function show(){
    var name  = document.getElementById("Username").value;
    document.getElementById("paragraph1").innerHTML = name;
    document.getElementById("paragraph1").style.color ="red";
}