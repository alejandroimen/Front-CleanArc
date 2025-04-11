import { createBrowserRouter } from "react-router"; 
import { UserViewModel } from "../../features/Users/presentation/viewmodels/createUserViewModel.jsx";
import UserView from "../../features/Users/presentation/pages/createUser.jsx";

const userViewModel = new UserViewModel()
export const navigationWrapper = createBrowserRouter([
    {
        path: "/",
        element: <UserView viewModel={userViewModel} />,
    },
]);