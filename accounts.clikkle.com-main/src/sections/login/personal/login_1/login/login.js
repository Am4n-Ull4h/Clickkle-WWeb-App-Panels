import React, { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import LogoImg from "../../../../../assets/logo.png";
import RHFTextField from "../../../../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import useWidth from "../../../../../hooks/useSize";
import { toast } from "react-toastify";

const Login = () => {
  const width = useWidth();
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search)
  const redirectto = queryParameters.get("redirectto")
  const [anchorElCreate, setAnchorElCreate] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateClick = (event) => {
    setAnchorElCreate(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElCreate(null);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[a-zA-Z0-9]+$/, "Only numbers & alphabets are allowed")
      .min(2)
      .max(10)
      .required("Required Field"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      // Create FormData object and append email field
      var formData = new FormData();
      formData.append("email", values.email + "@clikkmail.com");

      //formData.append("password", values.password);
      pushToServer(formData);
      // Reset the form and navigate after submission
      localStorage.setItem("formData", JSON.stringify(values));
      action.resetForm();
      // navigate("/login_2");
    },
  });
  const pushToServer = async (formData) => {
    try {
      const response = await fetch(
        "https://accounts.clikkle.com:5000/api/auth/login_email",
        // "http://localhost:5000/api/auth/login_email",
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
        redirectto && redirectto !=='' ? navigate("/login_2"+"?redirectto="+ redirectto) : navigate("/login_2");
      } else {
        // setErrorMessage(responseData.error);
        toast.error(responseData.error);
        console.error(responseData.error);
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
      textDecoration: "none",
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
          <img
          className=" mx-auto"
            src={LogoImg}
            alt="Logo"
            style={{ width: width > 768 ? "8%" : "12%" }}
          />
        </Box>
        <Box sx={{ pt: 2, textAlign: "center" }}>
          <Typography component="h2" sx={styles.heading}>
            Log In
          </Typography>
          <Typography component="h4" sx={styles.label}>
            Use your Clikkle Account
          </Typography>
          <form style={styles.formWrapper} onSubmit={formik.handleSubmit}>
            <Box>
              <RHFTextField
                formik={formik}
                name="email"
                placeholder="Enter Email"
                type="text"
                inputPorps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography sx={styles.emailInputAdornment}>
                        @clikkmail.com
                      </Typography>
                    </InputAdornment>
                  ),
                }}
              />
              <span style={{ color: "red" }}>{errorMessage}</span>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pt: 2,
                }}
              >
                <Link to="/forgot-mail-email" style={styles.forgotPassword}>
                  Forgot Mail?
                </Link>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pt: 2.8,
                }}
              >
                <div>
                  <Button
                    aria-controls="create-menu"
                    aria-haspopup="true"
                    onClick={handleCreateClick}
                    variant="text"
                    style={styles.register}
                  >
                    Create Account
                  </Button>
                  <Menu
                    id="create-menu"
                    anchorEl={anchorElCreate}
                    open={Boolean(anchorElCreate)}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                  >
                    {/* Create Account Menu Items */}
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                      }}
                      to="/register"
                      rel="noopener"
                    >
                      <MenuItem onClick={handleClose}>Personal</MenuItem>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "#fff" }}
                      to="/register-business"
                      rel="noopener"
                    >
                      <MenuItem onClick={handleClose}>Business</MenuItem>
                    </Link>
                  </Menu>
                </div>

                {/* Login Button */}
                <Button type="submit" sx={styles.button}>
                  next
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

export default Login;
