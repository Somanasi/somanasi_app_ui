// HIGHLIGHTS >>  Cards data >> User data section
import { FaUserFriends, FaStar, FaCompass,  FaRegChartBar, FaRegFileVideo, FaUsers, FaRoute, FaTasks, FaClipboardCheck,FaChartLine, FaCog, FaHive , FaCalendarAlt, FaPalette} from "react-icons/fa";

export const DashboardCardData = [
    {
        id: 1,
        cardIcon: <FaUserFriends/>,
        cardTitle: "Community",
        cardCapacity: 23,
        time: "Since yesterday",
        color: "skyblue",
    },
    {
        id: 2,
        cardIcon: <FaCompass/>,
        cardTitle: "Activities",
        cardCapacity: 54,
        time: "Since yesterday",
        color: "brown",
    },
    {
        id: 3,
        cardIcon: <FaStar/>,
        cardTitle: "Favorites",
        cardCapacity: 78,
        time: "Since yesterday",
        color: "purple",
    },
    {
        id: 4,
        cardIcon: <FaUserFriends/>,
        cardTitle: "Courses",
        cardCapacity: 15,
        color: "orange",
        time: "Since yesterday",
    },
];



// SIDEBAR >> Navigations >> Links
export const NavigationsLinks = [
    {
        id: 1,
        heading: "Dashboard",
        headingIcon: <FaPalette />,
        data: [
          { icon: <FaCalendarAlt />, text: "Calenda" },
          { icon: <FaCog />, text: "Settings" },
        ]
    },
    {
        id: 2,
        heading: "Courses",
        headingIcon: <FaTasks />,
        data: [
          { icon: <FaClipboardCheck />, text: "Complete" },
          { icon: <FaChartLine />, text: "In progress" },
          { icon: <FaStar />, text: "Favorite" },
        ],
    },
    {
        id: 3,
        heading: "Activities",
        headingIcon: <FaRoute />,
        data: [
          { icon: <FaHive />, text: "Packages" },
          { icon: <FaUsers />, text: "Community" },
          { icon: <FaRegFileVideo />, text: "Conferences" },
          { icon: <FaRegChartBar />, text: "Analytics" },
        ],
    },
]
