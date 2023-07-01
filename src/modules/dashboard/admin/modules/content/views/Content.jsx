import React from 'react'
import { adminState, adminStateDispatcher } from '../../../adminStore'
import links from '../links';

const Content = () => {
    const state = adminState();
    const stateDispatcher = adminStateDispatcher();

    stateDispatcher ({type: "LINKS", payload: links});

  return (
    <div>Content</div>
  )
}

export default Content