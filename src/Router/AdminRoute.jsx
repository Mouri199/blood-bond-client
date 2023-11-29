import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/Hook/useAuth";
import useAdmin from "../Components/Hook/useAdmin";



const AdminRoute = (children) => {
    const [user, load] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (load || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute; 