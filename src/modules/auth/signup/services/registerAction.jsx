import React from 'react'

const registerAction = async({request}) => {
    const payload = Object.fromEntries(await request.formData());
    console.log(payload);
//   return (
//     <div>registerAction</div>
//   )
}

export {registerAction}