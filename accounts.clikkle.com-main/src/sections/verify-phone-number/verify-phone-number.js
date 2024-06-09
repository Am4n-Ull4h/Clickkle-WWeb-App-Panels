import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LogoImg from "../../assets/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import RHFCheckbox from "../../components/rhf-checkbox";
import RHFPhoneInput from "../../components/rhf-phone-number";
import useWidth from "../../hooks/useSize";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VerifyPhoneNumber = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    number: Yup.string()
      .required("Number is required")
      .matches(/^\d+$/, "Number must contain only digits")
      .min(10, "Number must be at least 10 characters long")
      .max(15, "Number cannot exceed 15 characters"),
  });

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/forgot-password-phone-2");
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
      justifyContent: "center",
    },
    formWrapper: {
      paddingTop: "30px",
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
              src={LogoImg}
              alt="Logo"
              style={{ width: width > 768 ? "8%" : "12%" }}
            />
          </Box>
        </Box>
        <Box onSubmit={formik.handleSubmit} style={styles.formWrapper}>
          <Box>
            <Typography component="h2" sx={styles.heading}>
              Create Password
            </Typography>
            <Typography component="h4" sx={styles.label}>
              Use your Clikkle Account
            </Typography>

            <Box sx={{ pt: 5, width: "100%" }}>
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  pt: 2.8,
                }}
              >
                {/* Login Button */}
                <Button type="submit" sx={styles.button}>
                  next
                </Button>
              </Box>
            </Box>
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

export default VerifyPhoneNumber;
