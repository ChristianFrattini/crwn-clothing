import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CategoriesContext } from '../../../contexts (deprecated)/categories.context';
import { useEffect } from 'react';
import ProductCard from '../../pruduct-card/product-card.component';
import { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../../store/categories/category.selector';
import { selectCategoriesIsLoading } from '../../../store/categories/category.selector';
import Spinner from '../../spinner/spinner.component';

const Category=()=>{

    const {category}= useParams();
    //const {categoriesMap}=useContext(CategoriesContext)
    const categoriesMap=useSelector(selectCategoriesMap)
    const isLoading =useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category])
    

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category, categoriesMap])
    return(
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {
                isLoading ? <Spinner/> : <div className='category-container'>
                {
                    products && products.map((product)=>(<ProductCard key={product.id} product={product}/>))
                }
            </div>
            }
        </Fragment>
    )
}

export default Category;