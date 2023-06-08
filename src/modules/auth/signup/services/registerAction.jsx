import { call, Event, constants } from '../../../shared/services';
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
        redirect('/login');
    }).catch((error) => {
        /**
         * @todo unset loading state
         */
        Event('onError', error.response.errorMessage);
    });

}

export {registerAction}