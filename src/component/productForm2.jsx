

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";

class ProductForm2 extends Component {
 state={
 
 }
handleChange=(e)=>{
let s1 ={...this.props.optionsSel}
let {currentTarget:input}=e
// input.name==="brand" ? s1.brand=this.updateCBs(input.checked,input.value,s1.brand):input.name==="ram" ? s1.ram=this.updateCBs(input.checked,input.value,s1.ram):
// input.name==="hardDisk" ? s1.hardDisk=this.updateCBs(input.checked,input.value,s1.hardDisk):(s1[input.name]=input.value)
s1[input.name]=input.value;
this.props.onchangeOption(s1)
}




    render(){
const{optionsSel,optionsArray}=this.props

return (
 <div className='container'>

<div className="row">

<div className='col-4'>
        <div className='from-group'>
        <select className='form-control' name="category" value={optionsSel.category} onChange={this.handleChange}>
            <option  value="">Select your category</option>
            {optionsArray.category.map((c1)=>(
                <option>{c1}</option>
            ))}
        </select>
        </div>
    </div>
    <div className='col-4'>
        <div className='from-group'>
        <select className='form-control' name="instock" value={optionsSel.instock} onChange={this.handleChange}>
            <option  value="">Select your inStock</option>
            {optionsArray.instock.map((c1)=>(
                <option value={c1.value}>{c1.display}</option>
          
            ))}
        </select>
        </div>
    </div>
    <div className='col-4'>
        <div className='from-group'>
        <select className='form-control' name="price" value={optionsSel.price} onChange={this.handleChange}>
            <option  value="">Select your price</option>
            {optionsArray.price.map((c1)=>(
                <option value={c1.value}>{c1.display}</option>
            ))}
        </select>
        </div>
    </div>
</div>


 </div>
)
    }

}
export default ProductForm2;