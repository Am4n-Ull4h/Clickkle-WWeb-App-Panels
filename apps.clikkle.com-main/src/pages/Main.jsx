import { Box, Tab, Tabs, useTheme as useMuiTheme } from '@mui/material';
import React, { useState } from 'react';
import LifeIcon from '../components/LifeIcon';
import AppsMenu from '../components/AppsMenu';
import SocialIcon from '../components/SocialIcon';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction='down' ref={ref} {...props} />;
// });
function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div role='tabpanel' hidden={value !== index}>
            {value === index && (
                <Box p={1}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

const Main = () => {
    const [tabSelected, setTabSelected] = useState(0);
    const tabHandleChange = (event, newValue) => {
        setTabSelected(newValue);
    };
    const theme = useMuiTheme();
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    my: 2,
                }}
            >
                <Tabs
                    value={tabSelected}
                    onChange={tabHandleChange}
                    variant='fullWidth'
                >
                    <Tab label='Life' />
                    <Tab
                        label='Business'
                        sx={{
                            mx: {
                                sm: 0,
                                xs: 3,
                            },
                        }}
                    />
                    <Tab label='Social' />
                </Tabs>
            </Box>
            <Box>
                <TabPanel value={tabSelected} index={0}>
                    <LifeIcon theme={theme} />
                </TabPanel>
                <TabPanel value={tabSelected} index={1}>
                    <AppsMenu theme={theme} />
                </TabPanel>
                <TabPanel value={tabSelected} index={2}>
                    <SocialIcon theme={theme} />
                </TabPanel>
            </Box>
            <Box my={3} display='flex' justifyContent='center'>
                <Box
                    sx={{
                        width: '30px',
                        height: '3px',
                        background: tabSelected === 0 ? '#2984d9' : '#AAAAAA',
                    }}
                ></Box>
                <Box
                    sx={{
                        width: '30px',
                        height: '3px',
                        background: tabSelected === 1 ? '#2984d9' : '#AAAAAA',
                        mx: 3,
                    }}
                ></Box>
                <Box
                    sx={{
                        width: '30px',
                        height: '3px',
                        background: tabSelected === 2 ? '#2984d9' : '#AAAAAA',
                    }}
                ></Box>
            </Box>
        </>
    );
};

export default Main;
