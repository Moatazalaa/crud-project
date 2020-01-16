var productsContainer =[];
var inputs = document.getElementsByClassName("form-control");
if (localStorage.getItem("productsData") == null){
    productsContainer =[];
}
else{
    productsContainer =JSON.parse( localStorage.getItem("productsData"));
    displayProducts();
}
function addProduct(){
    var productName =document.getElementById("productNameInp").value;
    var productPrice =document.getElementById("productPriceInp").value;
    var productCategory =document.getElementById("productsCategory").value;
    var productDesc =document.getElementById("ProductDescInp").value;
    var productType =document.getElementsByName("sale")
    var onSale;
    if(productType[0].checked == true)
    {
        onSale = true;
    }
    else {
        onSale =false;
    }

    var product ={
        name:productName,
        price:productPrice,
        category:productCategory,
        description:productDesc,
        sale:onSale
        
    };
    productsContainer.push(product);
    localStorage.setItem("productsData",JSON.stringify(productsContainer));
    
    clearForm();
    displayProducts();
    
    
    
}
function clearForm(){
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value ="";
        
    }
}
function displayProducts(){
    var temp ="";


 for (let i = 0; i < productsContainer.length; i++) {
    temp +=`<div class="col-sm-3">
    <div class="product">
      <img src="images/asset 47.jpeg" alt="" class="img-fluid">
      <h4>`+productsContainer[i].name+`<span class="badge badge-info ml-3 ml-auto">`+productsContainer[i].category+`</span> </h4>
      <div class="price">`+productsContainer[i].price+`</div>
      <p>`+productsContainer[i].description+`</p>
      <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(`+i+`)">delete</button>    
      <button class="btn btn-outline-warning btn-sm" onclick="updateProduct(`+i+`)">update</button>`
      if(productsContainer[i].sale == true)
      {
          temp +=`<div class="sale">sale</div>`
      }
       
      
      temp+=`   
    </div>
    
  </div>`;
    
}
document.getElementById("productsRow").innerHTML=temp;
}
function searchProduct(term){
   var temp ="";
   for (let i = 0; i < productsContainer.length; i++) {
    if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase())){
        temp +=`<div class="col-sm-3">
        <div class="product">
          <img src="images/asset 47.jpeg" alt="" class="img-fluid">
          <h4>`+productsContainer[i].name+`<span class="badge badge-info ml-3 ml-auto">`+productsContainer[i].category+`</span> </h4>
          <div class="price">`+productsContainer[i].price+`</div>
          <p>`+productsContainer[i].description+`</p>
          <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(`+i+`)">delete</button>    
          <button class="btn btn-outline-warning btn-sm" onclick="updateProduct(`+i+`)">update</button>`
          if(productsContainer[i].sale == true)
          {
              temp +=`<div class="sale">sale</div>`
          }
           
          
          temp+=`   
        </div>
        
      </div>`;
    
       }
       document.getElementById("productsRow").innerHTML=temp;
       
   }
}

function displayCategory(){
   var categoryContainer =["mobile","tv","laptop"];
   
   var temp ="";
   
   for(var i=0 ; i<categoryContainer.length;i++)
   {
       temp+=`<option value="`+categoryContainer[i]+`">`+categoryContainer[i]+`</option>`
   }
   document.getElementById("productsCategory").innerHTML=temp;
}
displayCategory();

function deleteProduct(indx){
  var deleted= productsContainer.splice(indx,1);
  localStorage.setItem("productsData",JSON.stringify(productsContainer));
  displayProducts();
}

function updateProduct(indx){
    var productName =document.getElementById("productNameInp").value;
    var productPrice =document.getElementById("productPriceInp").value;
    var productCategory =document.getElementById("productsCategory").value;
    var productDesc =document.getElementById("ProductDescInp").value;
    var productType =document.getElementsByName("sale")
    var onSale;
    if(productType[0].checked == true)
    {
        onSale = true;
    }
    else {
        onSale =false;
    }

    var product ={
        name:productName,
        price:productPrice,
        category:productCategory,
        description:productDesc,
        sale:onSale
        
    };
    
        productsContainer[indx].name= product.name;
        productsContainer[indx].price= product.price;
        productsContainer[indx].category= product.category;
        productsContainer[indx].description= product.description;
        productsContainer[indx].sale= product.sale;
        localStorage.setItem("productsData",JSON.stringify(productsContainer));
    
   
   
   displayProducts();
   clearForm();
}