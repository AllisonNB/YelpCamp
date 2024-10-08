import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Routes/RootLayout';
import ErrorPage from './Routes/ErrorPage';
import Homepage from './Routes/Homepage';
import CampListLayout from './Routes/CampListLayout';
import AllCampgrounds, { loader as campgroundsLoader } from './Routes/AllCampgrounds';
import CampDetails, { loader as campsiteDetailsLoader, action as deleteCampAction } from './Routes/CampDetails';
import { action as campAction } from '../src/Components/CampForm';
import NewCamp from './Routes/NewCamp';
import EditCamp from './Routes/EditCamp';
import Login from './Routes/Login';
import Success from './Routes/Success'
import ReviewForm, {action as reviewsAction} from './Components/ReviewForm';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: 'campgrounds',
        element: <CampListLayout />,
        children: [
          {
            index: true,
            element: <AllCampgrounds />,
            loader: campgroundsLoader,
          },
          {
            path: 'new',
            element: <NewCamp />,
            action: campAction,
          },
          {
            path: 'success',
            element: <Success />
          },
          {
            path: ':campid',
            loader: campsiteDetailsLoader,
            id: 'campDetails',
            children: [
              {
                index: true,
                element: <CampDetails />,
                action: deleteCampAction,
              },
              {
                path: 'edit',
                element: <EditCamp />,
                action: campAction,
              },
              {
                path: 'reviews',
                element: <ReviewForm />,
                action: reviewsAction,
              }
            ],
          },
        ]
      },
      {
        path: 'login',
        element: <Login />
      },
    ],
  },
]);


function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
