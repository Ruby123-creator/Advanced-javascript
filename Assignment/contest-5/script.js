var x = document.getElementById("demo");


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  let obj = {};
  let map_location = document.getElementById("map");

  function showPosition(position) {
    
    obj.long = position.coords.latitude
    obj.lat =  position.coords.longitude;
    localStorage.setItem("location" , JSON.stringify(obj));
    
  }
  let locationBtn = document.getElementById("get-location");
  if(localStorage.getItem("location")!==null){
    locationBtn.disabled = true;
    let data = JSON.parse(localStorage.getItem("location"));
    map_location.innerHTML = `  <iframe src="https://maps.google.com/maps?q=${data.long}, ${data.lat}&z=15&output=embed" width="800" height="400" frameborder="0" style="border:0"></iframe>`

  }
  
let btn = document.querySelector("#remove-btn")
btn.addEventListener("click" ,()=>{
    locationBtn.disabled = false;
     localStorage.removeItem("location");
})