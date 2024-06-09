import React, { useRef } from "react";
import { CgCheck } from "react-icons/cg";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import LogoImg from "../../../../../assets/logo.png";
import BusinessDm from "../../../../../assets/business DM.png";
import singleDm from "../../../../../assets/single DM.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useWidth from "../../../../../hooks/useSize";

const Register = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({});

  const formik = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/personal-details");
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
      maxHeight: "430px",
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
      textTransform: "captalize",
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
                src={LogoImg}
                alt="Logo"
                style={{ width: width > 768 ? "30px" : "50px", pt: "1px" }}
              />
            </Box>
            <Box sx={{ color: "#7e7878", fontWeight: 700, fontSize: "24px" }}>
              Clikkle
            </Box>
          </Box>
          <Box sx={{ py: width > 768 ? 1 : 1, textAlign: "center" }}>
            <Typography component="h2" sx={styles.heading}>
              Choose the email that is best for your business
            </Typography>
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
          <Box sx={styles.registerContent}>
            <Typography
              component="p"
              sx={styles.title}
              style={{ textAlign: "left" }}
            >
              14 days free trial, monthly charge after trial
            </Typography>
            <Typography
              component="h2"
              sx={styles.heading}
              style={{ textAlign: "left" }}
            >
              Custom email and productivity feature for your business
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                py: 1,
              }}
            >
              <Link to="/number-of-employee" style={styles.button}>
                Try Clikkle Plus
              </Link>
            </Box>
            <ul>
              <li style={styles.listItem}>
                <CgCheck style={{ fontSize: " 25px", color: "#1472b8" }} />
                <Typography component="p" sx={styles.listText}>
                  Professional email, you @ your-company.com
                </Typography>
              </li>
              <li style={styles.listItem}>
                <CgCheck style={{ fontSize: " 25px", color: "#1472b8" }} />
                <Typography component="p" sx={styles.listText}>
                  Up to 5 Tb of storage per user in Clikkle Files
                </Typography>
              </li>
              <li style={styles.listItem}>
                <CgCheck
                  style={{
                    fontSize: "25px",
                    color: "#1472b8",
                  }}
                />
                <Typography
                  component="p"
                  style={{ width: "390px", textAlign: "left" }}
                  sx={styles.listText}
                >
                  Premium features like longer video meetings, advanced
                  appointment scheduling, and the option to add Duet AI
                </Typography>
              </li>
            </ul>

            <Box sx={{ textAlign: "center" }}>
              <img
                src={BusinessDm}
                alt="Logo"
                style={{ width: "40%", marginTop: "5px" }}
              />
            </Box>
          </Box>

          {/* column 2 */}
          <Box sx={styles.registerContent}>
            <Typography
              component="p"
              sx={styles.title}
              style={{ textAlign: "left" }}
            >
              No Cost
            </Typography>
            <Typography
              component="h2"
              sx={styles.heading}
              style={{ textAlign: "left" }}
            >
              A Clikkmail address for You
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                py: 3,
              }}
            >
              <Link to="/register" style={styles.button}>
                Get a Clikkmail Address
              </Link>
            </Box>
            <ul>
              <li style={styles.listItem}>
                {/* <ListItemIcon></ListItemIcon> */}
                <CgCheck style={{ fontSize: " 25px", color: "#1472b8" }} />
                <Typography component="p" sx={styles.listText}>
                  @clikkmail email address
                </Typography>
              </li>
              <li style={styles.listItem}>
                <CgCheck style={{ fontSize: " 25px", color: "#1472b8" }} />
                <Typography component="p" sx={styles.listText}>
                  15Gb of storage in clikkle Files
                </Typography>
              </li>
            </ul>
            <Box
              sx={{
                textAlign: "center",
                marginTop: "auto",
              }}
            >
              <img
                src={singleDm}
                alt="A girl with the mobile"
                style={{ width: "50%" }}
              />
            </Box>
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

export default Register;
