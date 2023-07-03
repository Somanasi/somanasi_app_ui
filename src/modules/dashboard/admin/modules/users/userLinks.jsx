import { IoMdPeople  } from 'react-icons/io';

export default {
    to: "admin/management/users",
    order: 1,
    disabled: false,
    title: "User Management",
    icon: <IoMdPeople  size={20} />,
    sublinks:[
        {
            to: "users",
            order: 2,
            disabled: false,
            title: "Manage Users",
            icon: "FaUserShield",
        },
       
    ]
};