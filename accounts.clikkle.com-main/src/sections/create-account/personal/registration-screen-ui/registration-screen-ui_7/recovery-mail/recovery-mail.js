import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import LogoImg from "../../../../../../assets/logo.png";
import RHFTextField from "../../../../../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import RHFCheckbox from "../../../../../../components/rhf-checkbox";
import useWidth from "../../../../../../hooks/useSize";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RecoveryMail = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("Number is required")
      .matches(/^\d+$/, "Number must contain only digits")
      .min(10, "Number must be at least 10 characters long")
      .max(10, "Number cannot exceed 10 characters"),
  });

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      const user = JSON.parse(localStorage.getItem("user"));
      const email = user.user.email
      var formData = new FormData();
      formData.append("phoneNumber", values.number);
      formData.append("email", email);
      updatePhoneNumber(formData)
      
    },
  });
  const updatePhoneNumber = async (formData) => {
    // console.log('process.env',process.env)
    try {
      const response = await fetch(
        // "http://localhost:5000/api/auth/add_phone",
        // "http://clicklewebapp.medtronix.world/api/auth/email",
        "https://accounts.clikkle.com:5000/api/auth/add_phone",
        {
          method: "POST",
          body: formData,
        }
      );

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      const responseData = await response.json();
      if (responseData.success) {
        // console.log('registered', responseData)
        localStorage.setItem("user", JSON.stringify(responseData));
        navigate("/review-info");
        //navigate("/login_2");
      } else {
        //setErrorMessage(responseData.message);
        console.error(responseData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
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
      fontSize: width > 376 ? "24px" : "22px",
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
            Add Recovery Phone Number
          </Typography>
          <Typography component="h4" sx={styles.label}>
            Clikkle will contact you with this Phone if we notice unusual
            activities or you get locked out
          </Typography>
          <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
            <Box>
              <RHFTextField
                formik={formik}
                name="number"
                type="text"
                placeholder="Recovery Phone Number"
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  pt: 2,
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pt: 2,
                }}
              ></Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  pt: 2.8,
                }}
              >
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

export default RecoveryMail;
