import ProductImage from './data/product-images.json'
import Products  from './data/products.json'

type ProductImage  = {
  product_id: string,
  color:string,
  image_url:string
}

export interface IProductType {
  product_id: string,
  sku: string,
  color: string,
  size: string|number|null,
  list_price: number,
  discount?: number|null,
  discount_percentage: number|null,
  sale_price: number,
  sold: number,
  stock: number,
}

export interface ITransformedDataType extends IProductType  {
  name:string|undefined,
  color_list: string[],
  size_list:(string | number | null)[],
  image_list: (string | undefined)[]
}

export const streamLineProduct =  (data:IProductType[])=>{
  const refinedData:ITransformedDataType[] = []

    data.forEach(product => {
      const existingProduct: ITransformedDataType| undefined = refinedData.find((productData)=>productData.product_id === product.product_id)
        if(existingProduct){
           if(!existingProduct.size_list.includes(product.size)){
            existingProduct.size_list = [product.size,...existingProduct.size_list]
           }
           if(!existingProduct.color_list.includes(product.color)){
            existingProduct.color_list = [product.color,...existingProduct.color_list]
          }
        } else {
            const imageList:(string | undefined)[]= ProductImage.filter((productImage:ProductImage)=> {
              if(productImage.color === product.color && productImage.product_id === product.product_id && productImage.image_url) {
              return productImage.image_url
            }} ).map((productImage)=>productImage.image_url)
            const name:string | undefined = Products.find((productItem)=>productItem.product_id === product.product_id)?.name
            refinedData.push({...product, size_list:[product.size], color_list:[product.color], image_list:imageList, name:name})
        }
    })

    return refinedData
}