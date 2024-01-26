var array=[]
var arr=[]
var res=[]
localStorage.setItem("items",JSON.stringify([]))
// $('.b2').click(function(){
//     alert ('add it to the box ')&& 
// })
function fact(linkphoto,price,buttonId){

 array.push({
    linkphoto:linkphoto,
    price:price,
    buttonId:buttonId
})
}
function factMen(linkphoto,price,buttonId){

   arr.push({
      linkphoto:linkphoto,
      price:price,
      buttonId:buttonId
  })
  }
// fact("capuche.jpg",120,b2)

factMen("../photos/capuche2.jpg",99,1)
factMen("../photos/capuche3.jpg",110,2)
factMen("../photos/capuche5.jpg",150,3)
factMen("../photos/capuche3.jpg",185,4)
factMen("../photos/kabout1.jpg",95,5)
factMen("../photos/kabout2.jpg",88,6)
factMen("../photos/kabout3.jpg",99,7)
fact("../photos/femme5.jpg",295,6)
fact("../photos/femme99.jpg",136,7)
fact("../photos/femme96.jpg",235,8)
fact("../photos/femme3.jpg",110,12)
fact("../photos/femme97.jpg",150,9)
fact("../photos/femme98.jpg",185,10)
fact("../photos/femme95.jpg",285,11)

console.log(array);
function display(){
   for(var i=0;i<array.length;i++){
    $(".women").append(`<div class="product">
    <img class="photo"src=${array[i].linkphoto} alt="serie">
    <p class="para">${array[i].price} 'DT</p>
    <button id=${array[i].buttonId}  onclick="addToCart(${array[i].buttonId})" class="b10">buy</button>
   </div> `)
   }
}
function displayMen(){
   for(var i=0;i<arr.length;i++){
    $(".men").append(`<div class="product">
    <img class="photo"src=${arr[i].linkphoto} alt="serie">
    <p class="para">${arr[i].price} 'DT</p>
    <button onclick="addToCart(${arr[i].buttonId})" id=${arr[i].buttonId} class="b10">buy</button>
   </div> `)
   }
}
display()
displayMen()
function addToCart(id){
   console.log("id",typeof id)
   var newArr=JSON.parse(localStorage.getItem("items"))
 for (let i = 0; i < arr.length; i++) {
   if(id===arr[i].buttonId){
   newArr.push(arr[i])
   }

   
 }
 localStorage.setItem("items",JSON.stringify(newArr))
 console.log("arr",newArr)

}
//  function sum(){
//     var result=0
//     for(vari=0;i<res.length;i++){
//      result=result+res[i].price
//     }
//     return document.getElementById(".cacul").innerHTML=result
//  }
//  console.log('ggggg');



