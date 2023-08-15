import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CategoriesContext } from '../../../contexts/categories.context';
import { useEffect } from 'react';
import ProductCard from '../../pruduct-card/product-card.component';
import { useState } from 'react';

const Category=()=>{

    const {category}= useParams();
    const {categoriesMap}=useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category, categoriesMap])
    return(
        <div className='category-container'>
            {
                products && products.map((product)=>(<ProductCard key={product.id} product={product}/>))
            }
        </div>
    )
}

export default Category;