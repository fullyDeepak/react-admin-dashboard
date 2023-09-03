import Home from './pages/home/Home';
import './styles/global.scss';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Login from './pages/login/Login';

function App() {
  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='container'>
          <div className='menuContainer'>
            <Menu />
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products />,
        },
      ],
    },
    { path: '/login', element: <Login /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
