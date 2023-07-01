// HIGHLIGHTS >>  Cards data >> User data section
import { FaUserFriends, FaStar, FaCompass,  FaRegChartBar, FaRegFileVideo, FaUsers, FaRoute, FaTasks, FaClipboardCheck,FaChartLine, FaHive , FaCalendarAlt, FaPalette, FaLock, FaUserCog, FaListAlt, FaHistory, FaCloudUploadAlt, FaSyncAlt,FaWindows, FaGraduationCap, FaBlog, FaDownload} from "react-icons/fa";

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
          { icon: <FaCalendarAlt />, text: "Calenda", path: "/dashboard/calenda" },
          { icon: <FaBlog />, text: "Create blog", path: "/dashboard/blogpage" },
          { icon: <FaCloudUploadAlt />, text: "Backups", path: "/dashboard/backup" },
        ]
    },
    {
        id: 2,
        heading: "User Settings",
        headingIcon: <FaUserCog />,
        data: [
          { icon: <FaListAlt />, text: "View Profile", path: "/dashboard/profile" },
          { icon: <FaLock />, text: "Change Password", path: "/dashboard/changepassword" },
          { icon: <FaHistory />, text: "Manage History", path: "/dashboard/history" },
          { icon: <FaSyncAlt />, text: "Synch Data", path: "/dashboard/syncdata" },
        ]
    },
    {
        id: 3,
        heading: "Courses",
        headingIcon: <FaTasks />,
        data: [
          { icon: <FaGraduationCap />, text: "Available courses", path: "/dashboard/coursesonoffer" },
          { icon: <FaClipboardCheck />, text: "Complete", path: "/dashboard/completecourses" },
          { icon: <FaChartLine />, text: "In progress", path: "/dashboard/coursesinprogress" },
          { icon: <FaStar />, text: "Favorite", path: "/dashboard/favoritecourses" },
          { icon: <FaDownload />, text: "Genarate report", path: "/dashboard/downloadcoursesummary" },
        ],
    },
    {
        id: 4,
        heading: "Activities",
        headingIcon: <FaRoute />,
        data: [
          { icon: <FaHive />, text: "Packages", path: "/dashboard/packages" },
          { icon: <FaUsers />, text: "Community", path: "/dashboard/comunity" },
          { icon: <FaRegFileVideo />, text: "Conferences", path: "/dashboard/conferences" },
          { icon: <FaRegChartBar />, text: "Analytics", path: "/dashboard/analytics" },
        ],
    },
]
