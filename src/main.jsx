import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Pages/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Gallary from './Pages/Gallary/Gallary.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import PetListing from './Components/PetListing/PetListing.jsx';
import DonationCampaigns from './Pages/DonationCampaigns/DonationCampaigns.jsx';
import UpdatePet from './MongoDB/UpdatPet/UpdatPet.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import SignIn from './Pages/SignIn/SignIn.jsx';
import Dashboard from './Components/Layout/Dashboard.jsx';
import Cart from './Pages/DashBoard/Cart/Cart.jsx';
import AddPet from './Pages/DashBoard/AddPet/AddPet.jsx';
import MyAddedPets from './Pages/DashBoard/MyAddedPets/MyAddedPets.jsx';
import CreateDonation from './Pages/DashBoard/CreateDonation/CreateDonation.jsx';
import MyDonationCampaigns from './Pages/DashBoard/MyDonationCampaigns/MyDonationCampaigns.jsx';
import AdoptionRequest from './Pages/DashBoard/AdoptionRequest/AdoptionRequest.jsx';
import MyDonations from './Pages/DashBoard/MyDonations/MyDonations.jsx';
import PetDetails from './Components/Layout/PetDetails/PetDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/petlisting',
        element: <PrivateRoute><PetListing></PetListing></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/pet'),
      },
      {
        path: '/donationcampaign',
        element: <PrivateRoute><DonationCampaigns></DonationCampaigns></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/createDonation'),
      },
      {
        path: '/petDetails/:_id',
        element: <PetDetails></PetDetails>
      },
      {
        path: '/gallary',
        element: <Gallary></Gallary>
      },
      {
        path: '/login',
        element: <SignIn></SignIn>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      },
      {
        path: '/viewDetails/:_id',
        element: <ViewDetails></ViewDetails>
      },
      {
        path: '/updateCard/:id',
        element: <PrivateRoute> <UpdatePet></UpdatePet> </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/pet/${params.id}`),
      },

    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'cart',
        element:<Cart></Cart>
      },
      {
        path: 'addPet',
        element: <PrivateRoute> <AddPet></AddPet> </PrivateRoute>
      },
      {
        path: 'myAddedPets',
        element: <PrivateRoute> <MyAddedPets></MyAddedPets> </PrivateRoute>
      },
      {
        path: 'adoptionRequest',
        element: <PrivateRoute> <AdoptionRequest></AdoptionRequest> </PrivateRoute>
      },
      {
        path: 'createDonation',
        element: <PrivateRoute> <CreateDonation></CreateDonation> </PrivateRoute>
      },
      {
        path: 'myDonationCampaigns',
        element: <PrivateRoute><MyDonationCampaigns></MyDonationCampaigns></PrivateRoute>
      },
      {
        path: 'myDonations',
        element: <PrivateRoute> <MyDonations></MyDonations> </PrivateRoute>
      },
      
    ]
  }
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider router={router}>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
