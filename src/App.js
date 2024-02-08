/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './Components/Dashboard';
import { Ecommerce, Orders, Employees, Customers } from './Pages/Dashboard';
import { Login, Register } from './Pages/Auth'
import './App.css';

import { useStateContext } from './Contexts/ContextProvider';

const AuthLayout = ({ children }) => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 dark:bg-main-dark-bg">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="/orders" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Calista Prima
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

const DashboardLayout = ({ children }) => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const isDarkModeEnabled = currentMode === 'Dark';

  return (
    <div className={isDarkModeEnabled ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent
            content="Settings"
            position="Top"
          >
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg default-background min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed md:static bg-main-bg default-background dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
            {themeSettings && (<ThemeSettings />)}
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const { setCurrentColor, setCurrentMode } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<AuthLayout><Login /></AuthLayout>} />
      
      {/* // Auth */}
      <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        
      <Route path="/dashboard" element={<DashboardLayout><Ecommerce /></DashboardLayout>} />
      <Route path="/dashboard/home" element={<DashboardLayout><Ecommerce /></DashboardLayout>} />
      <Route path="/dashboard/orders" element={<DashboardLayout><Orders /></DashboardLayout>}/>
      <Route path="/dashboard/order/rent" element={<DashboardLayout><Orders /></DashboardLayout>}/>
      <Route path="/dashboard/order/travel" element={<DashboardLayout><Orders /></DashboardLayout>}/>
      <Route path="/dashboard/catalogue" element={<DashboardLayout><Orders /></DashboardLayout>}/>

      <Route path="/dashboard/employees" element={<DashboardLayout><Employees /></DashboardLayout>} />
      <Route path="/dashboard/customers" element={<DashboardLayout><Customers /></DashboardLayout>} />
      <Route path="/dashboard/schedules" element={<DashboardLayout><Customers /></DashboardLayout>} />
      <Route path="/dashboard/setting" element={<DashboardLayout><Customers /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
