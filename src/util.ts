import InventryData from './data/inventory.json'
import { streamLineProduct } from './model'

export const getTransformedProduct = ()=>{
   return streamLineProduct(InventryData)
}