import { AiFillFileText } from 'react-icons/ai';

export default {
    to: "admin/management/content",
    order: 1,
    disabled: false,
    title: "Content Management",
    icon: <AiFillFileText size={20} />,
    sublinks:[
        {
            to: "content",
            order: 2,
            disabled: false,
            title: "Manage Content",
            icon: "FaUserShield",
        },
       
    ]
};