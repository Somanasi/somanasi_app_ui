import { useDispatchAppState } from "../store/ApplicationContext";
import Button from "./Button";

const Logout = ({children, toggle, onClick}) => {
  return (
    <Button onClick={ onClick }>
        {children}
    </Button>
  );
}

export default Logout