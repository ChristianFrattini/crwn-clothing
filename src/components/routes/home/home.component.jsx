import Categories from '../../directory/directory.component'
import { Outlet } from 'react-router-dom';

const Home=()=> {

  return (
    <div>
        <Outlet/>
        <Categories/> 
    </div>   
    
  )
}

export default Home;
