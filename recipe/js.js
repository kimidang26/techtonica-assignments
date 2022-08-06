let open = document.createElement("BUTTON");
open.innerHTML = "CLICK ME";
open.addEventListener("click", function (){
    alert("Button is clicked")
});
document.body.appendChild(open);

document.getElementById("headertag").innerHTML = "Make Sushi Bake with Me";
document.getElementByTagName("p").style.fontFamily = "Arial";


let accordionMagic = document.getElementsByClassName("accordion");


for (i=0; i<accordionMagic.length; i++){
    accordionMagic[i].addEventListener("click", function(){
        //highlight the button
        this.classList.toggle("active");

        // show the hidden and active panel
        let panel = this.nextElementSibling;
        if (panel.style.display === "block"){
            panel.style.display = "none";
        } else {
            panel.style.display = "block"
        }
    });
}


let btn2 = document.createElement("BUTTON");
btn2.innerHTML = "Like";
document.body.appendChild(btn2);

let button = document.createElement('button');
button.innerText= "Like to Subscribe";
button.addEventListener('click', () => {
  console.log('Thanks!')
});
document.body.appendChild(button);