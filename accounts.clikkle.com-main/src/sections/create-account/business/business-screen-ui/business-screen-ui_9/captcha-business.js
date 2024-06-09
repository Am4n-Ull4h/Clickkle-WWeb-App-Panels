import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Box, Button, Typography } from "@mui/material";
import LogoImg from "../../../../../assets/logo.png";
import LogoPlusImg from "../../../../../assets/CLIKKLE PLUS LOGO.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import RHFCheckbox from "../../../../../components/rhf-checkbox";
import RHFPhoneInput from "../../../../../components/rhf-phone-number";
import useWidth from "../../../../../hooks/useSize";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RHFTextField from "../../../../../components/rhf-textField";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaBusiness = () => {
  const [checked, setChecked] = useState(false);
  const width = useWidth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed")
      .min(2)
      .max(25)
      .required("Required Field"),
    lastName: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed")
      .min(2)
      .max(25)
      .required("Required Field"),
    number: Yup.string().required("Required Field"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/domain");
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
      padding: "0px 8px",
    },
    loginContent: {
      maxWidth: width > 768 ? "448.8px" : "100%",
      minHeight: width > 768 ? "500px" : "100%",
      border: width > 768 ? "1px solid #8C8C8C" : "none",
      borderRadius: width > 768 ? "12px" : "none",
      // boxShadow:
      //   width > 768 ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "none",
      px: "35px",
      py: "30px",
      backgroundColor: "#121212",
      display: "flex",
      flexDirection: "column",
      justifyContent: width > 768 ? "flex-start" : "space-between",
      gap: "20px",
    },
    formWrapper: {
      paddingTop: "10px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignContent: "space-between",
      flexDirection: "column",
    },
    heading: {
      fontSize: "14px",
      fontWeight: 500,
    },
    heading1: {
      fontSize: "16px",
    },
    label: {
      border: "1px solid white",
      display: width > 460 ? "flex" : "",
      py: "10px",
      py: "20px",
      px: "10px",
      borderRadius: "6px",
      gap: "110px",
      marginTop: width > 570 ? "1.5rem" : "3px",
      backgroundColor: "#242424",
    },

    desc: {
      //   fontSize: "16px",
      fontWeight: 600,
      color: "#7e7878",
      py: 1,
      px: 2,
    },
    button: {
      textDecoration: "none",
      backgroundColor: "#1472b8",
      padding: "10px 20px",
      color: "#fff",
      borderRadius: "4px",
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "capitalize",
      float: "left",

      "&:hover": {
        background: "#1472b8",
      },
    },
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search term:", searchTerm);
  };
  function onChange(value) {
    console.log("Captcha value:", value);
    setChecked(true);
  }
  return (
    <Box sx={styles.loginWrap}>
      <Box sx={styles.loginContent}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <img src={LogoPlusImg} alt="Logo" style={{ width: "170px" }} />
          </Box>
        </Box>
        <Box>
          <Box sx={{}}>
            <Box style={{ textAlign: "center" }}>
              <Box component="h2" sx={styles.heading}>
                We know You're probably not a robot,but we just have to ask:
              </Box>
            </Box>
            <Box
              component="h2"
              sx={styles.heading}
              style={{ textAlign: "center" }}
            >
              Are You a robot?
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px 0px",
              }}
            >
              <ReCAPTCHA
                sitekey="6Lc3x48pAAAAADWIdEO9w4Pi3XZhC_F0ci2yI5rX"
                onChange={onChange}
                theme="dark"
              />
            </Box>

            <form onSubmit={handleSubmit} style={styles.formWrapper}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "25px",
                }}
              >
                {/* Login Button */}

                <Box>
                  <Typography
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    By clicking Agree and continue, you agree to the
                    <span style={{ color: "#1470b6", textDecoration: "none" }}>
                      {" "}
                      Clikkle Plus Agreement Terms of Service{" "}
                    </span>
                    and
                    <span style={{ color: "#1470b6", textDecoration: "none" }}>
                      {" "}
                      Supplemental Terms and condition for Clikkle Plus Free
                      Trial Agreement.
                    </span>
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                  padding: "6px 16px",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={styles.button}
                  disabled={!checked}
                >
                  Agree and Continue
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
        <Box style={{ textAlign: "center", marginTop: "auto" }}>
          <Typography component="p" sx={styles.desc}>
            Enter the AI realm with us, or join us with your login
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CaptchaBusiness;
