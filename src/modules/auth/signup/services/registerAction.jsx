import React from 'react'
import { useActionData } from 'react-router-dom';
// import {}
const registerAction = async({request}) => {
    const payload = Object.fromEntries(await request.formData());
    console.log();
//   return (
//     <div>registerAction</div>
//   )
}

export {registerAction}