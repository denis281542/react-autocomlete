import TextField from '@mui/material/TextField';
import { useState } from 'react';

export const Input = ({type, label, name, required, onChange, value, isValid, errorMessageEmpty, errorMessageInvalid, disabled}) => {
    const [dirty, setDirty] = useState(false);

    const error = (dirty, input, isValid) => {
        return dirty && input === '' || dirty && !isValid()
    }

    const helperText = (dirty, input, isValid, error1, error2) => {
        if(dirty && input === '') {
          return error1
        }
        if(dirty && !isValid()) {
          return error2
        }
    }

    return(
      <TextField 
        required={required}
        id="outlined-basic" 
        type={type}  
        name={name}
        disabled={disabled}  
        label={label}
        variant="outlined" 
        onChange={onChange}
        value={value}
        onBlur={() => {
            setDirty(true)
            isValid()
        }}
        error={error(dirty, value, isValid)}
        onFocus={() => setDirty(false)}
        helperText={helperText(dirty, value, isValid, errorMessageEmpty, errorMessageInvalid)}
      />
    )
}