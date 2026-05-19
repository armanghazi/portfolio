import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { saveAppRoute } from '../utils/routePreservation';

const RoutePreserver = () => {
  const location = useLocation();

  useEffect(() => {
    saveAppRoute(location.pathname, location.search);
  }, [location.pathname, location.search]);

  return null;
};

export default RoutePreserver;
