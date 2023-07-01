import { Event, constants  } from "../../../modules/shared/services";
import call from "../../../services/htpp";
import { redirect } from 'react-router-dom';

const registerAction = async({request}) => {
    const payload = Object.fromEntries(await request.formData());
    /**
     * @todo set loading state
     */
    return call('post', constants.register, payload).then((response) => {
        /**
         * @todo unset loading state
         */
        Event('onSuccess', response.message);
        return redirect('/login');
    }).catch((error) => {
        /**
         * @todo unset loading state
         */
        console.log(error);
        Event('onError', error.response.errorMessage);
        return redirect('/register');
    });

}

export {registerAction}