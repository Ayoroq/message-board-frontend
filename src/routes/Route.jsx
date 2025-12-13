import App from "../App.jsx";
import New from "../pages/New.jsx";
import Home from "../pages/Home.jsx";
import Details from "../pages/Details.jsx";
import ErrorPage from "../components/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
        {
        index: true,
        element: <Home />,
      },
      {
        path: "/new",
        element: <New />,
      },
      {
        path: "/:id",
        element: <Details />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;