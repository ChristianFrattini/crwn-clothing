import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../contexts (deprecated)/categories.context"; //import the products from the context
import CategoryPreview from "../../category-preview/category-preview.component";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../../store/categories/category.selector";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Spinner from "../../spinner/spinner.component";
import './categories-preview.styles.scss'

const CategoriesPreview=()=>{
    const categoriesMap=useSelector(selectCategoriesMap)
    const isLoading=useSelector(selectCategoriesIsLoading)
    //const {categoriesMap}=useContext(CategoriesContext)  //assign the products to const products
    return(
        <div className="category-preview-container">
            { isLoading ? <Spinner/> :(

            Object.keys(categoriesMap).map((title)=>{
                const products=categoriesMap[title]
                return <CategoryPreview key={title} title={title} products={products}/>
            }
                    
                ))
        }
        </div>
    )
}

export default CategoriesPreview;