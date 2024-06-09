import {
    Link as MuiLink,
    Grid,
    Typography,
    Box,
    // IconButton,
    // Avatar,
    // Menu,
    // Stack,
    // Button,
} from '@mui/material';
import React from 'react';
import { CdnImage } from './Image';
import { life } from '../services/Apps';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useMenu } from '../hooks/useMenu';
const LifeIcon = ({ theme, signOut, user }) => {
    // const {
    //     anchorEl: anchorElProfile,
    //     openMenu: openProfileMenu,
    //     closeMenu: closeProfileMenu,
    // } = useMenu();
    const queryParameters = new URLSearchParams(window.location.search)
    const userId = queryParameters.get("userId")
    // console.log('email',email)
    return (
        <>
            <Box mt={1} sx={{ minHeight: '80vh' }}>
                <Grid container alignItems='center' rowSpacing={5}>
                    {life.map((app) => (
                        <Grid
                            item
                            //   lg={4}
                            md={1.5}
                            sm={3}
                            xs={4}
                            key={app.name}
                            mb={2}
                        >
                            <MuiLink
                                href={userId && userId!==''? app.to + "?userId="+userId : app.to}
                                target='_blank'
                                sx={{
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    color: '#5f6368',
                                }}
                            >
                                <Box
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='center'
                                    sx={{}}
                                >
                                    <CdnImage
                                        src={app.icon}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '28px',
                                            backgroundColor: 'none',
                                        }}
                                    />
                                </Box>

                                <Typography
                                    color='text.secondary'
                                    variant='body2'
                                    sx={{
                                        textAlign: 'center',
                                        textTransform: 'capitalize',
                                        fontSize: '13px',
                                        overflowX: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        fontWeight: 500,
                                        mt: 1.5,
                                    }}
                                >
                                    {app.name}
                                </Typography>
                            </MuiLink>
                        </Grid>
                    ))}
                    {/* <Grid
                        item
                        md={1.5}
                        sm={3}
                        xs={4}
                        mb={2}
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                    >
                        <IconButton
                            onClick={openProfileMenu}
                            sx={{ p: 0, background: 'none' }}
                            disableFocusRipple
                            disableTouchRipple
                            disableRipple
                        >
                            <AccountCircleIcon sx={{ color: '#3B84D9' }} />
                        </IconButton>
                        <Typography
                            color='text.secondary'
                            variant='body2'
                            sx={{
                                textAlign: 'center',
                                textTransform: 'capitalize',
                                fontSize: '13px',
                                overflowX: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                fontWeight: 500,
                                mt: 1.5,
                            }}
                        >
                            Profile
                        </Typography>
                    </Grid> */}
                </Grid>
            </Box>
            {/*  */}
            {/* <Menu
                anchorEl={anchorElProfile}
                open={Boolean(anchorElProfile)}
                onClose={closeProfileMenu}
                sx={{
                    '.MuiPaper-root.MuiMenu-paper.MuiPopover-paper': {
                        width: 'min(100%, 320px)',
                        boxShadow:
                            'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
                        border: '1px solid #00000017',
                        bgcolor: 'custom.menu',
                        px: 0.5,
                        pt: 1.5,
                    },
                }}
            >
                <Grid
                    container
                    spacing={2}
                    alignItems='center'
                    flexWrap='nowrap'
                >
                    <Grid item>
                        <Avatar
                            alt='Remy Sharp'
                            src='https://shorturl.at/fjqz9'
                            sx={{ width: 100, height: 100 }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography
                            variant='substitle1'
                            component='div'
                            fontWeight={600}
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {user?.firstName + ' ' + user?.lastName}
                        </Typography>
                        <Typography
                            variant='caption'
                            component='div'
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {user?.email}
                        </Typography>
                        <Typography
                            variant='caption'
                            component='a'
                            href='#'
                            color='primary.main'
                            display='block'
                        >
                            My Clikkle account
                        </Typography>
                        <Typography
                            variant='caption'
                            component='a'
                            href='#'
                            color='primary.main'
                            display='block'
                        >
                            My Profile
                        </Typography>
                    </Grid>
                </Grid>
                <Stack direction='row' mt={2}>
                    <Button variant='text' fullWidth>
                        Add Account
                    </Button>
                    <Button variant='text' onClick={signOut} fullWidth>
                        Sign out
                    </Button>
                </Stack>
            </Menu> */}
        </>
    );
};

export default LifeIcon;
