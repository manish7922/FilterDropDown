import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";

class ShowOptions extends Component {

 handleChange=(e)=>{
    // console.log(e.currentTarget);
    const {currentTarget:input}=e

let options={...this.props.opions};
options[input.name]=input.value;
this.props.onOptionChange(options)

// this.setState(s1)
 }


    render(){
let {category="",minprice="",inStock=""}=this.props.options
let prices=[
    {display:"<10",value:10},
    {display:"10-20",value:10},
    {display:">20",value:20}
    
]
let category1=["Beverages","Chocolates","Biscuits"]
let stocks=[
    {display:"Yes",value:"Yes"},
    {display:"No",value:"No"},
]

return (
<div className='row'>
    <div className='col-4'>
        <div className='from-group'>
        <select className='form-control' name="category" value={category} onChange={this.handleChange}>
            <option  value="">Select your category</option>
            {category1.map((c1)=>(
                <option>{c1}</option>
            ))}
        </select>
        </div>
    </div>
    <div className='col-4'>
        <div className='from-group'>
        <select className='form-control' name="inStock" value={inStock} onChange={this.handleChange}>
            <option  value="">Select your inStock</option>
            {stocks.map((c1)=>(
                <option value={c1.value}>{c1.display}</option>
          
            ))}
        </select>
        </div>
    </div>
    <div className='col-4'>
        <div className='from-group'>
        <select className='form-control' name="minprice" value={minprice} onChange={this.handleChange}>
            <option  value="">Select your price</option>
            {prices.map((c1)=>(
                <option value={c1.value}>{c1.display}</option>
            ))}
        </select>
        </div>
    </div>
</div>
)



    }
}
export default ShowOptions