import React from "react";
import {
  Box,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";

import LogoPlusImg from "../../../../../assets/CLIKKLE PLUS LOGO.png";
import RHFTextField from "../../../../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useWidth from "../../../../../hooks/useSize";

const SignInDetails = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string()
      .matches(/^[a-zA-Z0-9\s]+$/, "Only alphabets are allowed")
      .min(2)
      .max(25)
      .required("Required Field"),
    password: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed")
      .min(2)
      .max(25)
      .required("Required Field"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/captcha-business");
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
      // py: "25px",
      backgroundColor: width > 768 ? "#121212" : null,
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
      fontSize: "12px",
      fontWeight: 400,
      color: "#f5f4f4",
      py: "3px",
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
          <Box sx={{ textAlign: "center", paddingTop: "5px" }}>
            <img
              src={LogoPlusImg}
              alt="Logo"
              style={{ width: width > 768 ? "170px" : "170px" }}
            />
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography component="h2" sx={styles.heading}>
            How you'll sign in
          </Typography>
          <Typography component="h4" sx={styles.label}>
            You'll use your username to sign into your Clikkle Plus account and
            create your business email address
          </Typography>

          <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
            <Box>
              <Box>
                <RHFTextField
                  formik={formik}
                  variant="outlined"
                  name="username"
                  type="text"
                  placeholder="Username"
                  inputProps={{ maxLength: 64 }}
                  sx={{
                    border: "1px solid #8C8C8C",
                    borderRadius: "12px",
                  }}
                />
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "0 10px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    style={{
                      color: "#605f5f",
                      fontSize: "12px",
                    }}
                  >
                    {formik.values.username ? formik.values.username.length : 0}
                    /64
                  </Typography>
                </Box>
              </Box>
              <Box>
                <RHFTextField
                  formik={formik}
                  variant="outlined"
                  name="password"
                  type="text"
                  placeholder="Password"
                  controlSx={{ pt: 1 }}
                  inputProps={{ maxLength: 100 }}
                  sx={{ border: "1px solid #8C8C8C", borderRadius: "12px" }}
                />
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "0 10px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    style={{ color: "#605f5f", fontSize: "12px" }}
                  >
                    {formik.values.password ? formik.values.password.length : 0}
                    /100
                  </Typography>
                </Box>
              </Box>
              {/* legend fieldset */}
              <fieldset
                style={{
                  border: "2px solid #605f5f",
                  borderRadius: "12px",
                  margin: 0,
                  padding: 0,
                }}
              >
                <legend
                  style={{
                    textAlign: "left",
                    margin: "0 30px 10px 30px",
                    color: "#605f5f",
                    fontSize: "14px",
                    fontWeight: 600,
                    padding: "0 5px",
                  }}
                >
                  Discover Clikkle Plus
                </legend>
                <FormGroup sx={{ padding: "0 20px", color: "#605f5f" }}>
                  <FormControlLabel
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    control={<Checkbox style={{ color: "#605f5f" }} />}
                    label={
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "11px",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        Get Tips update offers and opportunities to share
                        feedback
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox style={{ color: "#605f5f" }} />}
                    label={
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "11px",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        Educate your users
                      </Typography>
                    }
                  />
                </FormGroup>
              </fieldset>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  pt: 2,
                }}
              >
                {/* Login Button */}
                <Button
                  type="submit"
                  variant="contained"
                  sx={styles.button}
                  disabled={!formik.isValid}
                >
                  next
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
        <Box sx={{ textAlign: "center", pt: 1 }}>
          <Typography component="p" sx={styles.desc}>
            Enter the AI realm with us, or join us with your login
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInDetails;
