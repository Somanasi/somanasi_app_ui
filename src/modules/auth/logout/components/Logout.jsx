import { useDispatchAppState } from "../../../../store/ApplicationContext";
import Button from "../../../shared/components/Button";

const Logout = ({children, toggle, onClick}) => {
  return (
    <Button onClick={ onClick }>
        {children}
    </Button>
  );
}

export default Logout