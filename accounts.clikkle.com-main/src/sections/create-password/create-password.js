import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LogoImg from "../../assets/logo.png";
import RHFTextField from "../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import RHFCheckbox from "../../components/rhf-checkbox";

const CreatePassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
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
  return (
    <Box sx={styles.loginWrap}>
      <Box sx={styles.loginContent}>
        <Box sx={{ textAlign: "center" }}>
          <img src={LogoImg} alt="Logo" style={{ width: "8%" }} />
        </Box>
        <Box sx={{ pt: 2, textAlign: "center" }}>
          <Typography component="h2" sx={styles.heading}>
            Create Password
          </Typography>
          <Typography component="h4" sx={styles.label}>
            Use your Clikkle Account
          </Typography>
          <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
            <Box>
              <RHFTextField
                formik={formik}
                name="password"
                type={isShowPassword ? "password" : "text"}
                placeholder="Enter Password"
              />
              <RHFTextField
                formik={formik}
                name="confirmPassword"
                type={isShowPassword ? "password" : "text"}
                placeholder="Confirm Password"
                controlSx={{ pt: 5 }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  pt: 2,
                }}
              >
                <RHFCheckbox
                  label="Show Password"
                  handleChange={() => setIsShowPassword(!isShowPassword)}
                />
              </Box>

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

export default CreatePassword;

const styles = {
  loginWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
    height: "100vh",
  },
  loginContent: {
    width: "100%",
    maxWidth: "450px",
    border: "1px solid #8C8C8C",
    borderRadius: "12px",
    //boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
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
