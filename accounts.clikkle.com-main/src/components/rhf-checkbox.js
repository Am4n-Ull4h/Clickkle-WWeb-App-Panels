import { Checkbox, FormControl, FormControlLabel, Typography } from '@mui/material'
import React from 'react'

const RHFCheckbox = (props) => {
    const { label, handleChange, controlSx } = props;
    return (
        <FormControl sx={{ ...controlSx }}>
            <FormControlLabel control={<Checkbox sx={styles.checkbox} classes={{ root: 'checkbox' }} onChange={handleChange} />} label={<Typography sx={styles.label}>{label}</Typography>} />
        </FormControl>
    )
}

export default RHFCheckbox;
const styles = {
    label: { 
        fontSize: '14px',
        fontWeight: 600,
        color: '#7e7878'
    },
    checkbox: {
        "&.checkbox": {
            color: '#2a2a2a'
        }
    }
}