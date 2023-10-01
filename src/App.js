import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Home from './components/layout/Home';
// import Dashboard from './components/layout/Dashboard'
import Services from './components/layout/Services';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/defaultLayout'))

function App() {
  return (
    <Router>
      <Suspense fallback={loading}>
      <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route path="/" name="Home" element={<DefaultLayout />} />
          <Route index element={<DefaultLayout />} />
          <Route path='services' element={<Services />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/logout" element={<Home />} /> */}
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
