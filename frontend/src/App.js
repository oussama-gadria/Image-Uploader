import './App.css';
import ProgressBar from './components/ProgressBar';
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
      </Routes>
      
    </div>
    
  );
}

export default App;
