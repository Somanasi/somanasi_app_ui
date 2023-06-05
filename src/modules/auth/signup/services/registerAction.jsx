import React from 'react'
import { useActionData } from 'react-router-dom';
import { call } from '../../../shared/services';

const registerAction = async({request}) => {
    const payload = Object.fromEntries(await request.formData());
    
    return call('post', )
}

export {registerAction}