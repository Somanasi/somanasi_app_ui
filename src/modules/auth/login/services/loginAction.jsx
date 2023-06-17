import { Event, constants } from '../../../shared/services';
import call from '../../../../services/htpp';
import { redirect } from 'react-router-dom';

export const loginAction = async ({request}) => {
    const payload = Object.fromEntries(await request.formData());
    /**
     * @todo set loading state
     */
    return call('post', constants.login, payload).then((response) => {
        /**
         * @todo unset loading state
         */
        Event('onSuccess', response.message);
        redirect('/dashboard');
    }).catch((error) => {
        /**
         * @todo unset loading state
         */
        Event('onError', error.response.errorMessage);
        /*
        //validate password length
        if(submitted.password.length < 8){
        return {error: "Password must be over 8 characters long!"}
        }
        */
    });
  }
  