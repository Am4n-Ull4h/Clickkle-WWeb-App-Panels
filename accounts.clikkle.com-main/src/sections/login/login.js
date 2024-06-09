import React from "react";
import { Box, Button, InputAdornment, Typography } from "@mui/material";
import LogoImg from "../../assets/logo.png";
import RHFTextField from "../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import RHFCheckbox from "../../components/rhf-checkbox";
import { Link } from "react-router-dom";

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().required("Required Field"),
    password: Yup.string()
      .required("Required Field")
      .min(8, "Password must be at least 8 characters")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box sx={styles.loginWrap}>
      <Box sx={styles.loginContent}>
        <Box sx={{ textAlign: "center" }}>
          <img src={LogoImg} alt="Logo" style={{ width: "8%" }} />
        </Box>
        <Box sx={{ pt: 2, textAlign: "center" }}>
          <Typography component="h2" sx={styles.heading}>
            Log In
          </Typography>
          <Typography component="h4" sx={styles.label}>
            Use your Clikkle Account Abc
          </Typography>
          <form style={styles.formWrapper} onSubmit={formik.handleSubmit}>
            <Box>
              <RHFTextField
                formik={formik}
                name="email"
                placeholder="Enter Email"
                inputPorps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography sx={styles.emailInputAdornment}>@clikkmail.com</Typography>
                    </InputAdornment>
                  ),
                }}
              />
              <RHFTextField formik={formik} name="password" type="password" placeholder="Enter Password" controlSx={{ pt: 5 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 2 }}>
                <RHFCheckbox label="Show Password" />
                <Typography component="h2" sx={styles.forgotPassword}>
                  Forgot Password?
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 2.8 }}>
                <Link to="/register" style={styles.register}>
                  Create an account
                </Link>
                <Button type="submit" sx={styles.button}>
                  Login
                </Button>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center", pt: 5 }}>
              <Typography component="p" sx={styles.desc}>
                Enter the AI realm with us, or join us with your login
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

const styles = {
  loginWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
    minHeight: "100vh",
  },
  loginContent: {
    width: "100%",
    maxWidth: "450px",
    border: "1px solid #8C8C8C",
    borderRadius: "12px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    px: "35px",
    py: "35px",
    backgroundColor: "#1E1E1E",
  },
  formWrapper: {
    paddingTop: "50px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "space-between",
    height: "380px",
    flexDirection: "column",
  },
  heading: {
    fontSize: "32px",
    fontWeight: 600,
  },
  label: {
    fontSize: "18px",
    fontWeight: 400,
    color: "#f5f4f4",
    pt: 0.3,
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
    pt: 0.3,
  },
};
