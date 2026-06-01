import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedReceptionistRoute = () => {
    const session = useSelector(
        (state) => state.account.session
    )
    console.log("SESSION PROTECTED ROUTE", session);
    if (!session.token && session.role != "receptionist") {
        return <Navigate to={'/'} replace />
    }
    return <Outlet />
}
