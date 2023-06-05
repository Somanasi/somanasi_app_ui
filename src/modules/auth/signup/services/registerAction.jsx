import React from 'react'

const registerAction = async({request}) => {
    const formData = await request.formData();
    console.log(formData);
//   return (
//     <div>registerAction</div>
//   )
}

export {registerAction}