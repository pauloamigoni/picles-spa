import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Pets } from "./pages/Pets";
import { PetDetails } from "./pages/PetDetails";
import { Shelter } from "./pages/Admin/Shelter/Shelter";
import { PetsList } from "./pages/Admin/PetList/PetList";
import { AuthOC } from "./components/common/AuthOC/AuthOC";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
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
                    }]
            }
        ]
    },

])

export default router