import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/router';
import { useEffect } from 'react';
import Aos from 'aos';


function App() {
  useEffect(()=>{
    Aos.init();
    Aos.refresh();
  },[])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
