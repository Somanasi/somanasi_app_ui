import { useLocation } from 'react-router-dom';


const isSpecifiedPath = (path) => {
  const location = useLocation();
  return location.pathname.includes(path);
}

export default isSpecifiedPath;