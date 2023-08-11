//import SHOP_DATA from '../../../shop-data.json'
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products.context"; //import the products from the context
import ProductCard from "../../pruduct-card/product-card.component";
import './shop.styles.scss'

const Shop=()=>{

    const {products}=useContext(ProductsContext)  //assign the products to const products
    return(
        <div className="products-container">
            {products.map((product)=>( //map products with id and name
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop;