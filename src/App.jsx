import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componant/Home/Home';
import Layout from './componant/Layout/Layout';
import Brand from './componant/Brand/Brand';
import Cart from './componant/Cart/Cart';
import Login from './componant/Login/Login';
import Register from './componant/Register/Register';
import Prodect from './componant/Prodect/Prodect';
import Categories from './componant/Categories/Categories';
import NotFound from './componant/NotFound/NotFound';
import WashListContextProvider from './Context/WashListContext';
import UserContextProvider from './Context/UserContext';
import ProdectRouter from './componant/ProdectRouter/ProdectRouter';
import ProdectDetails from './componant/ProdectDetails/ProdectDetails';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CartContextProvider from './Context/CartContext';
import  { Toaster } from 'react-hot-toast';
import CategoryDetails from './CategoryDetails/CategoryDetails';
import CategoryContextProvider from './Context/CategoryCotext';
import BrandDetails from './componant/Brand/BrandDetails/BrandDetails';
import BrandContextProvider from './Context/BrandContext';
import WashList from './componant/WashList/WashList';
import CheckOut from './componant/CheckOut/CheckOut';
import AllOrders from './componant/AllOrders/AllOrders';
function App() {
let query= new QueryClient()
 let x=createBrowserRouter([{
  path:"",element:<Layout/>,children:[
    {index:true,element:<ProdectRouter><Home/></ProdectRouter>},
    {path:"categorydetails/:id",element:<ProdectRouter><CategoryDetails/></ProdectRouter>},
    {path:"brand",element:<ProdectRouter><Brand/></ProdectRouter>},
    {path:"cart",element:<ProdectRouter><Cart/></ProdectRouter>},
    {path:"washlist",element:<ProdectRouter><WashList/></ProdectRouter>},
    {path:"login",element:<Login/>},
    {path:"allorders",element:<ProdectRouter><AllOrders/></ProdectRouter>},
    {path:"checkout",element:<ProdectRouter><CheckOut/></ProdectRouter>},
    {path:"branddetails/:id",element:<ProdectRouter><BrandDetails/></ProdectRouter>},
    {path:"register",element:<Register/>},
    {path:"categories",element:<ProdectRouter><Categories/></ProdectRouter>},
    {path:"prodect",element:<ProdectRouter><Prodect/></ProdectRouter>},
    {path:"prodectdetails/:id/:category",element:<ProdectRouter><ProdectDetails/></ProdectRouter>},
    {path:"*",element:<NotFound/>}
  ]
 }])


  return (
  <>
  <BrandContextProvider>
  <CategoryContextProvider>
  <UserContextProvider>
  <CartContextProvider>
  <WashListContextProvider>
   <QueryClientProvider client={query}> 
  <RouterProvider router={x}></RouterProvider>
  <Toaster />
  <ReactQueryDevtools></ReactQueryDevtools>
  </QueryClientProvider>
  </WashListContextProvider>
  </CartContextProvider>
  </UserContextProvider>
  </CategoryContextProvider>
  </BrandContextProvider>
  </>
  )
}

export default App
