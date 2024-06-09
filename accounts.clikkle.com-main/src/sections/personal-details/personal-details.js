import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import RHFSelect from "../../components/rhf-select";
import LogoImg from "../../assets/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysArray = Array.from({ length: 31 }, (_, i) => i + 1);
const yearsArray = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

const PersonalDetails = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        gender: Yup.string().required("Required Field"),
        months: Yup.string().required("Required Field"),
        days: Yup.string().required("Required Field"),
        years: Yup.string().required("Required Field"),
    });

    const formik = useFormik({
        initialValues: {
            gender: "",
            months: "",
            days: "",
            years: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            navigate('/email-address');
        },
    });
    return (
        <Box sx={styles.registerWrap}>
            <Box sx={styles.registerContent}>
                <Box sx={{ textAlign: "center" }}>
                    <img src={LogoImg} alt="Logo" style={{ width: "8%" }} />
                </Box>
                <Box sx={{ pt: 2, textAlign: "center" }}>
                    <Typography component="h2" sx={styles.heading}>
                        Personal Details
                    </Typography>
                    <Typography component="h4" sx={styles.label}>
                        Enter your Gender and Birthday
                    </Typography>
                    <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
                        <Box>
                            <RHFSelect formik={formik} name="gender" placeholder="Gender" data={["Male", "Female"]} />
                            <Grid container spacing={2} sx={{ pt: 5 }}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <RHFSelect formik={formik} name="months" placeholder="Gender" data={monthsArray} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <RHFSelect formik={formik} name="days" placeholder="Gender" data={daysArray} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <RHFSelect formik={formik} name="years" placeholder="Gender" data={yearsArray} />
                                </Grid>
                            </Grid>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", pt: 2.8 }}>
                                <Button type="submit" sx={styles.button}>
                                    Next
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: "center", pt: 7 }}>
                            <Typography component="p" sx={styles.desc}>
                                Enter the AI realm with us, or join us with your login
                            </Typography>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default PersonalDetails;

const styles = {
    registerWrap: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
        height: "100vh",
    },
    registerContent: {
        width: "100%",
        maxWidth: "450px",
        border: "1px solid #8C8C8C",
        borderRadius: "12px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        px: "35px",
        py: "35px",
        backgroundColor: "#1E1E1E",
    },
    formWrapper: {
        paddingTop: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "space-between",
        height: "380px",
        flexDirection: "column",
    },
    heading: {
        fontSize: "26px",
        fontWeight: 600,
    },
    label: {
        fontSize: "17px",
        fontWeight: 400,
        color: "#f5f4f4",
        pt: 0.3,
    },
    emailInputAdornment: {
        fontSize: "13px",
        color: "#605f5f",
        fontWeight: 600,
        letterSpacing: 0.8,
        pt: 0.5,
    },
    forgotPassword: {
        color: "#1470B6",
        fontWeight: 700,
        fontSize: "14px",
    },
    register: {
        color: "#1470B6",
        fontWeight: 700,
        fontSize: "14px",
        textDecoration: "none",
    },
    button: {
        backgroundColor: "#1472b8",
        px: "42px",
        py: "14px",
        color: "#fff",
        borderRadius: "10px",
        fontSize: "16px",
        fontWeight: 600,
        textTransform: "capitalize",
        "&:hover": {
            background: "#1472b8",
        },
    },
    desc: {
        fontSize: "16px",
        fontWeight: 600,
        color: "#7e7878",
        pt: 0.3,
    },
};
