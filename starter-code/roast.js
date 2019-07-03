window.onload = function(){ 


  let deleteItem = document.querySelector(".move");
  
  deleteItem.addEventListener("click",function(e){
  
    if(e.target.classList.contains('btn-delete')){
        
   e.target.parentElement.parentElement.remove();
  
  }
  });
  
  function getPriceByProduct(itemNode){
    return Number(itemNode.children[1].children[0].innerHTML.split('$')[1]);
  }
  
  function updatePriceByProduct(productPrice, index){
    let quantity =  document.getElementsByClassName("whole-product")[index].children[2].children[1].value;
    // console.log(quantity);
    let priceProduct = quantity * productPrice;
    document.getElementsByClassName("whole-product")[index].children[3].children[0].innerHTML  = "$" + parseFloat(Math.round(priceProduct * 100)/100).toFixed(2);
    return priceProduct;
  }
  
  function getTotalPrice() {
    let totalCartValue = 0;
    let currProductsInCart = document.getElementsByClassName("whole-product");
  
    for(index = 0 ; index < currProductsInCart.length; index++){
     let sum = updatePriceByProduct(getPriceByProduct(currProductsInCart[index]), index);
      totalCartValue += sum;
    }
    console.log(totalCartValue);
    document.getElementById("totalDiv").innerHTML = parseFloat(Math.round(totalCartValue * 100)/100).toFixed(2);
  }
  
 
  
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');
   

     calculatePriceButton.onclick = getTotalPrice;
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
  }
