import { useDispatchAppState } from "../../../../store/ApplicationContext";
import Button from "../../../shared/components/Button";

const Logout = ({children, toggle, onClick}) => {
  return (
    <Button onClick={ () => handleLogout() }>
        {children}
    </Button>
  );
};

export const handleLogout = () => {
  localStorage.removeItem('elimuendelezi_token');
  localStorage.removeItem('elimuendelezi_user');
  location.reload();
  console.log('logged out');
};

export default Logout