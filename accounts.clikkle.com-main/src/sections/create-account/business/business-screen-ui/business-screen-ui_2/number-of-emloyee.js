import React, { useState } from "react";
import { CgCheck } from "react-icons/cg";
import {
  Box,
  Select,
  MenuItem,
  Typography,
  TextField,
  ListItem,
  ListItemText,
  List,
  Button,
  RadioGroup,
  FormControlLabel,
  ListItemIcon,
  Radio,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";

import LogoImg from "../../../../../assets/logo.png";
import LogoPlusImg from "../../../../../assets/CLIKKLE PLUS LOGO.png";
import videoLogo from "../../../../../assets/videoLogo.png";
import icon from "../../../../../assets/icon.png";
import singleDm from "../../../../../assets/single DM.png";
import RHFTextField from "../../../../../components/rhf-textField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useWidth from "../../../../../hooks/useSize";
import RHFSelect from "../../../../../components/rhf-select";

const BusinessDetail = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const [region, setRegion] = useState("Region");
  const [selectedOption, setSelectedOption] = useState(false);

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);
  };

  const regionArray = [
    "Africa",
    "Asia",
    "Central America",
    "Europe",
    "Middle East",
    "North America",
    "Pacific",
    "South America",
  ];
  const validationSchema = Yup.object({
    businessName: Yup.string()
      .matches(/^[a-zA-Z0-9\s]+$/, "Only alpha numeric")
      .min(2)
      .max(25)
      .required("Required Field"),
    region: Yup.string().required("Required Field"),
  });

  const formik = useFormik({
    initialValues: {
      businessName: "",
      region: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/contact-info");
    },
  });

  const styles = {
    registerWrap: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // alignItems: "center",
      //   color: "#fff",
      height: width > 940 ? "100dvh" : "auto",
      py: "10px",
      px: "20px",
      // backgroundColor: "#fff",
    },
    registerContent: {
      // maxWidth: width > 768 ? "448px" : "100%",
      // maxHeight: "430px",
      border: width > 768 ? "1px solid #8C8C8C" : "none",
      borderRadius: width > 768 ? "12px" : "none",
      // boxShadow:
      //   width > 768 ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "none",
      px: "5px",
      py: "20px",
      backgroundColor: width > 768 ? "#121212" : null,
      display: "flex",
      flexDirection: "column",
    },
    formWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: " flex-end",
      alignContent: " flex-end",
      flexDirection: "column",
    },
    heading: {
      fontSize: "17px",
      fontWeight: 650,
      py: "2px",
      px: "5px",
    },
    label: {
      fontSize: "20px",
      fontWeight: 400,
      color: "#f5f4f4",
      py: 0.5,
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
      padding: "5px 16px",
      color: "#fff",
      borderRadius: "4px",
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "capitalize",
      marginLeft: "7px",
      "&:hover": {
        background: "#1472b8",
      },
    },
    desc: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#7e7878",
      py: 1,
      px: 2,
    },
    title: {
      fontSize: "14px",
      fontWeight: 600,
      color: "#1470b6",
      paddingTop: "3px",
      paddingBottom: "3px",
      px: 2,
    },
    listItem: {
      // fontSize: "5px",
      fontWeight: 600,
      py: "0",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      // backgroundColor: "red",
    },
    listText: {
      fontSize: "12px",
      py: "0",
    },
    listIcon: {
      fontSize: "200px !important",
    },
    work: {
      marginTop: "9px",
      fontSize: "21px",
      fontWeight: "900",
    },
    work1: {
      paddingTop: "8px",
      fontSize: "14px",
    },
    Do: {
      fontSize: "25px",
      float: "left",
      fontWeight: "550",
      px: "4px",
      marginTop: "1rem",
    },
  };
  const handleChange2 = (event) => {
    setRegion(event.target.value);
  };

  return (
    <Box>
      <Box sx={styles.registerWrap}>
        {/* Heading */}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <img
                src={LogoPlusImg}
                alt="Logo"
                style={{ width: "170px", pt: "1px" }}
              />
            </Box>
          </Box>
        </Box>

        {/* grid */}

        <Box
          style={{
            display: "grid",
            justifyContent: "space-evenly",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 440px))",
            gap: "10px",
            padding: "0px",
          }}
        >
          {/* column 1 */}
          <Box>
            <Typography
              component="h2"
              sx={styles.heading}
              style={{ textAlign: "left" }}
            >
              Lets get started
            </Typography>
            <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  pt: 1,
                }}
              >
                <RHFTextField
                  formik={formik}
                  name="businessName"
                  type="text"
                  variant="outlined"
                  placeholder="Business Name"
                />
              </Box>
              <Box>
                <RadioGroup
                  sx={{ py: 1 }}
                  name="email"
                  onChange={handleRadioChange}
                >
                  <Typography
                    component="p"
                    sx={styles.number}
                    style={{ textAlign: "left", fontSize: "14px" }}
                  >
                    Number Of employees, including you
                  </Typography>
                  <FormControlLabel
                    value="just You"
                    control={<Radio sx={{ color: "gray", py: 1 }} />}
                    label="just You"
                    sx={{ whiteSpace: "normal" }}
                  />
                  <FormControlLabel
                    value="2-10"
                    control={<Radio sx={{ color: "gray", py: 1 }} />}
                    label="2-10"
                    sx={{ whiteSpace: "normal" }}
                  />
                  <FormControlLabel
                    value="11-100"
                    control={<Radio sx={{ color: "gray", py: 1 }} />}
                    label="11-100"
                    sx={{ whiteSpace: "normal" }}
                  />
                  <FormControlLabel
                    value="101-300"
                    control={<Radio sx={{ color: "gray", py: 1 }} />}
                    label="101-300"
                    sx={{ whiteSpace: "normal" }}
                  />
                  <FormControlLabel
                    value="300+"
                    control={<Radio sx={{ color: "gray", py: 1 }} />}
                    label="300+"
                    sx={{ whiteSpace: "normal" }}
                  />
                </RadioGroup>
              </Box>

              <Box style={{ width: "100%" }}>
                <RHFSelect
                  formik={formik}
                  name="region"
                  placeholder="Region"
                  data={regionArray}
                  variant="outlined"
                />
              </Box>
              <Box style={{ marginTop: "20px" }}>
                <Button
                  type="submit"
                  sx={styles.button}
                  disabled={!selectedOption}
                  variant="contained"
                >
                  next
                </Button>
              </Box>
            </form>
          </Box>

          {/* column 2 */}
          <Box sx={styles.registerContent}>
            <Box>
              <Box>
                <img
                  src={videoLogo}
                  alt="A girl with the mobile"
                  style={{
                    width: "120px",
                    float: "left",
                    marginTop: "1rem",
                  }}
                />

                <Typography component="h1" sx={styles.work}>
                  Work remotely with confidence.
                </Typography>
                <Typography sx={styles.work1}>
                  Use Clikkle Crew to host secure, high-quality video meetings
                  right from your email or calender.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={styles.Do}>Do more with Clikkle Plus.</Typography>
              <img
                src={icon}
                alt="A girl with the mobile"
                style={{ width: "90%" }}
              />
            </Box>

            <ul>
              <li style={styles.listItem}>
                <CgCheck style={{ fontSize: " 25px", color: "#1472b8" }} />
                <Typography component="p" sx={styles.listText}>
                  Cloud-based, no installation needed
                </Typography>
              </li>
              <li style={styles.listItem}>
                <CgCheck style={{ fontSize: " 25px", color: "#1472b8" }} />
                <Typography component="p" sx={styles.listText}>
                  Custom email with Your domain
                </Typography>
              </li>
              <li style={styles.listItem}>
                <CgCheck
                  style={{
                    fontSize: "25px",
                    color: "#1472b8",
                  }}
                />
                <Typography component="p" sx={styles.listText}>
                  Advanced security and admin features
                </Typography>
              </li>
              <li style={styles.listItem}>
                <CgCheck style={{ fontSize: " 25px", color: "#1472b8" }} />
                <Typography component="p" sx={styles.listText}>
                  Easy of mind with 24/7 support
                </Typography>
              </li>
              <li style={styles.listItem}>
                <CgCheck style={{ fontSize: " 25px", color: "#1472b8" }} />
                <Typography component="p" sx={styles.listText}>
                  No charge during 14/day trial, monthly charge after{" "}
                </Typography>
              </li>
            </ul>
          </Box>
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

export default BusinessDetail;
