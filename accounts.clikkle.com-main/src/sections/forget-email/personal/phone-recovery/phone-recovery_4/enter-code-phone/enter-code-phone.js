import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import LogoImg from "../../../../../../assets/logo.png";
import RHFTextField from "../../../../../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import RHFCheckbox from "../../../../../../components/rhf-checkbox";
import useWidth from "../../../../../../hooks/useSize";
import { Link, useNavigate } from "react-router-dom";
const EnterCode = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const [timer, setTimer] = useState(30); // Initial timer value in seconds
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  // Decrease timer every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          setIsResendDisabled(false); // Enable resend button when timer reaches 1 second
          setIsSubmitDisabled(true);
        }
        return prevTimer > 0 ? prevTimer - 1 : prevTimer;
      });
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Event handler for Resend Code button
  const handleResendCode = () => {
    setTimer(30); // Reset timer
    setIsResendDisabled(true); // Disable resend button
    setIsSubmitDisabled(false);
    // Here you can trigger the resend action if needed
  };

  const validationSchema = Yup.object({
    number: Yup.string()
      .required("Number is required")
      .matches(/^\d+$/, "Number must contain only digits")
      .min(6, "Number must be at least 6 characters long")
      .max(6, "Number cannot exceed 6 characters"),
  });

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/select-account-phone");
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
      paddingTop: width > 1024 ? "45px" : "30px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignContent: "space-between",
      flexDirection: "column",
    },
    heading: {
      fontSize: width > 768 ? "24px" : "22px",
      fontWeight: 600,
    },
    label: {
      fontSize: width > 375 ? "16px" : "14px",
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
      pt: 3,
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
        <Box sx={{ pt: 2, textAlign: "center" }}>
          <Typography component="h2" sx={styles.heading}>
            Enter The Code
          </Typography>
          <Typography component="h4" sx={styles.label}>
            To Verify, Clikkle want to make sure it really you
          </Typography>
          <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <Typography component="h4" sx={styles.label}>
                  A text message with verification code was send to{" "}
                  <span>060 284 42718</span>
                </Typography>
                <RHFTextField
                  formik={formik}
                  name="number"
                  type="text"
                  placeholder="Enter Code"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pt: 2,
                }}
              >
                <Button
                  onClick={handleResendCode}
                  disabled={isResendDisabled}
                  sx={styles.forgotPassword}
                >
                  Resend Code
                </Button>
                <Typography component="h2" sx={styles.forgotPassword}>
                  00:{timer < 10 ? `0${timer}` : timer}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  pt: width > 1024 ? 4.5 : 3,
                }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitDisabled}
                  sx={styles.button}
                >
                  Verify
                </Button>
              </Box>
            </Box>
          </form>
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

export default EnterCode;
