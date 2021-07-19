const container = document.querySelector(".container")

const checkaxios=async ()=>{
  // Send a GET request
  const mydata = await axios.get("https://milletapi.netlify.app/.netlify/functions/api/products");
  const jsondata=mydata.data;
  return jsondata;
 }

 function hello(title){
   window.location.href="/itemdetails/"+title;
 }
 
const showCoffees = async () => {
  const titles=await checkaxios();
  let output = ""
  titles.forEach(
    ({title,price,imageUrl }) =>
      (output += `
              <div class="card">
              <img src="${imageUrl}" class="card-avatar"/>
                <h1 class="card--title">${title}</h1>
                <p>${price}</p>
                <button class="card-link" onclick="hello('${title}')">Add To Cart</button>
              </div>
              `)
  )
  container.innerHTML = output
}

$(document).ready(function(){
  showCoffees();

$("#myform").submit(function(e){
    e.preventDefault();
    alert();
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}