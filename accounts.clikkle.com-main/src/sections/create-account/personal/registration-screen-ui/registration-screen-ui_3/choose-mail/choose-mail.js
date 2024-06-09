import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LogoImg from "../../../../../../assets/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControlLabel,
  Radio,
  InputAdornment,
  RadioGroup,
} from "@mui/material";
import RHFTextField from "../../../../../../components/rhf-textField";
import useWidth from "../../../../../../hooks/useSize";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ChooseMail = () => {
  const width = useWidth();
  const navigate = useNavigate();

  const [showEmailField, setShowEmailField] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string().oneOf(
      ["adonisimperio@clikkmail.com", "adonisimperio60@clikkmail.com"],
      "Invalid email address"
    ),
    new_email: Yup.string()
      .matches(/^[a-zA-Z0-9]+$/, "Only alphabets and numbers are allowed")
      .min(2)
      .max(25),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      new_email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async(values, action) => {
      console.log('onSubmit',values);
      action.resetForm();
      var formData = new FormData();
      formData.append("email", values.new_email + '@clikkmail.com');
      let res = await pushToServer(formData);
      console.log('res',res)
      if(res){
        localStorage.setItem("registerThirdScreen", JSON.stringify(values));
        navigate("/create-password");
      }else{
        toast.error('Email exists');
      }
      // toast.error('Email.... exists');
      
    },
  });
  const pushToServer = async (formData) => {
    // console.log('process.env',process.env)
    try {
      const response = await fetch(
        // "http://localhost:5000/api/auth/check_email",
        // "http://clicklewebapp.medtronix.world/api/auth/email",
        "https://accounts.clikkle.com:5000/api/auth/check_email",
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
        console.log('registered',responseData)
        return true
        //navigate("/login_2");
      } else {
        // setErrorMessage(responseData.error);
        return false
        // console.error(responseData.error);
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
    },
    loginContent: {
      marginTop: "10px",
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
    },
    formWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignContent: "space-between",
      flexDirection: "column",
    },
    heading: {
      fontSize: width > 376 ? "24px" : "22px",
      fontWeight: 600,
    },
    label: {
      fontSize: "16px",
      fontWeight: 400,
      color: "#f5f4f4",
      py: 1,
    },
    desc: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#7e7878",
      pt: 3,
      px: 2,
    },
    radio: {
      color: "gray",
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
    emailInputAdornment: {
      fontSize: "13px",
      color: "#fff",
      fontWeight: 600,
      letterSpacing: 0.8,
      pt: 0.5,
    },
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;
    console.log('value',value)
    setSelectedOption(value);
    setShowEmailField(value === "Create your own Clikkmail address");
  };

  return (
    <Box sx={styles.loginWrap}>
      <Box sx={styles.loginContent}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={LogoImg}
              alt="Logo"
              style={{ width: width > 768 ? "8%" : "12%" }}
            />
          </Box>
        </Box>
        <Box sx={{ pt: 2, textAlign: "center" }}>
          <Typography component="h2" sx={styles.heading}>
            Choose your Clikkmail Address
          </Typography>
          <Typography component="h4" sx={styles.label}>
            Create Your Own
          </Typography>
          <form onSubmit={formik.handleSubmit} style={styles.formWrapper}>
            <Box>
              <RadioGroup
                value={selectedOption}
                onChange={handleRadioChange}
                sx={{ py: 3 }}
                name="email"
              >
                {/* <FormControlLabel
                  value="adonisimperio@clikkmail.com"
                  control={<Radio sx={{ color: "gray", py: 1 }} />}
                  label="adonisimperio @ clikkmail.com"
                  sx={{ whiteSpace: "normal" }}
                />
                <FormControlLabel
                  value="adonisimperio60@clikkmail.com"
                  control={<Radio sx={{ color: "gray", py: 1 }} />}
                  label="adonisimperio60 @ clikkmail.com"
                  sx={{ whiteSpace: "normal" }}
                /> */}
                <FormControlLabel
                  value="Create your own Clikkmail address"
                  control={<Radio sx={{ color: "gray", py: 1 }} />}
                  label="Create your own Clikkmail address"
                  sx={{ whiteSpace: "normal" }}
                />
                {showEmailField && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <RHFTextField
                      formik={formik}
                      name="new_email"
                      type="text"
                      placeholder="Create your own Clikkmail address"
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
                  </Box>
                )}
              </RadioGroup>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  pt: 2.8,
                }}
              >
                <Button
                  sx={styles.button}
                  type="submit"
                  disabled={
                    !selectedOption ||
                    (selectedOption === "Create your own Clikkmail address" &&
                      formik.values.new_email.trim() === "")
                  }
                >
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

export default ChooseMail;
