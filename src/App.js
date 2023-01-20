import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Orders from './components/Orders';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  //add router
  const router= createBrowserRouter([
    {
      //path root
      path:'/',
      //import Main router
      element:<Main></Main>,
      //add children router
      children:[
        {
          //root will show home page/route
          path:'/' ,        
          element:<Home></Home>
        },

        {
          path:'/orders',
          element:<PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path:'/login',
          element:<Login></Login>

        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
