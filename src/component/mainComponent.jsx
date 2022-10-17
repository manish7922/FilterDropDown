import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";
import { Route,Switch, Redirect } from "react-router-dom";

import Navbar from './navbar';
import Product from './product';
class MainComponent extends Component {
 state={
products:[
    {code:"PEP221",prod:"Pepsi",price:12,instock:"Yes",category:"Beverages"},
    {code:"COK113",prod:"Coca Cola",price:18,instock:"Yes",category:"Beverages"},
    {code:"MIR646",prod:"Mirinda",price:15,instock:"No",category:"Beverages"},
    {code:"SLI874",prod:"Slice",price:22,instock:"Yes",category:"Beverages"},
    {code:"MIN654",prod:"Minute Maid",price:25,instock:"Yes",category:"Beverages"},
    {code:"APP652",prod:"Appy",price:10,instock:"No",category:"Beverages"},
    {code:"FRO085",prod:"Frooti",price:30,instock:"Yes",category:"Beverages"},
    {code:"REA546",prod:"Real",price:24,instock:"No",category:"Beverages"},
    {code:"DM5461",prod:"Dairy Milk",price:40,instock:"Yes",category:"Chocolates"},
    {code:"KK6546",prod:"Kitkat",price:15,instock:"Yes",category:"Chocolates"},
    {code:"PER5436",prod:"Perk",price:8,instock:"No",category:"Chocolates"},
    {code:"FST241",prod:"5 Star",price:25,instock:"Yes",category:"Chocolates"},
    {code:"NUT553",prod:"Nutties",price:18,instock:"Yes",category:"Chocolates"},
    {code:"GEM006",prod:"Gems",price:8,instock:"No",category:"Chocolates"},
    {code:"GD2991",prod:"Good Day",price:25,instock:"Yes",category:"Biscuits"},
    {code:"PAG542",prod:"Parle G",price:5,instock:"Yes",category:"Biscuits"},
    {code:"MON119",prod:"Monaco",price:7,instock:"No",category:"Biscuits"},
    {code:"BOU291",prod:"Bourbon",price:22,instock:"Yes",category:"Biscuits"},
    {code:"MAR951",prod:"MarieGold",price:15,instock:"Yes",category:"Biscuits"},
    {code:"ORE188",prod:"Oreo",price:30,instock:"No",category:"Biscuits"}
    ],

product1:[],
editIndex:-1, 
myProduct:{},
 
 }

 handleAdd=(index)=>{
    let s1={...this.state}
// s1.editIndex=index;

let myProduct=s1.products[index];
console.log("b",myProduct);
let X1=s1.product1.find((n)=>n.code===myProduct.code)

console.log("Product1",X1);


if(X1){
   X1.Quantity=X1.Quantity+1
   X1.Amount=X1.price*X1.Quantity 
   // return  X1
}else{
   let  Quantity=1;
let  Amount=myProduct.price*Quantity;
let json1={code:myProduct.code,prod:myProduct.prod,price:myProduct.price,Quantity:Quantity,Amount:Amount}
   s1.product1.push(json1)
}

    this.setState(s1)
 }
 handleIncre=(index)=>{
    let s1={...this.state}
s1.editIndex=index;
let myProduct1={}
// editIndex=index;
myProduct1=s1.product1[index];
let Quantity=myProduct1.Quantity+1;
let  Amount=myProduct1.price*Quantity;
let  myProduct4={code:myProduct1.code,prod:myProduct1.prod,price:myProduct1.price,Quantity:Quantity,Amount:Amount}
console.log(myProduct4);
if(s1.editIndex>-1){
s1.product1[index]=myProduct4
}
this.setState(s1)
 }
 handleDecre=(index)=>{
    let s1={...this.state}
    s1.editIndex=index;
    let myProduct1={}
    // editIndex=index;
    myProduct1=s1.product1[index];
    let Quantity=myProduct1.Quantity-1;
    let  Amount=myProduct1.price*Quantity;
    let  myProduct4={code:myProduct1.code,prod:myProduct1.prod,price:myProduct1.price,Quantity:Quantity,Amount:Amount}
    console.log(myProduct4);
    if(s1.editIndex>-1){
    s1.product1[index]=myProduct4
    }
    this.setState(s1)
 }

 handleDelete=(index)=>{
    let s1={...this.state}
    s1.product1.splice(index,1);
    this.setState(s1)
 }
 handleClose=()=>{
    let s1={...this.state}
    alert('your sucessfully close bill');
    s1.product1.splice(0);
    this.setState(s1)
 }

handleSort=(colNo)=>{
   let s1={...this.state}
   switch (colNo) {
      case 0:
        s1.products.sort((p1, p2) => p1.code.localeCompare(p2.code));
        break;
      case 1:
        s1.products.sort((p1, p2) =>p1.prod.localeCompare(p2.prod));
        break;
      case 2:
        s1.products.sort((p1, p2) => p1.category.localeCompare(p2.category));
        break;
      case 3:
        s1.products.sort((p1, p2) => p2.price - p1.price);
        break;
      case 4:
        s1.products.sort((p1, p2) => p1.instock.localeCompare(p2.instock));
        break;
 
    
    }
   this.setState(s1)
}

    render(){
 const {products,handleAdd,product1,editIndex,myProduct}=this.state
  
return (
<div className='container'>
<Navbar />
<Switch>
<Route path="/category/:value" render={(props)=><Product {...props} products={products} display="category" />} />
<Route path="/products"render={(props)=><Product {...props} products={products} product1={product1} onAdd={this.handleAdd} onIncrement={this.handleIncre} onDecrement={this.handleDecre} onDelete={this.handleDelete} onsort={this.handleSort} onclose={this.handleClose} />} />


<Redirect form="/" to="/" />
</Switch>
</div>
)
    }
}
export default MainComponent;