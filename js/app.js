const container = document.querySelector(".container")

const checkaxios=async ()=>{
  // Send a GET request
  const mydata = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const jsondata=mydata.data;
  return jsondata;
 }
 
const showCoffees = async () => {
  const titles=await checkaxios();
  let output = ""
  titles.forEach(
    ({ id, title }) =>
      (output += `
              <div class="card">
                <h1 class="card--title">${id}</h1>
                <p>${title}</p>
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