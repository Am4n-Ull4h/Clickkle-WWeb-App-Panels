import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LogoImg from "../../assets/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import RHFCheckbox from "../../components/rhf-checkbox";
import RHFPhoneInput from "../../components/rhf-phone-number";
import useWidth from "../../hooks/useSize";

const ForgotPassword = () => {
  const width = useWidth();
  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
      maxWidth: width > 768 ? "450px" : "50%",
      border: "1px solid #8C8C8C",
      borderRadius: "12px",
      //boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      px: "35px",
      py: "35px",
      backgroundColor: "#121212",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
      pt: 3,
    },
  };
  return (
    <Box sx={styles.loginWrap}>
      <Box sx={styles.loginContent}>
        {/* Logo */}
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
          {/* Heading */}
          <Typography component="h2" sx={styles.heading}>
            Create Password
          </Typography>
          <Typography component="h4" sx={styles.label}>
            Use your Clikkle Account
          </Typography>

          <Box sx={{ pt: 5, width: "100%" }}>
            {/* Email field */}
            <RHFPhoneInput
              formik={formik}
              name="password"
              type="password"
              placeholder="Enter Password"
              style={{
                color: "white",
                borderRadius: "10px",
                border: "1px solid #8C8C8C",
              }}
            />

            {/* Remember me & Forgot Password */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                pt: 2,
              }}
            >
              <RHFCheckbox label="Show Password" />
            </Box>

            {/* Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                pt: 2.8,
              }}
            >
              <Button type="submit" sx={styles.button}>
                Next
              </Button>
            </Box>

            {/* description */}
          </Box>
        </Box>
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Typography component="p" sx={styles.desc}>
          Enter the AI realm with us, or join us with your login
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
