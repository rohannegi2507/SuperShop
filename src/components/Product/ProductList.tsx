import { ITransformedDataType } from "../../model"
import { getTransformedProduct } from "../../util"
import ProductCard from "./ProductCard"
import "./Product.style.css"

const ProductList =  ()=>{
    const productList = getTransformedProduct()
    return (
        <div className="product-list">
          {productList && productList.map((product:ITransformedDataType)=>
             (<ProductCard data={product}/>))
          }
        </div>
      )
}

export default ProductList