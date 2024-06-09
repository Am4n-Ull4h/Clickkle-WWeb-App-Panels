import React, { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Avatar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import LogoImg from "../../../../../assets/logo.png";
import RHFTextField from "../../../../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import RHFCheckbox from "../../../../../components/rhf-checkbox";
import { Link } from "react-router-dom";
import useWidth from "../../../../../hooks/useSize";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const localStorageData = JSON.parse(localStorage.getItem("formData"));
  const [isShowPassword, setIsShowPassword] = useState(false);

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
    password: Yup.string().required("Required Field"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      // Create FormData object and append email field
      var formData = new FormData();
      formData.append("password", values.password);
      formData.append("email", localStorageData?.email + "@clikkmail.com");
      pushToServer(formData);
      //getAllUsers();
      action.resetForm();
    },
  });

  /*const getAllUsers = async () => {

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/get_all_users",
        {
          method: "GET"
        },
        
      );

      if (response.ok) {
        console.log('all users found')
      } else {
        console.log('all users not found')
      }
    } catch (error) {
      console.error("Error:", error);
    }

  };*/


  const pushToServer = async (formData) => {
    try {
      const response = await fetch(
        "https://accounts.clikkle.com:5000/api/auth/login",
        // "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          body: formData,
        },

      );

      const responseData = await response.json();
      const { user } = responseData;
      // setBrowserCookie('loggedInUserEmail', user.email);
      console.log("responseData",responseData)
      if (responseData.success) {
        if (redirectto && redirectto !== '') {
          // console.log('redirect',redirectto)
          clearBrowserCookie('redirectto');

          // window.location.replace('https://localhost:3001/dashboard');
          return window.location.replace(redirectto + "?userId=" + user._id);

        }  else {
          // navigate("/");
          // window.location.replace('https://apps.clikkle.com/' + "?userId=" + user._id);
          // window.location.replace('http://localhost:3001.' + "?userId=" + "664638e8a685374c56d03a8c");
          window.location.replace('http://localhost:3001/' + "?userId=" + user._id);
        }
        // else if (user.role === 'admin') {
        //   return window.location.replace('https://admin.clikkle.com/' + "?userId=" + user._id)

        // }
        // const redirectto = getBrowserCookie('redirectto');

      } else {
        // setErrorMessage(responseData.error);
        toast.error(responseData.error);
        console.error(responseData.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const setBrowserCookie = async (cname, cvalue, expires = 24 * 60 * 60, path = "/") => {
    let cookie = `${cname}=${cvalue};`;
    if (expires) {
      const d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      cookie += `expires=${d.toUTCString()};`;
    }
    if (path) {
      cookie += `path=${path};`;
    }
    document.cookie = cookie;
  };

  const getBrowserCookie = async (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const clearBrowserCookie = async (cname, path = "/") => {
    let cookie = `${cname}=;`;
    const d = new Date();
    d.setTime(d.getTime() - 50 * 1000);
    cookie += `expires=${d.toUTCString()};`;
    cookie += `path=${path};`;
    document.cookie = cookie;
  };

  const styles = {
    loginWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "#fff",
      height: "100dvh",
      paddingLeft: "8px",
      paddingRight: "8px",
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
      textDecoration: "none",
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
      py: 1,
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
            className="mx-auto "
              src={LogoImg}
              alt="Logo"
              style={{ width: width > 768 ? "8%" : "12%" }}
            />
          </Box>
        </Box>
        <Box sx={{ pt: 2, textAlign: "center" }}>
          <Typography component="h2" sx={styles.heading}>
            Log In
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
                fontSize: "15px",
                fontWeight: 600,
                height: "30px",
                width: "30px",
              }}
            >
              {localStorageData?.email.slice(0, 2).toUpperCase()}
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
                {localStorageData?.email} @ clikkmail.com
              </Typography>
            </Box>
          </Box>
          <form style={styles.formWrapper} onSubmit={formik.handleSubmit}>
            <Box>
              <RHFTextField
                formik={formik}
                name="password"
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter Password"
                controlSx={{ pt: 1.5 }}
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
                <RHFCheckbox
                  label="Show Password"
                  handleChange={() => setIsShowPassword(!isShowPassword)}
                />
                <Link
                  to="/account-recovery-forgot-password"
                  style={styles.forgotPassword}
                >
                  Forgot Password?
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
                      style={{ textDecoration: "none", color: "#fff" }}
                      to="/register"
                      rel="noopener"
                    >
                      <MenuItem onClick={handleClose}>Personal</MenuItem>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "#fff" }}
                      to="/register"
                      rel="noopener"
                    >
                      <MenuItem onClick={handleClose}>Business</MenuItem>
                    </Link>
                  </Menu>
                </div>
                <Button type="submit" sx={styles.button}>
                  Login
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
