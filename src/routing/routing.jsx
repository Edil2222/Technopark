import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Qyron from "../pages/Qyron/Qyron.jsx";
import Smart from "../pages/Smart/Smart.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'qyron',
                element: <Qyron/>
            },
            {
                path: 'smart',
                element: <Smart/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])

export default router