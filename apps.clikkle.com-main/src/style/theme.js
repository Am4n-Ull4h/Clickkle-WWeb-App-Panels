import { createTheme } from '@mui/material';
import React, {
    useMemo,
    useContext,
    useState,
    createContext,
    useLayoutEffect,
} from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getCookie, setCookie } from '../utilities/cookies';

const ThemeContext = createContext({ toggleTheme: () => {} });

const ThemeContextProvider = (props) => {
    // const preferTheme = systemPreferTheme();
    const [mode, setMode] = useState('dark');

    function toggleTheme() {
        setMode((prevMode) => {
            const theme = prevMode === 'light' ? 'dark' : 'light';
            setCookie('P13N', theme, { expires: 365 * 24 * 60 * 60 });
            return theme;
        });
    }

    // function systemPreferTheme() {
    //     if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    //     else if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    //     else return 'dark';
    // }

    useLayoutEffect(() => {
        const theme = getCookie('P13N');
        if (theme) setMode(theme);
    }, []);

    const light = useMemo(
        () => ({
            background: {
                main: '#FFFFFF',
                paper: '#FFFFFF',
                default: '#F7F9FC',
                box: '#F7F9FC',
            },
            divider: '#e7e3e3',
            custom: {
                search: {
                    main: '#edf2fc',
                    focus: 'white',
                },
                border: '#e7e3e3',
                hoverColor: '#45B5E8',
                common: 'white',
                color: 'rgba(0, 0, 0, 0.87)',
                appsHover: 'rgb(232, 240, 254)',
                menu: '#FFFFFF',
                cardHover: '#E1E5EA',
                trashCaption: '#E3E3E3',
                selectedCard: '#c2e7ff',
                selectedMove: '#c2e7ff',
                selectedPanel: '#f2f6fc',
                response: '#2f2e2e',
                selectedHover: '#b3d7ef94',
                shareHover: 'rgb(140 140 140 / 15%)',
                uploadButton: '#FFF',
                uploadButtonHover: '#EDF2FA',
            },
        }),
        []
    );

    const dark = useMemo(
        () => ({
            background: {
                main: '#000000',
                paper: '#141414',
                default: '#141414',
                box: '#000000',
            },
            text: {
                secondary: '#818991',
            },
            divider: '#424242',
            custom: {
                search: {
                    main: '#1A1A1A',
                    focus: '#2F2F2F',
                },
                border: '#616161',
                hoverColor: '#fff',
                common: 'black',
                appsHover: 'rgb(39, 46, 58)',
                menu: '#000000',
                cardHover: '#2F2F2F',
                trashCaption: '#2f2e2e',
                selectedCard: '#2f2e2e',
                selectedPanel: '#2f2e2e',
                selectedMove: '#44b5e899',
                response: 'white',
                selectedHover: '#202020',
                shareHover: 'rgba(255, 255, 255, 0.08)',
                uploadButton: '#2F2F2F',
                uploadButtonHover: '#141414',
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        // main: '#2F2F2F',
                        main: '#3B84D9',
                    },
                    secondary: {
                        // main: '#14A64E',
                        main: '#3EBBF4',
                    },

                    ...(mode === 'light' ? light : dark),
                },
                breakpoints: {
                    keys: ['xs', 'sm', 'md', 'xm', 'lg', 'xl', 'xxl'],
                    values: {
                        xs: 0,
                        sm: 576,
                        md: 768,
                        xm: 1024,
                        lg: 1280,
                        xl: 1516,
                        xxl: 1756,
                    },
                },
                components: {
                    MuiCssBaseline: {
                        styleOverrides: (theme) => ({
                            body: {
                                '&::-webkit-scrollbar, & *::-webkit-scrollbar':
                                    {
                                        backgroundColor: 'transparent',
                                        width: '6px',
                                    },
                                '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb':
                                    {
                                        borderRadius: 8,
                                        backgroundColor: theme.palette.divider,
                                        // backgroundColor: 'red',
                                    },
                                '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
                                    {
                                        backgroundColor: '#747775',
                                    },
                                '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
                                    {
                                        backgroundColor: '#747775',
                                    },
                                '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
                                    {
                                        backgroundColor: '#747775',
                                    },
                            },
                        }),
                    },

                    MuiCard: {
                        styleOverrides: {
                            root: {
                                boxShadow:
                                    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
                                backgroundImage: 'none',
                            },
                        },
                    },

                    MuiDivider: {
                        styleOverrides: {
                            light: {
                                borderColor: '#424242',
                                width: '100%',
                            },
                        },
                    },
                    MuiListItemButton: {
                        variants: [
                            {
                                props: { variant: 'sidebarButton' },
                                style: ({ theme }) => ({
                                    padding: '2px 15px',
                                    cursor: 'pointer',
                                    color: theme.palette.text.secondary,
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                    '&.Mui-selected': {
                                        '&:hover': {
                                            backgroundColor:
                                                theme.palette.primary.main,
                                        },
                                        backgroundColor:
                                            theme.palette.primary.main,
                                        borderRadius: '8px',
                                        '.MuiListItemIcon-root': {
                                            color: 'white',
                                        },
                                        '.MuiListItemText-root': {
                                            color: 'white',
                                        },
                                    },
                                }),
                            },
                        ],
                    },

                    MuiButton: {
                        variants: [
                            {
                                props: { variant: 'contained' },
                                style: ({ theme }) => ({
                                    color: theme.palette.common.white,
                                }),
                            },
                        ],
                        styleOverrides: {
                            root: {
                                textTransform: 'none',
                            },
                        },
                    },
                    MuiTextField: {
                        styleOverrides: {
                            root: {
                                marginBottom: '16px',
                            },
                        },
                    },
                    MuiMenu: {
                        styleOverrides: {
                            root: {
                                // '.MuiPaper-root.MuiMenu-paper.MuiPopover-paper': {
                                //     minWidth: '180px',
                                // },
                                '.MuiMenu-list': {
                                    padding: '5px',
                                },
                                '.MuiButtonBase-root.MuiMenuItem-root': {
                                    fontSize: '14px',
                                },
                            },
                        },
                    },
                    MuiSelect: {
                        styleOverrides: {
                            root: {
                                borderRadius: '5px',
                                fontSize: '14px',
                                fontWeight: 500,
                                cursor: 'pointer',
                            },
                        },
                    },
                    MuiTab: {
                        styleOverrides: {
                            root: {
                                textTransform: 'capitalize',
                            },
                        },
                    },
                },
            }),
        [mode, dark, light]
    );

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
export default ThemeContextProvider;

const useTheme = () => {
    const toggleTheme = useContext(ThemeContext).toggleTheme;
    const mode = useContext(ThemeContext).mode;
    return { toggleTheme, mode };
};

export { useTheme };
