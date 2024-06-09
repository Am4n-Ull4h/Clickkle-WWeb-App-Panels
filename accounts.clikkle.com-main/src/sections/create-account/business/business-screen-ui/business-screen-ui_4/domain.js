import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LogoImg from "../../../../../assets/logo.png";
import LogoPlusImg from "../../../../../assets/CLIKKLE PLUS LOGO.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import RHFCheckbox from "../../../../../components/rhf-checkbox";
import RHFPhoneInput from "../../../../../components/rhf-phone-number";
import useWidth from "../../../../../hooks/useSize";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RHFTextField from "../../../../../components/rhf-textField";

const Domain = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed")
      .min(2)
      .max(25)
      .required("Required Field"),
    lastName: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed")
      .min(2)
      .max(25)
      .required("Required Field"),
    number: Yup.string().required("Required Field"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/domain");
    },
  });
  const styles = {
    loginWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "#fff",
      height: "100dvh",
      padding: "0px 8px",
    },
    loginContent: {
      maxWidth: width > 768 ? "448.8px" : "100%",
      minHeight: width > 768 ? "500px" : "100%",
      border: width > 768 ? "1px solid #8C8C8C" : "none",
      borderRadius: width > 768 ? "12px" : "none",
      // boxShadow:
      //   width > 768 ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "none",
      px: "35px",
      py: "35px",
      backgroundColor: "#121212",
      display: "flex",
      flexDirection: "column",
      justifyContent: width > 768 ? "flex-start" : "space-between",
      gap: "20px",
    },
    formWrapper: {
      paddingTop: "10px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignContent: "space-between",
      flexDirection: "column",
    },
    heading: {
      fontSize: "24px",
      fontWeight: 500,
    },
    label: {
      fontSize: "16px",
      fontWeight: 400,
      color: "#f5f4f4",
      py: 1,
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
      textDecoration: "none",
      padding: "10px 16px",
      color: "#fff",
      borderRadius: "6px",
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "uppercase",
      border: "1px solid #8C8C8C",
      //boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",

      backgroundColor: "#121212",

      color: "#1470b6",
      "&:hover": {
        background: "#1472b8",
        color: "white",
      },
    },
    container: {
      display: "flex",
      justifyContent: "space",
    },
    desc: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#7e7878",
      py: 1,
      px: 2,
    },
  };
  return (
    <Box sx={styles.loginWrap}>
      <Box sx={styles.loginContent}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={LogoPlusImg}
              alt="Logo"
              style={{ width: width > 768 ? "170px" : "170px" }}
            />
          </Box>
        </Box>
        <Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography component="h2" sx={styles.heading}>
              Does Your Business have a Domain?
            </Typography>
            <Typography component="h4" sx={styles.label}>
              You'll need a domain, like example.com, to set up email and a
              Clikkle Plus account for your business.
            </Typography>

            <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "25px",
                  pt: 2,
                }}
              >
                {/* Login Button */}

                <Link to="/domain-yes" style={styles.button}>
                  Yes, I Have One
                </Link>

                <Link to="/domain-no-find" style={styles.button}>
                  No, I need One
                </Link>
              </Box>
            </form>
          </Box>
        </Box>
        <Box style={{ textAlign: "center", marginTop: "auto" }}>
          <Typography component="p" sx={styles.desc}>
            Enter the AI realm with us, or join us with your login
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Domain;
