import { Link as MuiLink, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import { CdnImage } from './Image';
import { Apps } from '../services/Apps';
import { useParams } from "react-router-dom";

const AppsMenu = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const userId = queryParameters.get("userId")
    // const redirectto = queryParameters.get("redirectto")
    // console.log('email',email,redirectto)
    return (
        <>
            <Box mt={1} sx={{ minHeight: '80vh' }}>
                <Grid container alignItems='center' rowSpacing={5}>
                    {Apps.map((app) => (
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
                </Grid>
            </Box>
        </>
    );
};

export default AppsMenu;
