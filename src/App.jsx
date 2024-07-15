import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './js-components/Pages/LandingPage';
import ReviewForm from "./js-components/Pages/ReviewForm";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";


library.add(fab, fas, far);

const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/review-form", element: <ReviewForm /> }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;