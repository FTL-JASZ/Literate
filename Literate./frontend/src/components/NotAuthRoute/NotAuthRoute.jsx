import { Navigate } from "react-router-dom";
import { AuthorizeContext } from "../../contexts/authUser";
import { useContext } from "react";

const NotAuthRoute = ({ children }) => {
  const { authState, initialized } = useContext(AuthorizeContext);
  if (!initialized) return null;

  if (initialized && authState.isAuthenticated)
    return <Navigate to="/Dashboard" replace />;

  return <>{children}</>;
};
export default NotAuthRoute;
