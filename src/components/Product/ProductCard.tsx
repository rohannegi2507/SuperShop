import React from "react"
import "./Product.style.css"
import {ITransformedDataType} from '../../model'

const ProductCard = ({data}: {data: ITransformedDataType})=>{

    return (
    <div className="card-container">
      <img className="product-img"  src={data.image_list[0]}></img>

      <div>{data.color}</div>

      <div>
        {data.name}
      </div>
     
      <div className="card-subtitle">{data.sale_price}</div>
  
      <div className="color-list">
         {data.color_list.map((color:string)=>{
             return <span className = "color-circle" style={{"backgroundColor":color}}></span>
          })}
      </div>

    </div>
    )

}

export default ProductCard