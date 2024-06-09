import React, { useState } from "react";
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

const DomainYes = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    domain: Yup.string().required("Required Field"),
  });

  const formik = useFormik({
    initialValues: {
      domain: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/business-information");
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
      height: width > 768 ? "500px" : "100%",
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
      fontSize: "12px",
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
              What's Your business's domain name?
            </Typography>
            <Typography component="h4" sx={styles.label}>
              Enter your business's domain name.
              <br />
              You'll use it to set up custom email addresses, like info @
              example.com. We'll walk you through verifying that your business
              owns this domain later.
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
                <RHFTextField
                  formik={formik}
                  name="domain"
                  type="text"
                  variant="outlined"
                  placeholder="Your Domain Name Here"
                  style={{
                    color: "white",
                    borderRadius: "10px",
                    border: "1px solid #8C8C8C",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  pt: 2.8,
                }}
              >
                <Button sx={styles.button} type="submit">
                  next
                </Button>
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

export default DomainYes;
