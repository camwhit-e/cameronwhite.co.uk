import NotFound from "./pages/NotFound"
import IndexContainer from "./pages/IndexContainer";
import ViewProject from "./pages/projects/ViewProject";
import ProjectList from "./pages/projects/ProjectList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexContainer />,
    },
    {
        path: '/projects',
        element: <ProjectList />
    },
    {
        path: '/projects/:id',
        element: <ViewProject />
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default function App () {

    return (
        <div className={'text-zinc-200'}>
                <RouterProvider router={router} />
        </div>
    );
}
