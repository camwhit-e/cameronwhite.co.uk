import NotFound from "./pages/NotFound"
import Wrapper from "./elements/Wrapper";
import IndexContainer from "./pages/IndexContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexContainer />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default () => (
    <div className={'text-zinc-200'}>
        <Wrapper>
            <RouterProvider router={router} />
        </Wrapper>
    </div>
);
