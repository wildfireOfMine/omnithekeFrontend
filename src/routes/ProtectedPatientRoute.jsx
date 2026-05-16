import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedPatientRoute = () => {
    const session = useSelector(
        (state) => state.account.session
    )
    console.log("SESSION PROTECTED ROUTE", session);
    if (!session.token && session.role != "patient") {
        return <Navigate to={'/'} replace />
    }
    return <Outlet />
}
