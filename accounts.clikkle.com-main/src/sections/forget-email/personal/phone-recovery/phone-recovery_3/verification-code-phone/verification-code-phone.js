import React from "react";
import { Box, Button, InputAdornment, Typography } from "@mui/material";
import LogoImg from "../../../../../../assets/logo.png";
import RHFTextField from "../../../../../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useWidth from "../../../../../../hooks/useSize";

const VerificationCode = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    text: Yup.string().required("Name is required"),
  });

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/create-password");
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
    labelMuted: {
      fontSize: "16px",
      fontWeight: 400,
      fontStyle: "italic",
      textAlign: "left",
      color: "#605f5f",
      py: 1,
    },
    textInputAdornment: {
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
            Get a Verification Code
          </Typography>
          <Typography component="h4" sx={styles.label}>
            To verify its really you, Clikkle want to send you a verification
            code
          </Typography>
        </Box>
        <Box sx={{ py: 5, textAlign: "center" }}>
          <Typography
            component="h4"
            sx={styles.label}
            style={{ marginBottom: "7px" }}
          >
            Get a verification code
          </Typography>
          <Box
            style={{
              margin: "0 auto",
            }}
          >
            <Typography component="h4" sx={styles.label}>
              Clikkle will send a verification code to{" "}
              <span>060 284 42718</span>
            </Typography>
            <Box style={{ marginLeft: "5%" }}>
              <Typography component="h5" sx={styles.labelMuted}>
                Standard rates apply
              </Typography>
            </Box>
          </Box>
        </Box>
        <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Button type="submit" sx={styles.button}>
                Next
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Typography component="p" sx={styles.desc}>
          Enter the AI realm with us, or join us with your login
        </Typography>
      </Box>
    </Box>
  );
};

export default VerificationCode;
