import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import * as sessionActions from './store/session';
import SpotsIndex from './components/SpotsIndex';
import SpotShow from './components/SpotShow';
import CreateSpotForm from './components/CreateSpotForm';
import ManageSpot from './components/ManageSpot';
import EditSpotForm from './components/EditSpotForm';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <SpotsIndex />
      },
      {
        path: 'spots/:spotId',
        element: <SpotShow />
      },
      {
        path: 'spots/new',
        element: <CreateSpotForm />
      },
      {
        path: 'spots/current',
        element: <ManageSpot />
      },
      {
        path: 'spots/:spotId/edit',
        element: <EditSpotForm />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;