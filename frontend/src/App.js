import './App.css';
import SuccesUpload from './components/SuccesUpload';
import ImageUpload from './pages/ImageUpload';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='h-[100vh] bg-lightGray'>
      <Routes> 
        <Route 
          path='/' 
          element={<ImageUpload/>}> 
        </Route>
        <Route 
          path='/successUpload' 
          element={<SuccesUpload/>}>
        </Route>
      </Routes>  
    </div>    
  );
}

export default App;
