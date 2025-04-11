import { createBrowserRouter } from "react-router"; 
import { UserViewModel } from "../../features/Users/presentation/viewmodels/createUserViewModel.jsx";
import UserView from "../../features/Users/presentation/pages/createUser.jsx";
import { RFCViewModel } from "../../features/RFC/presentation/viewmodels/GetRFCViewModel.jsx";
import { RFCView } from "../../features/RFC/presentation/pages/getRFC.jsx";

const userViewModel = new UserViewModel()
const rfcViewModel = new RFCViewModel()

export const navigationWrapper = createBrowserRouter([
    {
        path: "/",
        element: <UserView viewModel={userViewModel} />,
    },
    {
        path: "/rfc",
        element: <RFCView viewModel={rfcViewModel} />,
    },
]);