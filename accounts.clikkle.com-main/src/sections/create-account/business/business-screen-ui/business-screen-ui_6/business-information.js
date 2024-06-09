import React, { useRef } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";

import LogoPlusImg from "../../../../../assets/CLIKKLE PLUS LOGO.png";
import RHFTextField from "../../../../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useWidth from "../../../../../hooks/useSize";

const BusinessInformation = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    streetAddress: Yup.string()
      .matches(/^[a-zA-Z0-9\s]+$/, "Only alphabets and numbers are allowed")
      .min(2, "Address is too short")
      .max(100, "Address is too long")
      .required("Street address is required"),
    streetAddressLine2: Yup.string().required("Street address is required"),
    city: Yup.string()
      .matches(/^[a-zA-Z0-9\s]+$/, "Only alphabets and numbers are allowed")
      .min(2, "Address is too short")
      .max(100, "Address is too long")
      .required("City address is required"),
    LocalGovernmentArea: Yup.string()
      .matches(/^[a-zA-Z0-9\s]+$/, "Only alphabets and numbers are allowed")
      .min(2, "Address is too short")
      .max(100, "Address is too long")
      .required(" required"),
  });

  const formik = useFormik({
    initialValues: {
      streetAddress: "",
      streetAddressLine2: "",
      city: "",
      LocalGovernmentArea: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/business-contact-info");
    },
  });

  const styles = {
    registerWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "#fff",
      height: "100dvh",
    },
    registerContent: {
      marginTop: "10px",
      maxWidth: width > 768 ? "448.8px" : "100%",
      minHeight: width > 768 ? "500px" : "100%",
      border: width > 768 ? "1px solid #8C8C8C" : "none",
      borderRadius: width > 768 ? "12px" : "none",
      // boxShadow:
      //   width > 768 ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "none",
      px: "15px",
      py: "25px",
      backgroundColor: width > 768 ? "#121212" : null,
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "center",
    },
    formWrapper: {
      paddingTop: "0px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignContent: "space-between",
      flexDirection: "column",
    },
    heading: {
      fontSize: "24px",
      fontWeight: 600,
    },
    label: {
      fontSize: "12px",
      fontWeight: 400,
      color: "#f5f4f4",
      py: "6px",
      px: "6px",
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
      backgroundColor: "#1472b8",
      padding: "6px 16px",
      color: "#fff",
      borderRadius: "4px",
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "uppercase",
      "&:hover": {
        background: "#1472b8",
      },
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
    <Box sx={styles.registerWrap}>
      <Box sx={styles.registerContent}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={LogoPlusImg}
              alt="Logo"
              style={{ width: width > 768 ? "170px" : "170px" }}
            />
          </Box>
        </Box>
        <Box sx={{ pt: 2, textAlign: "center" }}>
          <Typography component="h2" sx={styles.heading}>
            Enter Your business information
          </Typography>
          <Typography component="h4" sx={styles.label}>
            Enter Your business information to register Your domain.
          </Typography>

          <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
            <Box>
              <RHFTextField
                formik={formik}
                name="streetAddress"
                type="text"
                placeholder="street address"
                controlSx={{ pt: 2 }}
              />
              <RHFTextField
                formik={formik}
                name="streetAddressLine2"
                type="text"
                placeholder="street address Line 2"
                controlSx={{ pt: 2 }}
              />
              <RHFTextField
                formik={formik}
                name="LocalGovernmentArea"
                type="text"
                placeholder="Local government area"
                controlSx={{ pt: 2 }}
              />
              <RHFTextField
                formik={formik}
                name="city"
                type="text"
                placeholder="city"
                controlSx={{ pt: 2 }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  pt: 2,
                }}
              >
                {/* Login Button */}
                <Button sx={styles.button} type="submit">
                  next
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", pt: 2 }}>
        <Typography component="p" sx={styles.desc}>
          Enter the AI realm with us, or join us with your login
        </Typography>
      </Box>
    </Box>
  );
};

export default BusinessInformation;
