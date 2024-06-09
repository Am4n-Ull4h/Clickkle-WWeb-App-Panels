import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LogoImg from "../../assets/logo.png";
import RHFTextField from "../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required Field"),
    lastName: Yup.string().required("Required Field"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        navigate('/personal-details')
    },
  });

  return (
    <Box sx={styles.registerWrap}>
      <Box sx={styles.registerContent}>
        <Box sx={{ textAlign: "center" }}>
          <img src={LogoImg} alt="Logo" style={{ width: "8%" }} />
        </Box>
        <Box sx={{ pt: 2, textAlign: "center" }}>
          <Typography component="h2" sx={styles.heading}>
            Create A Clikkle Account
          </Typography>
          <Typography component="h4" sx={styles.label}>
            Enter your name
          </Typography>

          <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
            <Box>
              <RHFTextField formik={formik} name="firstName" type="text" placeholder="First Name" />
              <RHFTextField formik={formik} name="lastName" type="text" placeholder="Last Name" controlSx={{ pt: 5 }} />

              <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", pt: 2.8 }}>
                <Button type="submit" sx={styles.button}>
                  Next
                </Button>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center", pt: 7 }}>
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

export default Register;

const styles = {
  registerWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
    height: "100vh",
  },
  registerContent: {
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
    fontSize: "26px",
    fontWeight: 600,
  },
  label: {
    fontSize: "17px",
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
