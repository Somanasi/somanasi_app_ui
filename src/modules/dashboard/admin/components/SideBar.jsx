import React from 'react'
import { adminState } from '../adminStore'

const SideBar = () => {
  const state = adminState();
  console.log(state.links)
  return (
    <aside>
      aside
    </aside>
  )
};

export default SideBar;