import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedPatientRoute = () => {
    const session = useSelector(
        (state) => state.account.session
    )
    console.log("SESSION PROTECTED ROUTE", session);
    const storedSession = localStorage.getItem("currentSession");
    const mustChangePassword = storedSession ? JSON.parse(storedSession).mustChangePassword : false;
    if (!session.token && session.role != "patient") {
        return <Navigate to={'/'} replace />
    }
    if (mustChangePassword) {
        return <Navigate to={'/changeYourPassword'} replace />
    }
    return <Outlet />
}
