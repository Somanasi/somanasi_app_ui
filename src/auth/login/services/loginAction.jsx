import AuthService from '../..';
import { Event, constants } from '../../../modules/shared/services';
import call from "../../../services/htpp"
import { redirect } from 'react-router-dom';

const loginAction = async ({request}) => {
    
    const payload = Object.fromEntries(await request.formData());

     //validate username length
     if(payload.userId.length < 2){
      return {error: "Username must be 2 or more characters long!"}
      }

        //validate password length
        if(payload.password.length < 8){
        return {error: "Password must be over 8 characters long!"}
        }
        

    /**
     * @todo set loading state
     */
    return call('post', constants.login, payload).then((response) => {
        /**
         * @todo unset loading state
         */
        Event('onSuccess', response.message);
        AuthService.setToken(response.data.data.token);
        AuthService.setUser(response.data.data.user);
        return redirect('/dashboard');
    }).catch((error) => {
        /**
         * @todo unset loading state
         */
        Event('onError', error.response.errorMessage);
        return redirect('/login');
     });
  }
  export{ loginAction};