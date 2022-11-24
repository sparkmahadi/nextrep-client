import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <RouterProvider router={router}>
      <Toaster></Toaster>
    </RouterProvider>
  );
}

export default App;
