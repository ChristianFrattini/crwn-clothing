import './directory-item.styles.scss'
import {Link} from 'react-router-dom'

const DirectoryItem=({category})=>{   //CategoryItem takes parameters from category
    const {imageUrl, title}=category;
    return(  //homepage is built
        <Link className='directory-item-container' to={'shop/'+title.toLowerCase()}>
          <div className='background-image' style={{
            backgroundImage:`url(${imageUrl})`
          }} />
          <div  className='body' >
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </Link>
    );
}
export default DirectoryItem;