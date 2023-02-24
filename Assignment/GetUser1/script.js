
let photo = document.getElementById("photo")
let fullname = document.getElementById("name");

let getAnotherUser = document.getElementById("getUser")
let btn1 = document.querySelector('[data-attr="age"]')
let btn2 = document.querySelector('[data-attr="email"]')
let btn3 = document.querySelector('[data-attr="phone"]')

getAnotherUser.addEventListener("click"  ,GetUser);
window.onload = GetUser();

function GetUser(){
    let details = document.getElementById("info")
    details.innerText = " ";

fetch("https://randomuser.me/api/")
.then((response)=>response.json())
.then((data)=>{
    console.log("data" ,data);
    let details = data.results;
    console.log(details);
    details.map((results)=>{
        let pictures = results.picture.large;
        console.log(pictures);
        photo.src = pictures;
        
        
        fullname.innerText= `${results.name.first} ${results.name.last}`;
        
        let details = document.getElementById("info")
        btn1.addEventListener("click" ,()=>{
            
            details.innerText =results.dob.age;
            
            
        })
        btn2.addEventListener("click" ,()=>{
            details.innerHTML = results.email;
            
        })
        btn3.addEventListener("click" ,()=>{
            details.innerHTML = results.phone;
            
        })
        
       

    })
})
}
