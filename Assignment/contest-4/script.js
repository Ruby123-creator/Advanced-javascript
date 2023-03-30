
let Data = document.getElementById("data")
Data.addEventListener("click" ,Get_values)
let ui = document.getElementById("container")
function promise1(){
        return new Promise((resolve ,reject)=>{
         setTimeout(()=>{
            resolve(fetch("https://dummyjson.com/posts").then((res)=>res.json()).then((data)=>{
               console.log(data)
               let post = data.posts;
               post.map(item => {
                  ui.innerHTML += `<div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-body"> ${item.body}</p>
                      
                  <div>
              </div>`
               });
            })
            )
         } ,1000)
        })
        
      }
      function promise2(){
        return new Promise((resolve ,reject)=>{
         setTimeout(()=>{
            resolve(fetch("https://dummyjson.com/products").then((res)=>res.json()).then((data)=>{
               console.log(data)
               let post = data.products;
               let div = document.getElementById("product-list")
               post.map(item => {
                  div.innerHTML += `<div class="product-card">
                  <img width=200 src="${item.images[0]}" alt="">
                  <div class="product-desc">
                      <h4 class="product-title">${item.title}</h4>
                      <p class="product-description">${item.description}</p>
                       <div class="info">
                          <h5 class="rating">${item.rating}</h5>
                          <h5 class="price">${item.price}</h5>
                      </div>
                  </div>
              </div>`
               });
            }))
         } ,2000)
        })
        
      }
      function promise3(){
        return new Promise((resolve ,reject)=>{
         setTimeout(()=>{
            resolve(fetch("https://dummyjson.com/todos").then((res)=>res.json()).then((data)=>{
               console.log(data)
               let post = data.todos;
               let container = document.querySelector("tbody")
               post.map(item => {
                  container.innerHTML += `
                  <tr>
                        <td>${item.todo}</td>
                        <td>${item.completed}</td>
                    </tr>
              `
               });
            }))
         } ,3000)
        })
        
      }
function Get_values(){
     promise1().then((data1)=>promise2(data1))
     .then((data2)=>promise3(data2)) 
     .catch((e) => {
      console.log("ERROR>>>", e);
    }); 
}


