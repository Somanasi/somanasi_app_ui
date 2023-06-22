// HIGHLIGHTS >>  Cards data >> User data section
import { FaUserFriends, FaStar, FaCompass,  FaRegChartBar, FaRegFileVideo, FaUsers, FaRoute, FaTasks, FaClipboardCheck,FaChartLine, FaHive , FaCalendarAlt, FaPalette, FaLock, FaUserCog, FaListAlt, FaHistory, FaCloudUploadAlt, FaSatellite, FaSyncAlt} from "react-icons/fa";

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
          { icon: <FaSatellite />, text: "Upgrade Pro" },
          { icon: <FaCloudUploadAlt />, text: "Backups" },
        ]
    },
    {
        id: 2,
        heading: "User Settings",
        headingIcon: <FaUserCog />,
        data: [
          { icon: <FaListAlt />, text: "View Profile" },
          { icon: <FaLock />, text: "Change Password" },
          { icon: <FaHistory />, text: "Manage History" },
          { icon: <FaSyncAlt />, text: "Synch Data" },
        ]
    },
    {
        id: 3,
        heading: "Courses",
        headingIcon: <FaTasks />,
        data: [
          { icon: <FaClipboardCheck />, text: "Complete" },
          { icon: <FaChartLine />, text: "In progress" },
          { icon: <FaStar />, text: "Favorite" },
        ],
    },
    {
        id: 4,
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
