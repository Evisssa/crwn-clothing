
//import '../../components/directory/directory-container.style.scss'
import path from 'path';
const directoryPath = path.join(__dirname, '../../components/directory/directory-container.component.jsx');
import Directory from directoryPath;

import { Outlet } from 'react-router-dom';
  const Home = ()=> {

  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  
  return (
  <div>
   
    <Directory categories={categories}/>
  </div>
  );
  
  
}

export default Home;
