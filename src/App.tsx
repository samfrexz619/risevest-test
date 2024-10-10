import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// components
import DefaultLayout from './layout/DefaultLayout';
import HomePage from './pages/HomePage';
import { AboutUs, BlogPage, FaqsPage, InvestmentClub, ProductPage } from './pages/AllRoutes';
import './main.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/blog',
        element: <BlogPage />
      },
      {
        path: '/faqs',
        element: <FaqsPage />
      },
      {
        path: '/investment-club',
        element: <InvestmentClub />
      },
      {
        path: '/products',
        element: <ProductPage />
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
