import React,{lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
//import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';

//lazy loading usage
const About = lazy(()=> import('./components/About'))



const AppLayout = () => {

const [userName, setUserName] = useState();
useEffect(() => {
  const data = {
    name:"Lokesh kaligatla"
  };
  setUserName(data.name);
},[])

  return (
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <Suspense fallback={<h2>loadinng...</h2>}><About /></Suspense>
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu />
      }
    ],
    errorElement : <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
