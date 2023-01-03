import { Navigate } from "react-router-dom";


const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    authed? <Component/> : <Navigate to="/login" />
  )
}

export default PrivateRoute;