import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// components
import './main.scss'
import DefaultLayout from './layout/DefaultLayout';
import HomePage from './pages/HomePage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
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
