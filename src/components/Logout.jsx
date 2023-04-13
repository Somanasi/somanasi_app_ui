import { useDispatchAppState } from "../store/ApplicationContext";
import Button from "./Button";

const Logout = ({children, onClick}) => {
  console.log('user logged out')
  const logout = useDispatchAppState;
  console.log(logout)
  return (
    <Button onClick={onClick}>
        {children}
    </Button>
  );
}

export default Logout