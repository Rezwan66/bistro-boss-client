import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import loaderImg from '../assets/others/loader3.gif';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center mt-20">
        <img src={loaderImg} alt="" />
      </div>
    );
  }
  if (!user && !isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};
export default AdminRoute;
