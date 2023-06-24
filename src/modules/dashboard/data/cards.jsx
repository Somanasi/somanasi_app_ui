// HIGHLIGHTS >>  Cards data >> User data section
import { FaUserFriends, FaStar, FaCompass,  FaRegChartBar, FaRegFileVideo, FaUsers, FaRoute, FaTasks, FaClipboardCheck,FaChartLine, FaHive , FaCalendarAlt, FaPalette, FaLock, FaUserCog, FaListAlt, FaHistory, FaCloudUploadAlt, FaSatellite, FaSyncAlt,FaWindows} from "react-icons/fa";

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
          { icon: <FaWindows/>, text: "Home Page", path: "/dashboard" },
          { icon: <FaCalendarAlt />, text: "Calenda", path: "/calenda" },
          { icon: <FaSatellite />, text: "Upgrade Pro", path: "/upgrade" },
          { icon: <FaCloudUploadAlt />, text: "Backups", path: "/backup" },
        ]
    },
    {
        id: 2,
        heading: "User Settings",
        headingIcon: <FaUserCog />,
        data: [
          { icon: <FaListAlt />, text: "View Profile", path: "/profile" },
          { icon: <FaLock />, text: "Change Password", path: "/changepassword" },
          { icon: <FaHistory />, text: "Manage History", path: "/history" },
          { icon: <FaSyncAlt />, text: "Synch Data", path: "/syncdata" },
        ]
    },
    {
        id: 3,
        heading: "Courses",
        headingIcon: <FaTasks />,
        data: [
          { icon: <FaClipboardCheck />, text: "Complete", path: "/completecourses" },
          { icon: <FaChartLine />, text: "In progress", path: "/coursesinprogress" },
          { icon: <FaStar />, text: "Favorite", path: "/favoritecourses" },
        ],
    },
    {
        id: 4,
        heading: "Activities",
        headingIcon: <FaRoute />,
        data: [
          { icon: <FaHive />, text: "Packages", path: "/packages" },
          { icon: <FaUsers />, text: "Community", path: "/comunity" },
          { icon: <FaRegFileVideo />, text: "Conferences", path: "/conferences" },
          { icon: <FaRegChartBar />, text: "Analytics", path: "/analytics" },
        ],
    },
]
