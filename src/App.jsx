import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import MainLayout from "./layout/MainLayout"
import Products from "./pages/Products";
const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/product", element: <Products />}
    ],
  },
]); 
const App = () => {
  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}

export default App