import React from "react";
import { FormControl, TextField, Typography } from "@mui/material";

const RHFTextField = (props) => {
  const {
    formik,
    variant,
    name,
    type,
    placeholder,
    inputPorps,
    controlSx,
    ...rootSx
  } = props;
  return (
    <FormControl sx={{ width: "100%", ...controlSx }}>
      <TextField
        fullWidth
        placeholder={placeholder}
        name={name}
        type={type}
        variant={variant ? variant : "filled"}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        InputProps={{ ...inputPorps, disableUnderline: true }}
        sx={styles.textField}
        {...rootSx}
      />
      {formik.touched[name] && formik.errors[name] && (
        <Typography sx={styles.error} gutterBottom>
          {formik.errors[name]}
        </Typography>
      )}
    </FormControl>
  );
};

export default RHFTextField;

const styles = {
  textField: {
    "& .MuiFilledInput-root": {
      background: "#242424",
      color: "#7e7878",

      borderRadius: "8px",
      "& input": {
        py: "18px",
        lineHeight: "inherit",
        fontStyle: "italic",
        fontSize: "14px",
        px: "20px",
        "&::placeholder": {
          fontWeight: 600,
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
