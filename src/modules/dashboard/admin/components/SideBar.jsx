import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import links from '../modules/content/links'
import userLinks from '../modules/users/userLinks';
import { adminState, adminStateDispatcher } from '../adminStore'
import { Button,} from '../../../shared';
import LinkPackages from './LinkPackages';
// import { useAppState, useDispatchAppState } from '../../../../store/ApplicationContext';
import { getRandomColor, getUserInitials, } from '../../../shared/utils';

const SideBar = () => {
  

 //APP GLOBAL STATE
  // const globalState = useAppState();
  // const globalStateDispatcher = useDispatchAppState();

  // ADMIN DASHBOARD GLOBAL STATE
  const adminStateDispatcherGlobal = adminStateDispatcher();
  const adminStateGlobal = adminState();

  useEffect(() => {

    adminStateDispatcherGlobal({type: "LINKS", payload: links});
    adminStateDispatcherGlobal({type: "LINKS", payload: userLinks});
  
    // return () => {
    //   second
    // }
  }, [adminStateGlobal.links]);
  

  const toggleAdminDashboard = () => {
    adminStateDispatcherGlobal({type: "TOGGLEADMINDASHBOARDSIDEBAR"});
  };

const portalLinks = adminStateGlobal.links.filter((link) => link.disabled === false);

 const imgURL = '';

 const avatarBackgroundStyle = {
  backgroundColor : imgURL ? '' : getRandomColor(),
};


  return (
    <aside
    className={
      adminStateGlobal.toggleDashboardSidebar ? 
      " expand" : " minimize"
    }
    >
      <div className="information">
        <span className="caption">ADMINS</span>
        <Button onClick={toggleAdminDashboard} >
          <AiOutlineMenu size={20}/>
        </Button>
      </div>

      {/* User Avatar */}
      <div style={avatarBackgroundStyle} className="avatar-container">
       { imgURL ? 
       (<img src={imgURL} alt="User" />) : 
       (<span>{getUserInitials({firstName: "Paullaster", lastName: "Okoth"})}</span>)}
      </div>

     {
      portalLinks.map((link, index) =>{
        return (
          <LinkPackages link={link} key={link.to} />
        )
      })
     }
    </aside>
  )
};

export default SideBar;
