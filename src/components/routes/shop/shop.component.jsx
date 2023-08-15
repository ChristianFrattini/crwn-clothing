//import SHOP_DATA from '../../../shop-data.json'
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../contexts/categories.context"; //import the products from the context
import CategoryPreview from "../../category-preview/category-preview.component";
import './shop.styles.scss'

const Shop=()=>{

    const {categoriesMap}=useContext(CategoriesContext)  //assign the products to const products
    return(
        <div className="shop-container">
            {Object.keys(categoriesMap).map((title)=>{
                const products=categoriesMap[title]
                return <CategoryPreview key={title} title={title} products={products}/>
            }
                    
                )
            }
        </div>
    )
}

export default Shop;