import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../app/store";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

    return isAuth ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;