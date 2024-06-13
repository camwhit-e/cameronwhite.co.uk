import './assets/app.module.css';
import NotFound from "./pages/NotFound"
import PostList from "./pages/blog/PostList";
import { AnimatePresence } from "framer-motion";
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
        path: '/posts',
        element: <PostList />
    },
    {
        path: '/posts/:id',
        element: <PostList />
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

const App = () => (
    <AnimatePresence>
        <RouterProvider router={router} />
    </AnimatePresence>
);

export default App;
