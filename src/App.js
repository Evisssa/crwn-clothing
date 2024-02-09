import{Routes,Route} from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Signin from './routes/signin/signin';

  const Shop =()=>{
    return(
      <div>
        <h2> SHOP</h2>
      </div>
    )
  }


  const App = ()=> {

  return(
    <Routes>
       <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>

        <Route path='signin' element={<Signin/>}/>

       </Route>
      
    </Routes>
     
      
  );
}

export default App;
