import { IoMdPeople  } from 'react-icons/io';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

export default {
    to: "admin/management/users",
    order: 1,
    disabled: false,
    showSublinks: false,
    title: "User Management",
    icon: <IoMdPeople  size={20} />,
    sublinks:[
        {
            to: "users/manage",
            order: 2,
            disabled: false,
            title: "Manage Users",
            icon: <AiOutlineUsergroupAdd size={20} />,
        },
       
    ]
};