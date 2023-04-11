import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import About from './components/About';
import ErrorPage from './components/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />,
      errorElement: <ErrorPage />,

      children: [
        { path: '/', element: <Home />, },
        { path: '/countries', element: <Countries />, loader: () => fetch(`https://restcountries.com/v3.1/all`) },
        {
          path: '/country/:id',
          loader: ({ params }) => fetch(`https://restcountries.com/v3.1/alpha/${params.id}`),
          element: <CountryDetails />
        },
        { path: '/about', element: <About /> }
      ]
    },

  ])
  return (
    <div >

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
