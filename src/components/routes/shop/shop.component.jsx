//import SHOP_DATA from '../../../shop-data.json'
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../contexts/categories.context"; //import the products from the context
import ProductCard from "../../pruduct-card/product-card.component";
import './shop.styles.scss'

const Shop=()=>{

    const {categoriesMap}=useContext(CategoriesContext)  //assign the products to const products
    return(
        <Fragment>
            {Object.keys(categoriesMap).map((title)=>(
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className="products-container">
                            {categoriesMap[title].map((product)=>( //map products with id and name
                                <ProductCard key={product.id} product={product}/>
                            ))}
                        </div>
                    </Fragment>
                ))
            }
        </Fragment>
    )
}

export default Shop;