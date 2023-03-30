// Array of API URLs to fetch data from
const apiUrls = [
	"https://jsonplaceholder.typicode.com/todos/1",
	"https://jsonplaceholder.typicode.com/todos/2",
	"https://jsonplaceholder.typicode.com/todos/3",
	"https://jsonplaceholder.typicode.com/todos/4",
	"https://jsonplaceholder.typicode.com/todos/5",
	"https://jsonplaceholder.typicode.com/todos/6",
	"https://jsonplaceholder.typicode.com/todos/7",
	"https://jsonplaceholder.typicode.com/todos/8",
	"https://jsonplaceholder.typicode.com/todos/9",
	"https://jsonplaceholder.typicode.com/todos/10",
  ];
  
  // You can write your code here
  let time1 = document.getElementById("output-all")
  let time2 = document.getElementById("output-any")
 
		let st = new Date();
	Promise.any(apiUrls).then((data)=>{
		console.log(data)
		
			fetch(data).then((response)=>response.json())
                
        let ft = new Date();
		time2.innerText = ft-st;
		console.log(ft-st);
			
		
	})

	Promise.all(apiUrls).then((data)=>{
		console.log(data)
		
		data.forEach((element)=>{
			fetch(element).then((response)=>response.json())

		})
                
        let ft = new Date();
		time1.innerText = ft-st;
		console.log(ft-st);
			
		
	})