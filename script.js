

var data = JSON.parse(localStorage.getItem("Products")) ||[]; 
  console.log(data);
  
data.map(function(elem,index){
var box =document.createElement("div");

var imageUrl = document.createElement("img");
imageUrl.src = elem.imageUrl;

var name = document.createElement("p");
name.textContent=elem.name;

var category =document.createElement("p");
category.textContent=elem.category;

var price =document.createElement("p")
price.textContent =elem.price;

var gender =document.createElement("p")
gender.textContent =elem.gender;


var btn=document.createElement("button");
    btn.setAttribute="remove_product"
    btn.innerText="remove";
    btn.addEventListener("click",function (){
      removeItems(elem,index);
    });


box.append(imageUrl, name, category, price, gender, btn);

document.querySelector("#allData").append(box);
 });

 function removeItems(elem,index){
    console.log(elem,index);
    data.splice(index,1);
    console.log(data);
    localStorage.setItem("products",JSON.stringify(data));
    
}