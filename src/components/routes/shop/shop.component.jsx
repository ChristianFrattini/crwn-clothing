//import SHOP_DATA from '../../../shop-data.json'
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products.context"; //import the products from the contect

const Shop=()=>{

    const {products}=useContext(ProductsContext)  //assign the products to const products
    return(
        <div>
            {products.map(({id,name})=>( //map products with id and name
                <div key={id}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Shop;