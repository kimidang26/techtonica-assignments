let open = document.createElement("BUTTON");
open.innerHTML = "CLICK ME";
open.addEventListener("click", function (){
    alert("Button is clicked")
});
document.body.appendChild(open);