import { useAuth } from "/src/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Guard(props) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return props.children;
}
