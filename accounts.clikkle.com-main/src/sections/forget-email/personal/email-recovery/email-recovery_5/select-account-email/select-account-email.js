import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import LogoImg from "../../../../../../assets/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import useWidth from "../../../../../../hooks/useSize";

const SelectAccount = () => {
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
            Select an Account to Sign In
          </Typography>
          <Box
            style={{
              padding: " 60px 0px",
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box sx={styles.avatarWrapper}>
              <Avatar
                style={{ backgroundColor: "#1472b8", marginBottom: "10px" }}
              >
                A
              </Avatar>
              <Box>
                {/* Your Name */}
                <Typography
                  component="p"
                  sx={styles.label}
                  style={{
                    textAlign: "left",
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "10px",
                  }}
                >
                  Your Name
                </Typography>
                {/* Your email */}
                <Typography component="p" sx={styles.label}>
                  yourname @ clikkmail.com
                </Typography>
              </Box>
            </Box>
            <Box sx={styles.avatarWrapper}>
              <Avatar></Avatar>
              <Box>
                {/* Your Name */}
                <Typography
                  component="p"
                  sx={styles.label}
                  style={{
                    textAlign: "left",
                    fontSize: "22px",
                    fontWeight: 600,
                  }}
                >
                  Use An other Account
                </Typography>
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

export default SelectAccount;
