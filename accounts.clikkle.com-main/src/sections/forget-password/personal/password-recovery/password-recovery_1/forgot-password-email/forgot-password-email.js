import React, { useState, useEffect } from "react";
import { Box, Button, Avatar, Typography } from "@mui/material";
import LogoImg from "../../../../../../assets/logo.png";
import RHFTextField from "../../../../../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import RHFCheckbox from "../../../../../../components/rhf-checkbox";
import useWidth from "../../../../../../hooks/useSize";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgotPasswordEmail = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/forgot-password-mailapp-2");
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
    },
    loginContent: {
      marginTop: "10px",
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
      justifyContent: "center",
    },
    formWrapper: {
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
    buttonTransparent: {
      color: "#1472b8",
      fontSize: width > 768 ? "16px" : "10px",
      fontWeight: 600,
      textTransform: "capitalize",
    },
    desc: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#7e7878",
      pt: 3,
      px: 2,
    },
    avatarWrapper: {
      display: "flex",
      alignItems: "center",

      gap: "10px",
    },
  };
  return (
    <Box sx={styles.loginWrap}>
      <Box sx={styles.loginContent}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={LogoImg}
              alt="Logo"
              style={{ width: width > 768 ? "8%" : "12%" }}
            />
          </Box>
        </Box>
        <Box sx={{ pt: 2, textAlign: "center" }}>
          <Typography component="h2" sx={styles.heading}>
            Account Recovery
          </Typography>
          <Typography component="h4" sx={styles.label}>
            To ensure the safety of your account, Clikkle wants to verify that
            it's really you
          </Typography>
          <Box
            sx={styles.avatarWrapper}
            style={{
              border: "1px solid #1472b8",
              borderRadius: "12px",
              padding: "6px",
              width: "fit-content",
              margin: "20px auto 0 auto",
            }}
          >
            <Avatar
              style={{
                backgroundColor: "#1472b8",
                width: "20px",
                height: "20px",
              }}
            >
              A
            </Avatar>
            <Box>
              {/* Your email */}
              <Typography
                component="p"
                sx={styles.label}
                style={{
                  fontSize: "14px",
                }}
              >
                yourname @ clikkmail.com
              </Typography>
            </Box>
          </Box>

          <Typography
            component="h4"
            sx={styles.label}
            style={{ margin: "20px 0" }}
          >
            Confirm the email you registered with *****@clikkmail.com
          </Typography>
          <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
            <Box>
              <RHFTextField
                formik={formik}
                name="email"
                type={"text"}
                placeholder="Enter Email Address"
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  pt: 2.8,
                }}
              >
                <Link
                  to="/account-recovery-forgot-password"
                  sx={styles.buttonTransparent}
                  style={{
                    textDecoration: "none",
                    color: "#1472b8",
                    padding: "6px 16px",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    "&:hover": {
                      background: "#1472b8",
                    },
                  }}
                >
                  Try Another Method
                </Link>
                <Button sx={styles.button} type="submit">
                  Next
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography component="p" sx={styles.desc}>
          Enter the AI realm with us, or join us with your login
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPasswordEmail;
