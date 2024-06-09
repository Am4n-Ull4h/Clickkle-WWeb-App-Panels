import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const RHFSelect = (props) => {
  const {
    formik,
    name,
    placeholder,
    inputPorps,
    controlSx,
    data,
    variant,
    ...rootSx
  } = props;
  return (
    <FormControl sx={{ width: "100%", color: "white", ...controlSx }}>
      <InputLabel>{placeholder}</InputLabel>
      <Select
        fullWidth
        name={name}
        variant={variant ? variant : "filled"}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        MenuProps={{ style: { maxHeight: 300 } }}
        {...inputPorps}
        {...rootSx}
      >
        {data?.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      {formik.touched[name] && formik.errors[name] && (
        <Typography sx={styles.error} gutterBottom>
          {formik.errors[name]}
        </Typography>
      )}
    </FormControl>
  );
};

export default RHFSelect;

const styles = {
  textField: {
    "& .MuiFilledInput-root": {
      background: "#242424",
      color: "#7e7878",
      borderRadius: "8px",
      "& .MuiSelect-select": {
        py: "18px",
        textAlign: "left",
        lineHeight: "inherit",
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
    position: "absolute",
    bottom: "-28px",
    left: 0,
  },
};
