import './directory-item.styles.scss'
import {Link} from 'react-router-dom'

const DirectoryItem=({category})=>{   //CategoryItem takes parameters from category
    const {imageUrl, title}=category;
    return(  //homepage is built
        <div className='directory-item-container'>
          <div className='background-image' style={{
            backgroundImage:`url(${imageUrl})`
          }} />
          <Link  className='body' to={'shop/'+title.toLowerCase()}>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Link>
        </div>
    );
}
export default DirectoryItem;