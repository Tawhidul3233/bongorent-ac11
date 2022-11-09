import logo from './logo.svg';
import './App.css';
import Main from './Layout/Main';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routers';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
