import call from "../../../services/htpp";
import AuthService from "../../auth";
import { redirect} from "react-router-dom";
import { Event } from "../../shared/services";
import courseConstants from "../courseConstants";

const Favorite = (id) => {
 
 if(AuthService.checkAuth()){
    const payload = {
        courseId: id,
    }
    call(post, courseConstants.favorite, payload)
    .then((response) => {
        /**
         * @todo add loading state
         */
        Event(onSuccess, response.data.message);
    })
    .catch((error) => {
        /**
         * @todo add loading state
         */
        Event(onError, error.response.errorMessage);
    });
 }
 return redirect('/login');
};

export default Favorite;