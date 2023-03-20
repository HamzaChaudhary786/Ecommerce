import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Mens from './Pages/Mens';
import WomenSimpleShirt from './Pages/WomenSimpleShirt';
import W_Tee_Shirt from './Pages/W_Tee_Shirt';
import Hoodie from './Pages/Hoodie';
import { Jacket } from './Pages/Jacket';
import Trouser from './Pages/Trouser';
import Casual from './Pages/Casual';
import Single_Product from './Pages/Single_Product';
import Polo from './Pages/Polo';
import M_TeeShirt from './Pages/M_TeeShirt';
import Freelancer from './Pages/Freelancer';
import M_Trouser from './Pages/M_Trouser';
import Mens_Denims from './Pages/Mens_Denims';
import SignIn from './Pages/SignIn';
import Signup from './Pages/Signup';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/freelancer' element={<Freelancer />} />

        <Route path='/shop' element={<Shop />} />
        <Route path='/mens' element={<Mens />} />

        <Route path='/womensimpleshirt' element={<WomenSimpleShirt />} />
        <Route path='/womenteeshirt' element={<W_Tee_Shirt />} />
        <Route path='/womenhoodie' element={<Hoodie />} />
        <Route path='/womenjacket' element={<Jacket />} />
        <Route path='/womentrouser' element={<Trouser />} />
        <Route path='/mencasual' element={<Casual />} />
        <Route path='/singleproduct' element={<Single_Product />} />
        <Route path='/menpolo' element={<Polo />} />
        <Route path='/menteeshirt' element={<M_TeeShirt />} />
        <Route path='/mentrouser' element={<M_Trouser />} />
        <Route path='/mendenims' element={<Mens_Denims />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />



      </Routes>

    </>
  );
}

export default App;
