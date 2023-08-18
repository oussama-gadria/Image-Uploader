import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import SuccesUpload from './components/SuccessUpload';
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
      
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
