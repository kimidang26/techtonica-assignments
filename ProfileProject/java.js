// const button = document.getElementById("button");
// function message() {
//     alert("Event Fired");
//   }
// button.onclick = message;

let btn = document.getElementById('button');
  btn.textContent = 'Video: Day in the Life';
  
  // Buttons don't have an href. You need to set up a click event handler
  btn.addEventListener("click", function(){
    location = "https://www.tiktok.com/t/ZTRyY1Tym/?k=1"; // Navigate to new page
  });
  
  // Add button to page
//   container.appendChild(btn);

// let userName = document.getElementById("name").value;
// let page = document.getElementById("contactType").value;

let forms = document.getElementById("user_form");
  forms.addEventListener("submit", (e) => {
    e.preventDefault();
    let userName = document.getElementById("name").value;
    let page = document.getElementById("contactType").value;
    let other = document.getElementById("other").value;
    let subscribe = document.getElementById("yessubscribe").value
    let nosubscribe = document.getElementById("nosubscribe").value
    let email = document.getElementById("email").value
    let comments = document.getElementById("comments").value
    console.log(userName)
    console.log(page)
    console.log(other)
    console.log(subscribe)
    console.log(nosubscribe)
    console.log(comments)
  })
