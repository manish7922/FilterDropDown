import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";
import {Link} from "react-router-dom"
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import queryString from "query-string"
import ShowOptions from './productForm';
import ProductForm2 from './productForm2'

class Product extends Component {

    state={
        optionsArray: {
            price:[
                {display:"<10",value:10},
                {display:"10-20",value:10},
                {display:">20",value:20}
                
            ],
         category:["Beverages","Chocolates","Biscuits"],
         instock:[
            {display:"Yes",value:"Yes"},
            {display:"No",value:"No"},

         ],
         
    
          },
          optionsSel: {
            price:"",
            category:"",
            instock:"",
          },

    }
    handleChangeOption=(optionsSel)=>{
        let s1={...this.state}
      s1.optionsSel=optionsSel;
      console.log(s1.optionSel);
      this.setState(s1)
      }


    
 
    render(){
 const {products,onAdd,product1,onIncrement,onDecrement,onDelete,onclose ,display,onsort}=this.props
 const {value}=this.props.match.params;
 const {optionsArray,optionsSel}=this.state
//  const queryParams=queryString.parse(this.props.location.search)
//  console.log("queryParameter",queryParams);
// // console.log(products);
// let products1= products
let account=product1.reduce(function(a,c){
    return c.Amount+a;
},0)
let quantity=product1.reduce(function(a,c){
    return c.Quantity+a;
},0)
let item=product1.reduce(function(a,c){
    return a+c.code ? ++a:a;
},0)

const {category,instock,price}=optionsSel


const products1=category? products.filter((lt) =>lt.category===category) :products
const products2=instock? products1.filter((lt) =>lt.instock===instock) :products1
const products3=price==10  ? price==20  ? products2.filter((lt) =>lt.price<=price) :products2.filter((lt) =>lt.price>=price) :products2

return (
    <div className='container'>
    <h3 className="text-left">Details of current Bill</h3>
    <h6>items{item}Quantity{quantity} Amount{account}</h6>
  
{product1.map((n,index)=>(
    <div className='row border' key={n.code}>
    <div className='col-1 ml-40'>{n.code}</div>
    <div className='col-2'>{n.prod}</div>
    <div className='col-1'>Price:{n.price}</div>
    <div className='col-1'>Quantity:{n.Quantity}</div>
    <div className='col-1'>Value:{n.Amount}</div>
    <div className='col-6 text-center'>
    <button className="btn btn-success btn-sm" onClick={()=>onIncrement(index)}><FaPlus /></button> <button className="btn btn-warning btn-sm" onClick={()=>onDecrement(index)}><FaMinus /></button>        <button className="btn btn-danger btn-sm" onClick={()=>onDelete(index)}><FaTimes /></button>
    </div>
</div>
))}
{product1>-1 ? "" :(<button className="btn btn-secondary btn-sm" onClick={()=>onclose()}>close Bill</button>)}
<h3 className='text-center'>Product List</h3>
<h6>
{/* <ShowOptions options={queryParams} onOptionChange={this.handleOption} /> */}
<ProductForm2  optionsSel={optionsSel} optionsArray={optionsArray} onchangeOption={this.handleChangeOption}  />
</h6>
       <div className='row bg-dark border text-white'>
        <div className='col-2 border'  onClick={() => onsort(0)}>Code</div>
        <div className='col-2 border' onClick={() => onsort(1)}>Product</div>
        <div className='col-2 border' onClick={() => onsort(2)}>Category</div>
        <div className='col-2 border' onClick={() => onsort(3)}>Price</div>
        <div className='col-2 border' onClick={() => onsort(4)}>InStock</div>
        <div className='col-2 border'></div>
    </div>
 {products3.map((n,index)=>(
    <div className='row border' key={n.code}>
        <div className='col-2 border'>{n.code}</div>
        <div className='col-2 border' >{n.prod}</div>
        <div className='col-2 border' >{n.category}</div>
        <div className='col-2 border' >{n.price}</div>
        <div className='col-2 border' >{n.instock}</div>
        <div className='col-2 border' ><button className="btn btn-secondary btn-sm" onClick={()=>onAdd(index)}>Add To Bill</button></div>
    </div>
 ))}
</div>
)
    }
}
export default Product;