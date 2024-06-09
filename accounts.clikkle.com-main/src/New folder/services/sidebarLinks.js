
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const fileManager = [
    {
        name: 'Home',
        icon: <FolderOutlinedIcon fontSize='small' />,
        to: '/',
    },
    {
        name: 'Personal Info',
        icon: <ContactEmergencyOutlinedIcon fontSize='small' />,
        to: '/personal',
    },
    {
        name: 'Data & Privacy',
        icon: <img src="./Assets/Group 8.png" className='w-6 h-auto' alt="" srcset="" />,
        to: '/data',
    },
    {
        name: 'Security',
        icon: <LockOutlinedIcon fontSize='small' />,
        to: '/security',
    },
    {
        name: 'People & Sharing',
        icon: <img src="./Assets/mdi_people-outline.png" className='w-6 h-auto' alt="" srcset="" />,     
        to: '/sharing',
    },
    {
        name: 'Payment & Subscriptions',
        icon: <img src="./Assets/fluent_payment-24-regular.png" className='w-6 h-auto' alt="" srcset="" />,     
        to: '/payment',
    },
  
];

const sharedFile = [
    {
        name: 'Shared with me',
        icon: <PeopleIcon fontSize='small' />,
        to: '/shared-with-me',
    },
    {
        name: 'Shared by me',
        icon: <PersonIcon fontSize='small' />,
        to: '/shared-by-me',
    },
];

export { fileManager, sharedFile };
