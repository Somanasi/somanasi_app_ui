import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import links from '../modules/content/links'
import { adminState, adminStateDispatcher } from '../adminStore'
import { Button, ListItems } from '../../../shared';
import LinkPackages from './LinkPackages';
import { useAppState, useDispatchAppState } from '../../../../store/ApplicationContext';

const SideBar = () => {

 //APP GLOBAL STATE
  // const globalState = useAppState();
  // const globalStateDispatcher = useDispatchAppState();

  // ADMIN DASHBOARD GLOBAL STATE
  const adminStateDispatcherGlobal = adminStateDispatcher();
  const adminStateGlobal = adminState();

  useEffect(() => {

    adminStateDispatcherGlobal({type: "LINKS", payload: links});
  
    // return () => {
    //   second
    // }
  }, [adminStateGlobal.links]);
  

  const toggleAdminDashboard = () => {
    adminStateDispatcherGlobal({type: "TOGGLEADMINDASHBOARDSIDEBAR"});
  };
  

const portalLinks = adminStateGlobal.links.filter((link) => link.disabled === false);
// console.log(portalLinks)
console.log(adminStateGlobal.toggleDashboardSidebar);
  return (
    <aside 
    className={
      adminStateGlobal.toggleDashboardSidebar ? 
      " bg-information expand" : "bg-information minimize"
    }
    >
      <div>
        <span className="caption">ADMINS</span>
        <Button onClick={toggleAdminDashboard} >
          <AiOutlineMenu size={20}/>
        </Button>
      </div>
     {
      portalLinks.map((link) =>{
        return (
          <ListItems link={link} key={link.to}>
            <LinkPackages link={link} />
          </ListItems>
        )
      })
     }
    </aside>
  )
};

export default SideBar;
