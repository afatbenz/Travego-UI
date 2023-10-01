import React from "react";

const Dashboard = React.lazy(() => import('./views/dashboard/dashboard'))

const routers = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', exact: true, name: 'Dashboard', element: Dashboard } 
]

export default routers;