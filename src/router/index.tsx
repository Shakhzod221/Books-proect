import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";
import AuthorDetails from "../pages/author-details";
import BookDetails from "../pages/book-details";
import Account from "../pages/account";
import SignIn from "../pages/auth/sign-in";
import SignUp from "../pages/auth/sign-up";
import Generic from "../components/generic";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/author-details",
                element: <AuthorDetails/>,
            },
            {
                path: "/book-details",
                element: <BookDetails/>,
            },
            {
                path: "/account",
                element: <Account/>,
            },
            {
                path: "/authors",
                element: <Generic/>,
            },
            {
                path: "/books",
                element: <Generic/>,
            },
            {
                path: "/maqolalar",
                element: <Generic/>,
            },
            {
                path: "/kommentariyalar",
                element: <Generic/>,
            },
        ],
    },
    {
        path: "/sign-in",
        element: <SignIn/>,
    },
    {
        path: "/sign-up",
        element: <SignUp/>,
    },
]);


export default router;