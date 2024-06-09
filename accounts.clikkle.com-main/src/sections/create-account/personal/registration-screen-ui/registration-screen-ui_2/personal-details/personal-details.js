import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useWidth from "../../../../../../hooks/useSize";
import RHFSelect from "../../../../../../components/rhf-select";
import RHFTextField from "../../../../../../components/rhf-textField";
import LogoImg from "../../../../../../assets/logo.png";

const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysArray = Array.from({ length: 31 }, (_, i) => i + 1);
const yearsArray = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
);

const PersonalDetails = () => {
  const navigate = useNavigate();
  const width = useWidth();

  const validationSchema = Yup.object({
    gender: Yup.string().required("Required Field"),
    months: Yup.string()
      .required("Required Field")
      .test("valid-month", "Invalid Month", function (value) {
        return monthsArray.includes(value);
      }),
    days: Yup.string()
      .required("Required Field")
      .test("positive-day", "Invalid Day", function (value) {
        return parseInt(value) > 0 && parseInt(value) < 32;
      }),
    years: Yup.string()
      .required("Required Field")
      .test("positive-year", "Year must be greater than 0", function (value) {
        return parseInt(value) > 0;
      })
      .test("valid-year", "Invalid Year", function (value) {
        return yearsArray.includes(parseInt(value));
      })
      .test("valid-age", "You must be at least 18 years old", function (value) {
        const today = new Date();
        const birthDate = new Date(
          `${formik.values.months} ${formik.values.days}, ${value}`
        );
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          return age - 1 >= 18;
        }
        return age >= 18;
      }),
  });

  const formik = useFormik({
    initialValues: {
      gender: "",
      months: "",
      days: "",
      years: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("registerSecondScreen", JSON.stringify(values));
      navigate("/choose-mail");
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
      height: width > 768 ? "500px" : "100%",
      border: width > 768 ? "1px solid #8C8C8C" : "none",
      borderRadius: width > 768 ? "12px" : "none",
      // boxShadow:
      //   width > 768 ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "none",
      px: "35px",
      py: "35px",
      backgroundColor: width > 768 ? "#121212" : null,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    formWrapper: {
      paddingTop: "0px",
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
          <img src={LogoImg} alt="Logo" style={{ width: "8%" }} />
        </Box>
        <Box sx={{ pt: 2, textAlign: "center" }}>
          <Typography component="h2" sx={styles.heading}>
            Personal Details
          </Typography>
          <Typography component="h4" sx={styles.label}>
            Enter your Gender and Birthday
          </Typography>
          <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
            <Box>
              <RHFSelect
                formik={formik}
                name="gender"
                placeholder="Gender"
                data={["Male", "Female"]}
                variant="filled"
                sx={{}}
              />
              <Grid container spacing={2} sx={{ pt: 2 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <RHFSelect
                    formik={formik}
                    name="months"
                    placeholder="Month"
                    data={monthsArray}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <RHFTextField
                    formik={formik}
                    name="days"
                    placeholder="Day"
                    data={daysArray}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <RHFTextField
                    formik={formik}
                    name="years"
                    placeholder="Year"
                    data={yearsArray}
                  />
                </Grid>
              </Grid>
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

export default PersonalDetails;
