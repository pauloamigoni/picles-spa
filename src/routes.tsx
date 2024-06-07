import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Layout } from './layout';
import { Home } from './pages/Home/Home';
import { Pets } from './pages/Pets';
import { PetDetails } from './pages/PetDetails';
import { Shelter } from './pages/Admin/Shelter/Shelter';
import { PetsList } from './pages/Admin/PetList/PetList';
import { AuthOC } from './components/common/AuthOC/AuthOC';
import { PetForm } from './pages/Admin/PetForm/PetForm';
import { Sobre } from './pages/Home/Sobre';
import { Eventos } from './pages/Home/Eventos';
import { Abrigos } from './pages/Home/Abrigos';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Home /></Layout>,
    },
    {
        path: '/sobre',
        element: <Layout><Sobre /></Layout>,
    },
    {
        path: '/eventos',
        element: <Layout><Eventos /></Layout>,
    },
    {
        path: '/abrigos',
        element: <Layout><Abrigos /></Layout>,
        // children: [
        //     { index: true, element: <Abrigos /> },
        //     { path: ':id', element: <ShelterDetails /> },
        // ]
    },
    {
        path: '/pets',
        element: <Layout><Outlet /></Layout>,
        children: [
            { index: true, element: <Pets /> },
            { path: ':id', element: <PetDetails /> },
        ],
    },
    {
        path: '/admin',
        element: <Layout><Outlet /></Layout>,
        children: [
            { index: true, element: <Shelter /> },
            {
                path: 'pets',
                element: <AuthOC />,
                children: [
                    { index: true, element: <PetsList /> },
                    { path: 'new', element: <PetForm /> },
                    { path: ':id', element: <PetForm /> },
                ]
            }
        ]
    },
]);

export default router;
