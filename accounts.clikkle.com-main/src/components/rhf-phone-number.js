// Import necessary libraries and modules

import React, { useState } from "react";
import { FormLabel, Stack, TextField, Typography } from "@mui/material";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string(),
});

const RHFPhoneInput = ({
  formik,
  name,
  type = "text",
  variant,
  readOnly = false,
  outerLabel,
  placeholder = "Enter phone number",
  ...other
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (value) => {
    setPhoneNumber(value);
  };

  const handleBlur = () => {
    validationSchema
      .validate({ phoneNumber })
      .then(() => {
        // Validation succeeded
      })
      .catch((error) => {
        // Handle validation error
        console.error(error.message);
      });
  };

  return (
    <Stack>
      {outerLabel && <FormLabel>{outerLabel}</FormLabel>}
      <TextField
        fullWidth
        name={name}
        type={type}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={validationSchema?.errors?.phoneNumber || ""}
        variant={variant ? variant : "filled"}
        InputProps={{
          readOnly,
          inputComponent: PhoneInputComponent,
          inputProps: {
            value: phoneNumber,
            onChange: handleChange,
            placeholder,
          },
        }}
        {...other}
        sx={{ ...other.sx, ...styles.root }}
      />
      {formik.touched[name] && formik.errors[name] && (
        <Typography sx={styles.error} gutterBottom>
          {formik.errors[name]}
        </Typography>
      )}
    </Stack>
  );
};

const PhoneInputComponent = ({ value, onChange, placeholder, ...other }) => {
  return (
    <PhoneInput
      {...other}
      value={value}
      onChange={onChange}
      defaultCountry="PK"
      placeholder={placeholder}
    />
  );
};

const styles = {
  root: {
    "& .PhoneInput": {
      display: "flex",
      alignItems: "center",
      "&:hover .PhoneInputInput": {
        backgroundColor: "transparent",
        color: "#7e7878",
      },

      "& .PhoneInputInput": {
        border: "none",
        color: "#7e7878",
        backgroundColor: "transparent",
        "&:focus-visible": {
          outline: "none",
          color: "#7e7878",
        },
      },
    },
  },
  error: {
    textAlign: "left",
    color: "#b50000",
    fontSize: "14px",
    fontWeight: 500,
  },
};
export default RHFPhoneInput;
