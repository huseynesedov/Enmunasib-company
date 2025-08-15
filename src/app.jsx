import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css';

import './Assets/Styles/leftbar.style.css';
import './Assets/Styles/header.style.css';

import './Assets/Styles/home.style.css';
import './Assets/Styles/partners.style.css';
import './Assets/Styles/cars.style.css';
import './Assets/Styles/reserves.style.css';
import './Assets/Styles/modals.style.css';


import RouteList from './Layout/routers';

import LeftBar from "./Layout/Leftbar/leftbar";
import Header from "./Layout/Header/header";
import Login from './Pages/Partners/partners';

import { AuthProvider, useAuth } from './Contexts/Login/loginContext';
import { ServicesFiltersProvider } from './Contexts/Services/filters';
import { RezervsFiltersProvider } from './Contexts/Rezervs/filters';
import { DriversFiltersProvider } from './Contexts/Drivers/filter';


const AppContent = () => {
  const { userId } = useAuth();

  // Eğer userId yoksa Login bileşenini render et
  if (!userId) {
    return <Login />;
  }

  // Eğer userId varsa, normal uygulama görünümünü gösterrr
  return (
    <div className="main d-flex">
      <div className=" thon_leftbar">
        <LeftBar />
      </div>
      <div className="d-flex flex-column w-100">
        <div className="p-2 px-4 thon_header">
          <Header />
        </div>
        <div className="flex-grow-1 p-4 ">
          <RouteList />
        </div>
      </div>
    </div>
  );
};

export const composeProviders = (...providers) => {
  return providers.reduceRight(
    (Accumulated, Current) => ({ children }) =>
      <Current><Accumulated>{children}</Accumulated></Current>,
    ({ children }) => <>{children}</>
  );
};


export const AppProviders = composeProviders(
  BrowserRouter,
  AuthProvider,
  ServicesFiltersProvider,
  RezervsFiltersProvider,
  DriversFiltersProvider
);

const App = () => {
  return (
    <AppProviders>
      <AppContent />
    </AppProviders>
  );
};


export default App;
