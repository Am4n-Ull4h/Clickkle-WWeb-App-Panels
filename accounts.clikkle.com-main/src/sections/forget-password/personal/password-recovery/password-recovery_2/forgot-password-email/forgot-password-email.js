import React, { useState, useEffect } from "react";
import { Box, Button, Avatar, Typography } from "@mui/material";
import LogoImg from "../../../../../../assets/logo.png";
import RHFTextField from "../../../../../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import RHFCheckbox from "../../../../../../components/rhf-checkbox";
import useWidth from "../../../../../../hooks/useSize";
import { useNavigate } from "react-router-dom";

const ForgotPasswordEmail = () => {
  const width = useWidth();
  const navigate = useNavigate();
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(10 + Math.random() * 90)
  );
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          setIsResendDisabled(false);
        }
        return prevTimer > 0 ? prevTimer - 1 : prevTimer;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleResendCode = () => {
    setTimer(30);
    setIsResendDisabled(true);
  };

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
      paddingTop: "50px",
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
            component="h2"
            sx={styles.heading}
            style={{ margin: "25px 0" }}
          >
            {randomNumber}
          </Typography>
          <Box style={{ textAlign: "center" }}>
            <Typography component="h4" sx={styles.label}>
              Open your Clikkle Mail on your device
            </Typography>
            <Typography component="h4" sx={styles.label}>
              Clikkle sent a notification to your device.
              <br />
              Open the Clikkle Mail app, tap Yes on the prompt, then tap{" "}
              {randomNumber} on your phone to verify it's you.
            </Typography>
          </Box>
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
