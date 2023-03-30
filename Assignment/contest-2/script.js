let getmenu = document.querySelector("#menu");
function GetMenu() {
try {
    fetch("https://free-food-menus-api-production.up.railway.app/burgers")
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      data.map((item) => {
        getmenu.innerHTML += `<div class="card">
          <div class="img">
              <img src=${item.img} alt="${item.name}">
          </div>
          <div class="content">
              <h3 class="dishname">${item.name}</h3>
              <h4 class="desc">${item.dsc}</h4>
              <div class="rate-stock">
                <h4> ₹ ${item.price}||${item.rate}</h4>  
              </div>
  
          </div>
      </div>`;
      
      });
    }); 
} catch (error) {
    console.log(e.error);
}

}
let orderedList = document.querySelector("#list")
async function OrderFood(){
    document.querySelector("#menu").style.display = "none";
    const response = await fetch("https://free-food-menus-api-production.up.railway.app/burgers")
    const burgers = await response.json();
    const burgerlist =[];
    for(let i=0;i<3;i++){
        const randomindex = Math.floor(Math.random()*burgers.length)
        burgerlist.push(burgers[randomindex]);
        orderedList.innerHTML +=`<li>${burgers[randomindex].dsc}</li>`
       
    }
    const order = {
        burgers:burgerlist,
    }
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(order);
            orderPrep();
        },2500)
    })
    
}
let orderStatus;
let payment;

async function orderPrep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("order is in procces mode");
            let h = document.createElement("h1");
            h.innerText = "Congratualions your  Order is successfull";
            document.body.append(h);
            orderStatus=true;
            payment = false;
        },2000)
    })
}