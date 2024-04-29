import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Pets } from "./pages/Pets";
import { PetDetails } from "./pages/PetDetails";
import { Shelter } from "./pages/Admin/Shelter/Shelter";
import { PetsList } from "./pages/Admin/PetList/PetList";
import { AuthOC } from "./components/common/AuthOC/AuthOC";
import { PetForm } from './pages/Admin/PetForm/PetForm'
import { Sobre } from "./pages/Home/Sobre";
import { Eventos } from "./pages/Home/Eventos";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/sobre',
        element: <Sobre />,
    },
    {
        path: '/eventos',
        element: <Eventos />,
    },
    {
        path: '/pets',
        children: [{
            index: true,
            element: <Pets />
        },
        {
            path: '/pets/:id',
            element: <PetDetails />,
        }
        ],
    },
    {
        path: '/admin',
        children: [
            {
                index: true,
                element: <Shelter />,
            },
            {
                path: '/admin/pets',
                element: <AuthOC />,
                children: [
                    {
                        index: true,
                        element: <PetsList />
                    },
                    {
                        path: '/admin/pets/new',
                        element: <PetForm />,
                    },
                    {
                        path: '/admin/pets/:id',
                        element: <PetForm />,
                    }]
            }
        ]
    },

])

export default router