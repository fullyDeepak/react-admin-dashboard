import Home from './pages/home/Home';
import './styles/global.scss';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Login from './pages/login/Login';
import User from './pages/user/User';
import Product from './pages/product/Product';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='container'>
          <div className='menuContainer'>
            <Menu />
          </div>
          <QueryClientProvider client={queryClient}>
            <div className='contentContainer'>
              <Outlet />
            </div>
          </QueryClientProvider>
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
        {
          path: '/users/:id',
          element: <User />,
        },
        {
          path: '/products/:id',
          element: <Product />,
        },
      ],
    },
    { path: '/login', element: <Login /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
