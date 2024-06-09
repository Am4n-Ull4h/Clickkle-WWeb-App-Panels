import { env } from '../utilities/function';

const Apps = [
    {
        name: 'Ads',
        headerName: 'Ads',
        icon: env('ADS_LOGO'),
        to: 'https://ads.clikkle.com/',
    },
    {
        name: 'C-Mail',
        headerName: 'C-Mail',
        icon: env('CMAIL_LOGO'),
        to: 'https://mail.clikkle.com/',
    },
    {
        name: 'Hr',
        headerName: 'Hr',
        icon: env('HR_LOGO'),
        to: 'https://hr.clikkle.com/',
    },
    {
        name: 'Campaigns',
        headerName: 'Campaigns',
        icon: env('CAMPAIGNS_LOGO'),
        to: 'https://campaigns.clikkle.com/',
    },
    {
        name: 'E-Sign',
        headerName: 'E-Sign',
        icon: env('ESIGN_LOGO'),
        to: 'https://esign.clikkle.com/',
    },
    {
        name: 'Files',
        headerName: 'Files',
        icon: env('FILES_LOGO'),
        to: 'https://files.clikkle.com/',
    },

    {
        name: 'Host',
        headerName: 'Host',
        icon: env('HOST_LOGO'),
        to: 'https://host.clikkle.com/',
    },
    {
        name: 'Pitch',
        headerName: 'Pitch',
        icon: env('PITCH_LOGO'),
        to: 'https://pitch.clikkle.com/',
    },
    {
        name: 'Projects',
        headerName: 'Projects',
        icon: env('PROJECT_LOGO'),
        to: 'https://projects.clikkle.com/',
    },
    {
        name: 'Launch',
        headerName: 'Launch',
        icon: env('LAUNCH_LOGO'),
        to: 'https://launch.clikkle.com/',
    },
];

const social = [
    {
        name: 'Crew',
        headerName: 'Crew',
        icon: env('CREW_LOGO'),
        to: 'https://crew.clikkle.com/',
    },
    {
        name: 'Social',
        headerName: 'Social',
        icon: env('SOCIAL_LOGO'),
        to: 'https://social.clikkle.com/',
    },
    {
        name: 'sms',
        headerName: 'sms',
        icon: env('SMS_LOGO'),
        to: 'https://sms.clikkle.com/',
    },

    {
        name: 'Chat',
        headerName: 'Chat',
        icon: env('CHAT_LOGO'),
        to: 'https://chat.clikkle.com/',
    },
];

const life = [
    {
        name: 'Swiprr',
        headerName: 'Swiprr',
        icon: env('SWIPRR_LOGO'),
        to: 'https://swiprr.clikkle.com/',
    },
    {
        name: 'Kept up',
        headerName: 'Kept up',
        icon: env('KEPT_UP_LOGO'),
        to: 'https://keptup.app/',
    },
    {
        name: 'Tax',
        headerName: 'Tax',
        icon: env('TAX_LOGO'),
        to: 'https://tax.clikkle.com/',
    },
    {
        name: 'News',
        headerName: 'News',
        icon: env('NEWS_LOGO'),
        to: 'https://news.clikkle.com/',
    },
];

export { Apps, social, life };
