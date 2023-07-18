import { AiFillFileText } from 'react-icons/ai';
import { BsFileEarmarkText} from 'react-icons/bs';
import { RiFileAddLine, RiBarChart2Line  } from 'react-icons/ri';

export default [
    {
    to: "management/content",
    order: 1,
    disabled: false,
    showSublinks: false,
    title: "Content Management",
    icon: <AiFillFileText size={20} />,
    sublinks:[
        {
            to: "content/manage",
            order: 2,
            disabled: false,
            title: "Manage Content",
            icon: <BsFileEarmarkText size={20} />,
        },
        {
            to: "content/create",
            order: 2,
            disabled: false,
            title: "Create Content",
            icon: <RiFileAddLine size={20} />,
        },
        {
            to: "content/stats",
            order: 2,
            disabled: false,
            title: "Content Stats",
            icon: <RiBarChart2Line  size={20} />,
        },
       
    ]
    },
];
